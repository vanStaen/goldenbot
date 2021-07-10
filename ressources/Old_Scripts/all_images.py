import psycopg2
import boto3
import os
from decouple import config
from datetime import date
from postgreSQL.configdb import configdb

dir = os.path.dirname(__file__)
target = os.path.join(dir, 'all_images')

upload_file_bucket = config("S3_BUCKET_ID")
s3_client = boto3.client('s3',
                         aws_access_key_id=config("AWS_IAM_KEY"),
                         aws_secret_access_key=config("AWS_IAM_SECRET_KEY"))

for file in os.listdir(target):

    file_name = str(file)
    file_s3 = f"https://goldenbot-static01.s3.eu-central-1.amazonaws.com/{file_name}"

    try:
        params = configdb(section="heroku")
        connection = psycopg2.connect(**params)

        cursor = connection.cursor()
        now = date.today()
        postgreSQL_insert_Query = "INSERT INTO public.images(file_path, author_id, date_added, file_s3) VALUES(%s, 'TDB', %s, %s);"

        print(f"> Photo added to db")

        cursor.execute(
            postgreSQL_insert_Query,
            (file_name, now, file_s3),
        )
        connection.commit()

    except (Exception, psycopg2.Error) as error:
        print("Error while inserting data to PostgreSQL:", error)

    finally:
        if connection:
            cursor.close()
            connection.close()

    # save file to s3
    with open(f"all_images/{file_name}", "rb") as fileToS3:
        s3_client.upload_fileobj(fileToS3, upload_file_bucket, file_name)
        print(f"> Photo uploaded to s3")
