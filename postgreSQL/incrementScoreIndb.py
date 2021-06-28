import psycopg2
from postgreSQL.configdb import configdb
from postgreSQL.insertNewUserIndb import insertNewUserIndb


def incrementScoreIndb(author):

    try:
        params = configdb(section="heroku")
        connection = psycopg2.connect(**params)

        cursor = connection.cursor()
        postgreSQL_select_Query = "select username from users WHERE telegram_id='%s'"
        cursor.execute(postgreSQL_select_Query, (author.id,))
        user_data = cursor.fetchone()

        if user_data:
            print(user_data)
        else:
            print("No user found, add to db")
            insertNewUserIndb(author)

    except (Exception, psycopg2.Error) as error:
        print("Error while incrementing score in database: ", error)

    finally:
        if connection:
            cursor.close()
            connection.close()
