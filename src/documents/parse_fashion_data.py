import re
import csv
import pandas as pd
from typing import Dict, List


class UNSPECIFIED:
    pass


def str_to_dict(pattern: str, string: str) -> dict:
    """
    Create a dictionary from a string using sections of the string that match
    "pattern" as keys and the following portion of the string up to the next key
    as the corresponding values.

    Parameters
    ----------
    pattern : str
        Regex pattern.
    string : str
        Input str to split.

    Returns
    -------
    result : dict
        str_to_dict(r"\w+:", " hello: world") -> {"hello:", " world"}.

    """
    result = {}
    keys = re.findall(pattern, string)
    vals = re.split(pattern, string)
    for i, key in enumerate(keys):
        result[key] = vals[i + 1]
    return result


def clean_color(color: str) -> str:
    color = color.lower()
    if color == "balck":
        color = "black"
    if color[-1:] == "?":
        color = color[:-1]
    return color


def clean_age(age: str) -> str:
    age = age.lower().strip(' ')
    if "adult" in age and "young-adult" not in age:
        age = "adult"
    if age == "eldery":
        age = "elderly"
    if age == '?':
        age = "unsure"
    if "young-adult" in age:
        age = "young-adult"
    return age


def clean_gender(gender: str) -> str:
    gender = gender.lower().strip(' ')
    if "?" in gender:
        gender = "?"
    return gender


def clean_type(clothing_type: str) -> str:
    clothing_type = clothing_type.replace(' ', '-').lower()
    if clothing_type[-1:] == "?":
        clothing_type = clothing_type[:-1]
    return clothing_type


def parse_clothes_str(clothes_str: str) -> List[dict]:
    """
    Convert clothes items in the form "CLOTHING_PATTERN COLORS, CLOTHING_TYPE"
    separated by '\n' to list of dictionaries of the form:
    parsed_clothing_item = {
        "pattern": str, 
        "colors": [str,], 
        type: str
    }

    Parameters
    ----------
    clothes_str : str

    Returns
    -------
    clothes : list of dict

    """
    clothes = []
    for item in re.findall(r"\w[\w\- ,]+\w", str(clothes_str)):
        try:
            item_data = item.split(' ', 2)
            if len(item_data) >= 3:
                pattern, colors, clothing_type = item_data
            elif len(item_data) == 2:
                pattern = "solid"
                colors, clothing_type = item_data
            else:
                print(item_data)
                raise Exception("Unhandled format.")
            clothes.append({
                "pattern": pattern.lower(),
                "colors": [clean_color(color) for color in re.findall(r"[a-zA-Z\-]+", colors)],
                "type": clean_type(clothing_type)
            })
        except Exception as e:
            print(f"{type(e)}:", e)
    return clothes


def parse_fashion_docstxt(data_str: str) -> Dict[str, List[dict]]:
    """
    Function to convert the data from the "Photo Fashion Labeling Doc"
    (https://docs.google.com/document/d/1KdfWsdQIvrpasrcJT-LeuUq60XrVBC6QRb0Mt19JVyU/edit)
    to fashion_data dictionary:
    fashion_data = {
         "photo": [
             {
                 "gender": str,
                 "age_group": str,
                 "clothes": [parsed_clothing_item, ...]
             }, ...
         ], ...
    }
    """
    base = str_to_dict(r"\* \d+_\d+_\d+", data_str)
    base_parse = {
        key.strip("* "): str_to_dict(r"\* Person[\w(,\s\-):]*\n", val)
        for key, val in base.items()
    }
    fashion_data = {}
    for map_square, person_data in base_parse.items():
        people = []
        for person_demogs, clothes_str in person_data.items():
            parsed_data = {}
            gender, age_group = re.findall(
                r"[\w\-]+", re.findall(r"\([^\(\)]+\)", person_demogs)[0]
            )
            parsed_data["gender"] = clean_gender(gender)
            parsed_data["age_group"] = clean_age(age_group)
            parsed_data["clothes"] = parse_clothes_str(clothes_str)
            people.append(parsed_data)
        fashion_data[map_square] = people
    return fashion_data


def parse_fashion_csv(csv_path: str) -> Dict[str, List[dict]]:
    """
    Function to convert csv file to fashion_data dict
    Return: fashion_data, dict
    """
    data = pd.read_csv(csv_path)
    fashion_data = {}
    for row in data.itertuples():
        photo = re.findall(r"\d+_\d+_\d+", getattr(row, "photo"))[0]
        fashion_data.setdefault(photo, [])
        fashion_data[photo].append({
            "gender": clean_gender(getattr(row, "gender")),
            "age_group": clean_age(getattr(row, "age_category")),
            "clothes": parse_clothes_str(getattr(row, "clothes"))
        })
    return fashion_data


def fashion_data_to_csv(fashion_data: Dict[str, List[dict]], output_path: str) -> None:
    """
    Function to convert fashion_data dict to csv file.
    Return: None
    """
    with open(output_path, 'w', encoding="utf-8", newline='') as csvfile:
        fieldnames = ["photo", "gender", "age_category", "clothes"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()

        for photo, people in fashion_data.items():
            for person in people:
                clothes_str = "\n".join([
                    ' '.join([
                        item["pattern"], ','.join(item["colors"]), item["type"]
                    ]) for item in person["clothes"]
                ])
                writer.writerow({
                    "photo": photo,
                    "gender": person["gender"],
                    "age_category": person["age_group"],
                    "clothes": clothes_str
                })


def clothing_items(fashion_data: Dict[str, List[dict]]):
    """
    Generator for iterating over all clothing items in fashion_data
    """
    for i, photo in enumerate(fashion_data):
        for j, person in enumerate(fashion_data[photo]):
            for clothing in person["clothes"]:
                yield {
                    "photo": photo,
                    "person": (i, j),
                    "gender": person["gender"],
                    "age": person["age_group"],
                    "pattern": clothing["pattern"],
                    "colors": clothing["colors"],
                    "type": clothing["type"]
                }


def expression_eval(val_1, cond: str, val_2=UNSPECIFIED()):
    if isinstance(val_2, UNSPECIFIED):
        val_1, cond, val_2 = (True, val_1, cond)
    if cond == '=':
        result = val_1 == val_2
    elif cond == '>':
        result = val_1 > val_2
    elif cond == '<':
        result = val_1 < val_2
    elif cond == '<=':
        result = val_1 <= val_2
    elif cond == '>=':
        result = val_1 >= val_2
    elif cond == '!=':
        result = val_1 != val_2
    elif cond == 'or':
        result = val_1 or val_2
    elif cond == 'and':
        result = val_1 and val_2
    elif cond == 'not':
        result = not val_2
    elif cond == 'in':
        result = val_1 in val_2
    elif cond == 'not in':
        result = val_1 not in val_2
    elif cond == "cont":
        result = val_2 in val_1
    elif cond == "not cont":
        result = val_2 not in val_1
    else:
        raise Exception(f"Evaluation Error: Unrecognized operator '{cond}'.")
    return result


def filter_data(
        fashion_data: Dict[str, List[dict]], conditions: List[list],
        given=None, item_type="clothing"):
    """
    Returns the items in fashion data that match the conditions (obj, str, obj) listed
    in `conditions` given they meet the conditions listed in `given` if they are provided
    """

    items = []
    all_items = []
    given = [] if given is None else given

    def check_cond(item, conditions):
        or_bools = []
        for or_cond in conditions:
            or_cond = [or_cond] if not isinstance(or_cond, list) else or_cond
            or_bools.append(all(
                expression_eval(item[cond], op, val)
                for cond, op, val in or_cond
            ))
        return any(or_bools)

    all_items = [
        item for item in clothing_items(fashion_data)
        if check_cond(item, given)
    ] if given else list(clothing_items(fashion_data))

    items = [
        item for item in all_items if check_cond(item, conditions)
    ]
    if item_type != "clothing":
        items = {item[item_type] for item in items}
        all_items = {item[item_type] for item in all_items}

    percent = -1
    if all_items:
        percent = round(100 * len(items) / len(all_items), 2)
    return items, all_items, percent
