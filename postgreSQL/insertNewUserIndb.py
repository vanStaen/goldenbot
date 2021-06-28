import psycopg2
from datetime import date
from postgreSQL.configdb import configdb


def insertNewUserIndb(author):

    try:
        params = configdb(section="heroku")
        connection = psycopg2.connect(**params)

        cursor = connection.cursor()
        initial_score = 5
        postgreSQL_insert_Query = "INSERT INTO users(username, score, first_name, last_name, telegram_id) VALUES(%s, %s, %s, %s, %s);"

        print(f"User '{author.username}' added to db")

        cursor.execute(
            postgreSQL_insert_Query,
            (
                author.username,
                initial_score,
                author.first_name,
                author.last_name,
                author.id,
            ),
        )
        connection.commit()

    except (Exception, psycopg2.Error) as error:
        print("Error while inserting data to PostgreSQL", error)

    finally:
        if connection:
            cursor.close()
            connection.close()
