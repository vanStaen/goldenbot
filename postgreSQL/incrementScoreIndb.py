import psycopg2
from postgreSQL.configdb import configdb
from postgreSQL.insertNewUserIndb import insertNewUserIndb


def incrementScoreIndb(author):

    try:
        params = configdb(section="heroku")
        connection = psycopg2.connect(**params)

        cursor = connection.cursor()
        postgreSQL_select_Query = "select score from users WHERE telegram_id='%s'"
        cursor.execute(postgreSQL_select_Query, (author.id,))
        user_score = cursor.fetchone()

        if user_score:
            print(f"> Increment score for {author.first_name}")
            print(f"Old score: {user_score[0]}")
            user_score_incremented = user_score[0] + 1
            postgreSQL_update_Query = "UPDATE users SET score=%s WHERE telegram_id='%s'"
            cursor.execute(
                postgreSQL_update_Query,
                (user_score_incremented, author.id),
            )
            connection.commit()
            print(f"New score: {user_score_incremented}")
        else:
            insertNewUserIndb(author)
            print("> New user, will be added to the user db")

    except (Exception, psycopg2.Error) as error:
        print("Error while incrementing score in database: ", error)

    finally:
        if connection:
            cursor.close()
            connection.close()
