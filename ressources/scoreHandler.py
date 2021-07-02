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
