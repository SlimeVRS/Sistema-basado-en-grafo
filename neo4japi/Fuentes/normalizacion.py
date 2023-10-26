import pandas as pd
import csv
import re


def normalization_for_file_4():

    with open("4._Principios_Activos_y_Presentación.csv", "r", encoding="UTF-8") as source:
        reader = csv.reader(source)

        with open("4_Normalizado.csv", "w", encoding="UTF-8") as result:
            writer = csv.writer(result)
            for r in reader:
                writer.writerow((r[1], r[5], r[7], r[8]))
        result.close()
    source.close()

    df = pd.read_csv("4_Normalizado.csv", encoding="UTF-8")
    df.drop_duplicates(subset=None, inplace=True)

    df.to_csv("4_Normalizado.csv", index=False)

def normalization_for_file_6():
    with open("6-Medicamentos_adquiridos_por_hospital.csv", "r", encoding="UTF-8") as source:
        reader = csv.reader(source)

        with open("6_Normalizado.csv", "w", encoding="UTF-8") as result:
            writer = csv.writer(result)
            for r in reader:
                writer.writerow((r[2], r[6], r[8], r[9]))
        result.close()
    source.close()

    df = pd.read_csv("6_Normalizado.csv", encoding="UTF-8")
    df.drop_duplicates(subset=None, inplace=True)

    df.to_csv("6_Normalizado.csv", index=False)

def normalization_for_file1():
    with open("1.1_Nombre_de_productos_genéricos_y_Farmaceutica.csv", "r", encoding="UTF-8") as source:
        reader = csv.reader(source)

        with open("1_Normalizado.csv", "w", encoding="UTF-8") as result:
            writer = csv.writer(result)
            for r in reader:
                writer.writerow((eliminar_numero(r[0]), r[1], r[2], r[3], r[5], r[6], r[9]))
        result.close()
    source.close()

    df = pd.read_csv("1_Normalizado.csv", encoding="UTF-8")
    df.drop_duplicates(subset=None, inplace= True)
    df.to_csv("1_Normalizado.csv", index=False)

def eliminar_numero(string):
    new_string = re.sub(r'\d.*', '', string)
    return new_string[:-1]

def obtener_estado():
    with open("1.1_Nombre_de_productos_genéricos_y_Farmaceutica.csv", "r", encoding="UTF-8") as source:
        reader = csv.reader(source)

        with open("1_estado.csv", "w", encoding="UTF-8") as result:
            writer = csv.writer(result)
            for r in reader:
                writer.writerow((r[2], r[11]))
        result.close()
    source.close()

    df = pd.read_csv("1_estado.csv", encoding="UTF-8")
    df.drop_duplicates(subset=None, inplace= True)
    df.to_csv("1_estado.csv", index=False)

normalization_for_file1()
normalization_for_file_4()
normalization_for_file_6()