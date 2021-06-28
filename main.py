from decouple import config
from postgreSQL.selectUser import selectAllUser
import telebot

API_KEY = config("API_KEY")
bot = telebot.TeleBot(API_KEY, parse_mode=None)

try:

    @bot.message_handler(commands=["help"])
    def send_welcome(message):
        bot.reply_to(message, "Dude, how that thing is working?")


    @bot.message_handler(commands=["score"])
    def send_welcome(message):
        bot.reply_to(message, "I don't know your score yet.")


    @bot.message_handler(func=lambda message: True)
    def echo_all(message):
        bot.reply_to(message, "You wrote:" + message.text)

except telebot.apihelper.ApiException as e:
  if e.result.status_code == 403 or e.result.status_code == 400:
   pass 

bot.polling()