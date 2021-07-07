import psycopg2
from datetime import date
from postgreSQL.configdb import configdb
from postgreSQL.insertNewUserIndb import insertNewUserIndb


def updateUserIndb(author, message):

    try:
        params = configdb(section="heroku")
        connection = psycopg2.connect(**params)

        cursor = connection.cursor()
        postgreSQL_select_Query = "select activity, username, first_name, last_name from users WHERE telegram_id='%s'"
        cursor.execute(postgreSQL_select_Query, (author.id,))
        user = cursor.fetchone()

        if user:
            print(f"> Update user tracking for {author.first_name}")
            user_activity_incremented = user[0] + 1
            now = date.today()
            postgreSQL_update_Query = "UPDATE users SET activity=%s, last_seen_date=%s, last_seen_on=%s WHERE telegram_id='%s'"
            cursor.execute(
                postgreSQL_update_Query,
                (user_activity_incremented, now, message.chat.title, author.id),
            )
            connection.commit()

            ### TODO: if name changes update those
            username = user[1]
            first_name = user[2]
            last_name = user[3]

        else:
            insertNewUserIndb(author, message, False)

    except (Exception, psycopg2.Error) as error:
        print("Error while udpating user in database: ", error)

    finally:
        if connection:
            cursor.close()
            connection.close()
