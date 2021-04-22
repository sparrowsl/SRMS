from flask import Flask
from flask import request
from flask import render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/dash')
def dashboard():
    name = request.args.get("name", "Nobody")
    return render_template("dashboard.html", name=name)


if __name__ == "__main__":
    app.run()
