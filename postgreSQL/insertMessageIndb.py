import psycopg2
from datetime import date
from postgreSQL.configdb import configdb


def insertMessageIndb(message, author):

    try:
        params = configdb(section="heroku")
        connection = psycopg2.connect(**params)

        cursor = connection.cursor()
        now = date.today()
        postgreSQL_insert_Query = (
            "INSERT INTO public.messages(message, author, date) VALUES(%s, %s, %s);"
        )

        print(author)

        cursor.execute(postgreSQL_insert_Query, (message, author.first_name, now))
        connection.commit()

    except (Exception, psycopg2.Error) as error:
        print("Error while inserting data to PostgreSQL", error)

    finally:
        if connection:
            cursor.close()
            connection.close()
