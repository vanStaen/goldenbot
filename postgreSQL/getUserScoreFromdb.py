import psycopg2
from postgreSQL.configdb import configdb


def getUserScoreFromdb(author):

    try:
        params = configdb(section="heroku")
        connection = psycopg2.connect(**params)

        cursor = connection.cursor()
        postgreSQL_select_Query = "select score from users WHERE telegram_id='%s'"

        cursor.execute(postgreSQL_select_Query, (author.id,))
        user_score = cursor.fetchone()

        if user_score:
            return user_score[0]

        else:
            return user_score

    except (Exception, psycopg2.Error) as error:
        print("Error while fetching the user score", error)

    finally:
        if connection:
            cursor.close()
            connection.close()
