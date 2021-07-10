import psycopg2
import requests
from decouple import config
from datetime import date
from postgreSQL.configdb import configdb


def insertImageIndb(author, file_info):

    try:
        params = configdb(section="heroku")
        connection = psycopg2.connect(**params)

        cursor = connection.cursor()
        now = date.today()
        postgreSQL_insert_Query = "INSERT INTO public.images(file_id, file_path, author_id, date_added) VALUES(%s, %s, %s, %s);"

        print(f"> Photo added to db")

        cursor.execute(
            postgreSQL_insert_Query,
            (file_info.file_id, file_info.file_path, author.id, now),
        )
        connection.commit()

    except (Exception, psycopg2.Error) as error:
        print("Error while inserting data to PostgreSQL", error)

    finally:
        if connection:
            cursor.close()
            connection.close()

    # Download Image
    image_full_path = 'https://api.telegram.org/file/bot{0}/{1}'.format(
        config("API_KEY"), file_info.file_path)
    file = requests.get(image_full_path)
    # print(file)
    # TODO save file to s3