# GOLDENBOT

Displayname: goldenbot <br/>
Username: GoldenCircleBerlin_Bot <br/>
https://telegram.me/GoldenCircleBerlin_Bot <br/>

## Libaries

to install at one all packege listed in the requirements.txt file, run the following: `sudo pip3 install -r requirements.txt`

### pytelegramBotAPI
Install lib: `pip3 install pyTelegramBotAPI`
doc: https://github.com/eternnoir/pyTelegramBotAPI

### postgresQL client
To install to postgreSQL driver "psycopg2" run: `pip3 install psycopg2-binary`

### Telegram API
Documentation of the Telegram API :  https://core.telegram.org/bots/api#message
Please be aware that some difference exist when using python. 

## Deployement

As usual, Heroku deploy via `git push heroku master`.

### Procfile
The ProcFile include `worker: python3 main.py`, thus the script will run on heroku's side. 

Why `worker` isntead of `Web`: because our script doesn't specify a specific PORT, thus with web, the following error pops up (and the script crash after 60 sec:

```
Error R10 (Boot timeout) -> Web process failed to bind to $PORT within 60 seconds of launch
```

### Logs on heroku
To see heroku's logs: `heroku logs`


## Tutos 
https://www.freecodecamp.org/news/learn-to-build-your-first-bot-in-telegram-with-python-4c99526765e4/

https://www.codementor.io/@karandeepbatra/part-1-how-to-create-a-telegram-bot-in-python-in-under-10-minutes-19yfdv4wrq
