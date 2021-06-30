from decouple import config
from postgreSQL.insertMessageIndb import insertMessageIndb
from postgreSQL.incrementScoreIndb import incrementScoreIndb
from postgreSQL.getUserScoreFromdb import getUserScoreFromdb
from helpers.customPrint import customPrint

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
        bot.send_message(chat_id, "/score : to get your score")
        bot.send_message(chat_id, "/rules : to learn the rules")
        bot.send_message(chat_id, "/help : you need some help?")

    # Help command
    @bot.message_handler(commands=["help"])
    def send_welcome(message):
        chat_id = message.chat.id
        bot.send_message(chat_id, "/score : to get your score")
        bot.send_message(chat_id, "/rules : to learn the rules")
        bot.send_message(chat_id, "/help : you need some help?")

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

    ####################################
    # The bot is listening to channels #
    ####################################
    @bot.channel_post_handler(func=lambda message: True)
    def echo_all(message):
        customPrint(message)

    ######################################################
    # The bot is listening to messages (direct or group) #
    ######################################################
    @bot.message_handler(func=lambda message: True)
    def echo_all(message):
        chat_id = message.chat.id
        author = message.from_user
        chat_type = message.chat.type
        customPrint(f"{author.username} wrote in a {chat_type} chat")
        if chat_type == "private":
            if message.text == "test" or message.text == "Test":
                bot.send_message(chat_id, "Your test was successfull! Get a cookie 🍪.")
            else:
                bot.reply_to(
                    message,
                    "<b>I don't now what it means</b>. I am just a robot 🤖!",
                    parse_mode="HTML",
                )
        # Track the messages sent
        insertMessageIndb(message.text, author)
        # Increment score of user
        # incrementScoreIndb(author)


except telebot.apihelper.ApiException as e:
    if e.result.status_code == 403 or e.result.status_code == 400:
        pass

bot.polling(none_stop=True)
