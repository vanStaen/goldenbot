import psycopg2
import boto3
import os
from urllib import request
from decouple import config
from datetime import date
from postgreSQL.configdb import configdb


def insertImageIndb(author, file_info):

    file_name = file_info.file_path.replace("/", "_")
    file_s3 = f"https://goldenbot-static01.s3.eu-central-1.amazonaws.com/{file_name}"

    try:
        params = configdb(section="heroku")
        connection = psycopg2.connect(**params)

        cursor = connection.cursor()
        now = date.today()
        postgreSQL_insert_Query = "INSERT INTO public.images(file_id, file_path, author_id, date_added, file_s3) VALUES(%s, %s, %s, %s);"

        print(f"> Photo added to db")

        cursor.execute(
            postgreSQL_insert_Query,
            (file_info.file_id, file_info.file_path, author.id, now, file_s3),
        )
        connection.commit()

    except (Exception, psycopg2.Error) as error:
        print("Error while inserting data to PostgreSQL:", error)

    finally:
        if connection:
            cursor.close()
            connection.close()

    # Download Image
    image_full_path = 'https://api.telegram.org/file/bot{0}/{1}'.format(
        config("API_KEY"), file_info.file_path)
    request.urlretrieve(image_full_path, f"uploads/{file_name}")

    # save file to s3
    s3_client = boto3.client(
        's3',
        aws_access_key_id=config("AWS_IAM_KEY"),
        aws_secret_access_key=config("AWS_IAM_SECRET_KEY"))
    upload_file_bucket = config("S3_BUCKET_ID")

    with open(f"uploads/{file_name}", "rb") as file:
        s3_client.upload_fileobj(file, upload_file_bucket, file_name)
        print(f"> Photo uploaded to s3")
        os.remove(f"uploads/{file_name}")
