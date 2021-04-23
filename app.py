from flask import Flask
from flask import request
from flask import render_template
from flask import redirect
from flask import url_for


app = Flask(__name__)

# accounts dictionary to store user's account
accounts = {}

@app.route('/')
@app.route('/index.html')
def index():
    return render_template("index.html")

@app.route('/signup')
@app.route('/signup.html')
def signup():
    return render_template("signup.html")


@app.route('/dashboard')
def dashboard():
    accounts["Email"] = "email"

    username = request.args.get("name", "Nobody")
    print(f"Hello World, {username}")
    return render_template("dashboard.html", \
                           username=username, \
                           accounts=accounts)


@app.route('/add-new')
@app.route('/add-account.html')
def add_new_account():
    account_name = request.args.get("name", "John Doe")
    account_password = request.args.get("password", 5435)

    # check if account is already present.
    if not accounts.get(account_name):
        accounts[account_name] = account_password
    return redirect(url_for("dashboard"))
    # render_template("add-account.html", \
    #                        name=account_name, \
    #                        password=account_password)


if __name__ == "__main__":
    app.run()
