import psycopg2
from postgreSQL.configdb import configdb


def selectAllUser():

    try:
        params = configdb(section="heroku")
        connection = psycopg2.connect(**params)

        cursor = connection.cursor()
        postgreSQL_select_Query = "SELECT * FROM users"

        cursor.execute(postgreSQL_select_Query)
        data = cursor.fetchall()

        return data[0][0]

    except (Exception, psycopg2.Error) as error:
        print("Error while fetching data from PostgreSQL", error)

    finally:
        if connection:
            cursor.close()
            connection.close()
