from decouple import config
from postgreSQL.insertMessageIndb import insertMessageIndb
from postgreSQL.incrementScoreIndb import incrementScoreIndb
from postgreSQL.getUserScoreFromdb import getUserScoreFromdb

import telebot

API_KEY = config("API_KEY")
APP_NAME = "GoldenCircleBerlinBot"
bot = telebot.TeleBot(API_KEY, parse_mode=None)

try:

    # Start command
    @bot.message_handler(commands=["start"])
    def send_welcome(message):
        chat_id = message.chat.id
        author = message.from_user
        if author.first_name:
            name = author.first_name
        else:
            name = author.first_username
        bot.send_message(chat_id, f"Welcome {name}!")
        bot.send_message(chat_id, "/score : get your score")
        bot.send_message(chat_id, "/rules : know the rules")
        bot.send_message(chat_id, "/help : need some help?")

    # Help command
    @bot.message_handler(commands=["help"])
    def send_welcome(message):
        chat_id = message.chat.id
        bot.send_message(chat_id, "/score : get your score")
        bot.send_message(chat_id, "/rules : know the rules")
        bot.send_message(chat_id, "/help : need some help?")

    # Rules command
    @bot.message_handler(commands=["rules"])
    def send_welcome(message):
        chat_id = message.chat.id
        bot.send_message(
            chat_id, "I forgot the rules, but soon they will be listed here."
        )

    # Score command
    @bot.message_handler(commands=["score"])
    def send_welcome(message):
        chat_id = message.chat.id
        author = message.from_user
        score = getUserScoreFromdb(author)

        if author.first_name:
            name = author.first_name
        else:
            name = author.first_username

        if score:
            bot.send_message(chat_id, f"Hello {name}, your actual score is {score}!")

        else:
            bot.send_message(chat_id, "Hello {name}! You don't have a score yet.")

    # The bot is listening
    @bot.message_handler(func=lambda message: True)
    def echo_all(message):
        chat_id = message.chat.id
        author = message.from_user
        # insertMessageIndb(message.text, author)
        incrementScoreIndb(author)
        if message.text == "test" or message.text == "Test":
            bot.send_message(chat_id, "Your test was successfull! Get a cookie.")
        else:
            bot.reply_to(
                message,
                "You wrote:"
                + message.text
                + ", but I don't now what this means. I am just a stupid robot.",
            )


except telebot.apihelper.ApiException as e:
    if e.result.status_code == 403 or e.result.status_code == 400:
        pass

bot.polling()
