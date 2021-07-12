import psycopg2
from datetime import date
from postgreSQL.configdb import configdb


def insertNewUserIndb(author, message, new):

    try:
        params = configdb(section="heroku")
        connection = psycopg2.connect(**params)

        cursor = connection.cursor()

        print(f"> User '{author.username}' added to db")

        now = date.today()
        if new == True:
            postgreSQL_insert_Query = "INSERT INTO users(username, activity, first_name, last_name, telegram_id, joined_date ) VALUES(%s, %s, %s, %s, %s, %s);"
            cursor.execute(
                postgreSQL_insert_Query,
                (
                    author.username,
                    1,
                    author.first_name,
                    author.last_name,
                    author.id,
                    now,
                ),
            )
        else:
            postgreSQL_insert_Query = "INSERT INTO users(username, activity, first_name, last_name, telegram_id, last_seen_date, last_seen_on) VALUES(%s, %s, %s, %s, %s, %s, %s);"
            cursor.execute(
                postgreSQL_insert_Query,
                (
                    author.username,
                    1,
                    author.first_name,
                    author.last_name,
                    author.id,
                    now,
                    message.chat.title,
                ),
            )

        connection.commit()

    except (Exception, psycopg2.Error) as error:
        print("Error while inserting data to PostgreSQL", error)

    finally:
        if connection:
            cursor.close()
            connection.close()
