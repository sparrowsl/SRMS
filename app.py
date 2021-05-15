from flask import Flask, request, render_template, redirect, url_for, flash
import db
from user import User

app = Flask(__name__)

# accounts dictionary to store user's account
accounts = {}

@app.route('/')
@app.route('/index.html')
def index():
    return render_template("index.html", title='Home')


@app.route('/validate', methods=['POST', 'GET'])
def validate_login():
    email = request.args.get('email', None)
    password = request.args.get('password', None)

    if email and password:
        if db.validate_user(email, password):
            return render_template('dashboard.html')

    return redirect('/')


@app.route('/signup')
def signup():
    return render_template("signup.html", title="Sign Up")


@app.route('/dashboard')
def dashboard():
    accounts["Email"] = "email"

    username = request.args.get("email", "Nobody")
    print(f"Hello World, {username}")
    return render_template("dashboard.html", \
                           username=username, \
                           accounts=accounts)


@app.route('/adduser', methods=['POST', 'GET'])
def add_user():
    email = request.args.get("email", None)
    password = request.args.get("password", None)

    for em in db.get_emails():
        if em == email:
            return redirect('/signup')

    if email and password:
        user = User(email, password)
        db.insert_user(user)
        return render_template('dashboard.html')
    return redirect('/signup')




if __name__ == "__main__":
    app.run(debug=True)
