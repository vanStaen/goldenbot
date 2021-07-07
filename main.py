from decouple import config
from postgreSQL.insertMessageIndb import insertMessageIndb
from postgreSQL.updateUserIndb import updateUserIndb
from postgreSQL.insertNewUserIndb import insertNewUserIndb
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
        bot.send_message(chat_id, "/rules : to learn the rules")
        bot.send_message(chat_id, "/help : you need some help?")

    # Help command
    @bot.message_handler(commands=["help"])
    def send_welcome(message):
        chat_id = message.chat.id
        bot.send_message(chat_id, "/rules : to learn the rules")
        bot.send_message(chat_id, "/help : you need some help?")

    # Rules command
    @bot.message_handler(commands=["rules"])
    def send_welcome(message):
        chat_id = message.chat.id
        bot.send_message(
            chat_id, "I forgot the rules, but soon they will be listed here."
        )

    ####################################
    # The bot is listening to channels #
    ####################################
    @bot.channel_post_handler(func=lambda message: True)
    def handle_messages_in_channel(message):
        customPrint(message)

    ####################################################
    # The bot is listening for files (direct or group) #
    ####################################################
    @bot.message_handler(content_types=["document", "audio"])
    def handle_docs_audio(message):
        author = message.from_user
        chat_type = message.chat.type
        # customPrint(message)
        # customPrint(f"{author.username} send a file to a {chat_type} chat")
        # Track the file sent
        # insertMessageIndb(message.text, author)
        customPrint(message)
        # update User in db
        updateUserIndb(author, message)

    ######################################################
    # The bot is listening to messages (direct or group) #
    ######################################################
    @bot.message_handler(func=lambda message: True)
    def handle_messages(message):
        chat_id = message.chat.id
        author = message.from_user
        chat_type = message.chat.type
        new_chat_members = message.new_chat_members
        if len(new_chat_members) > 0:
            for new_chat_member in new_chat_members:
                customPrint(f"new user added to group: {new_chat_member}")
                insertNewUserIndb(new_chat_member, None, True)
        if chat_type == "private":
            if message.text == "test" or message.text == "Test":
                bot.send_message(chat_id, "Your test was successfull! Get a cookie 🍪.")
            else:
                bot.reply_to(
                    message,
                    "<b>I don't now what it means</b>. I am just a robot 🤖!",
                    parse_mode="HTML",
                )
        customPrint("ChatMembers:")
        customPrint(bot.get_chat_member)
        # Track the message sent
        insertMessageIndb(author, message)
        # update User in db
        updateUserIndb(author, message)


except telebot.apihelper.ApiException as e:
    if e.result.status_code == 403 or e.result.status_code == 400:
        pass

bot.polling(none_stop=True)
