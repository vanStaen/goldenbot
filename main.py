from decouple import config
from postgreSQL.insertMessageIndb import insertMessageIndb
from postgreSQL.incrementScoreIndb import incrementScoreIndb
from postgreSQL.getUserScoreFromdb import getUserScoreFromdb

import telebot
import requests

API_KEY = config("API_KEY")
bot = telebot.TeleBot(API_KEY, parse_mode=None)


def get_random_kinkograph():
    contents = requests.get("http://kinkograph.com/random").json()
    url = contents["url"]
    print(url)
    return url


try:

    # Start command
    @bot.message_handler(commands=["start"])
    def send_welcome(message):
        chat_id = message.chat.id
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

    # RandomPic command
    # @bot.message_handler(commands=["roulette"])
    # def send_welcome(message):
    #    chat_id = message.chat.id
    #    url = get_random_kinkograph()
    #    bot.send_photo(chat_id=chat_id, photo=url)

    # The bot is listening
    @bot.message_handler(func=lambda message: True)
    def echo_all(message):
        author = message.from_user
        # insertMessageIndb(message.text, author)
        incrementScoreIndb(author)
        if message.text == "test":
            bot.reply_to(message, "Your test was successfull! Get a cookie.")
        # bot.reply_to(message, "You wrote:" + message.text)


except telebot.apihelper.ApiException as e:
    if e.result.status_code == 403 or e.result.status_code == 400:
        pass

bot.polling()
