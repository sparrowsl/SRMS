from flask import Flask
from flask import request
from flask import render_template

app = Flask(__name__)


@app.route('/')
def index():
    return "Hello World of Flask!!!"


@app.route('/dash')
def dashboard():
    accounts = {
        "Medium"  : "medium",
        "Facebook": "facebook",
        "Google"  : "google",
        "Twitter" : "twitter",
        "Reddit"  : "reddit",
        "Slack"   : "slack",
        "Discord" : "discord",
        "Telegram": "telegram"
    }

    username = request.args.get("name", "Nobody")
    print(f"Hello World, {username}")
    return render_template("dashboard.html", \
                           username=username, \
                           accounts=accounts)


@app.route('/add-new')
def add_new_account():
    account_name = request.args.get("name", "John Doe")
    account_password = request.args.get("password", 5435)
    return render_template("add-account.html", \
                           name=account_name, \
                           password=account_password)


if __name__ == "__main__":
    app.run()
