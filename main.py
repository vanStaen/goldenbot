from decouple import config
from postgreSQL.insertMessageIndb import insertMessageIndb
from postgreSQL.incrementScoreIndb import incrementScoreIndb
from postgreSQL.getUserScoreFromdb import getUserScoreFromdb

import telebot

API_KEY = config("API_KEY")
bot = telebot.TeleBot(API_KEY, parse_mode=None)

try:

    # Help command
    @bot.message_handler(commands=["help"])
    def send_welcome(message):
        chat_id = message.chat.id
        bot.send_message(chat_id, "/score -> to know your score")
        bot.send_message(chat_id, "/help -> to get some help")

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
        author = message.from_user
        insertMessageIndb(message.text, author)
        incrementScoreIndb(author)
        bot.reply_to(message, "You wrote:" + message.text)


except telebot.apihelper.ApiException as e:
    if e.result.status_code == 403 or e.result.status_code == 400:
        pass

bot.polling()
