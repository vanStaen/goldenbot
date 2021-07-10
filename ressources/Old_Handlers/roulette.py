import requests

# Think about 'pip3 install request', and put it into requirements.txt


def get_random_kinkograph():
    contents = requests.get("http://kinkograph.com/random").json()
    url = contents["url"]
    print(url)
    return url


# RandomPic command
# @bot.message_handler(commands=["roulette"])
# def send_welcome(message):
#    chat_id = message.chat.id
#    url = get_random_kinkograph()
#    bot.send_photo(chat_id=chat_id, photo=url)
