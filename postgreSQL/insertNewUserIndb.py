import psycopg2
from datetime import date
from postgreSQL.configdb import configdb


def insertNewUserIndb(author, message, new):

    try:
        params = configdb(section="heroku")
        connection = psycopg2.connect(**params)

        cursor = connection.cursor()
        postgreSQL_insert_Query = "INSERT INTO users(username, activity, first_name, last_name, telegram_id, last_seen_date, last_seen_on) VALUES(%s, %s, %s, %s, %s, %s, %s);"

        print(f"> User '{author.username}' added to db")

        now = date.today()
        if new == True:
            time_stamp = "never"
            chat_title = "none"
        else:
            time_stamp = now
            chat_title = message.chat.title

        cursor.execute(
            postgreSQL_insert_Query,
            (
                author.username,
                1,
                author.first_name,
                author.last_name,
                author.id,
                time_stamp,
                chat_title,
            ),
        )
        connection.commit()

    except (Exception, psycopg2.Error) as error:
        print("Error while inserting data to PostgreSQL", error)

    finally:
        if connection:
            cursor.close()
            connection.close()
