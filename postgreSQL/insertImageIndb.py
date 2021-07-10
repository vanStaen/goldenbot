import psycopg2
from datetime import date
from postgreSQL.configdb import configdb


def insertImageIndb(author, message):

    try:
        params = configdb(section="heroku")
        connection = psycopg2.connect(**params)

        cursor = connection.cursor()
        now = date.today()
        postgreSQL_insert_Query = "INSERT INTO public.images(file_id, file_type, author_id, date_added) VALUES(%s, %s, %s, %s);"

        cursor.execute(
            postgreSQL_insert_Query,
            (message.json.document.file_id, message.json.document.mime_type,
             author.first_name, now),
        )
        connection.commit()

    except (Exception, psycopg2.Error) as error:
        print("Error while inserting data to PostgreSQL", error)

    finally:
        if connection:
            cursor.close()
            connection.close()
