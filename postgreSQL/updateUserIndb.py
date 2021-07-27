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
        cursor.execute(postgreSQL_select_Query, (author.id, ))
        user = cursor.fetchone()

        if user:

            if message.chat.type == "private":
                chat_title = "Private Chat"
            else:
                chat_title = message.chat.title

            print(f"> Update user tracking for {author.first_name}")
            if user[0]:
                user_activity_incremented = user[0] + 1
            else:
                user_activity_incremented = 1
            now = date.today()
            postgreSQL_update_Query = "UPDATE users SET activity=%s, last_seen_date=%s, last_seen_on=%s, last_seen_on_id=%s WHERE telegram_id='%s'"
            cursor.execute(
                postgreSQL_update_Query,
                (user_activity_incremented, now, chat_title, message.chat.id,
                 author.id),
            )
            connection.commit()

            # Update names in case of changes
            username = user[1]
            first_name = user[2]
            last_name = user[3]
            if username != author.username:
                postgreSQL_update_username_Query = "UPDATE users SET username=%s WHERE telegram_id='%s'"
                cursor.execute(postgreSQL_update_username_Query, (
                    author.username,
                    author.id,
                ))
            if first_name != author.first_name:
                postgreSQL_update_first_name_Query = "UPDATE users SET first_name=%s WHERE telegram_id='%s'"
                cursor.execute(postgreSQL_update_first_name_Query, (
                    author.first_name,
                    author.id,
                ))
            if last_name != author.last_name:
                postgreSQL_update_last_name_Query = "UPDATE users SET last_name=%s WHERE telegram_id='%s'"
                cursor.execute(postgreSQL_update_last_name_Query, (
                    author.last_name,
                    author.id,
                ))

        else:
            insertNewUserIndb(author, message, False)

    except (Exception, psycopg2.Error) as error:
        print("Error while udpating user in database: ", error)

    finally:
        if connection:
            cursor.close()
            connection.close()
