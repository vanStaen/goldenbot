from decouple import config
from postgreSQL.insertMessageIndb import insertMessageIndb
from postgreSQL.incrementScoreIndb import incrementScoreIndb

import telebot

API_KEY = config("API_KEY")
bot = telebot.TeleBot(API_KEY, parse_mode=None)

try:

    @bot.message_handler(commands=["help"])
    def send_welcome(message):
        bot.reply_to(message, "Dude, how that thing is working?")

    @bot.message_handler(commands=["score"])
    def insertMessage(message):
        bot.send_message(message, "I don't know your score yet.")

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
