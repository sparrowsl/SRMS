# Password Manager (Spind *(German for Locker)*)
---
<!-- link to live project -->


## Summary

A simple web app that stores all your accounts and their passwords in one place securely and safely.


## Features

- Stores password safely
- toggle password visibility
- Contains basic functionalities:
  - Create
  - Update
  - Edit
  - Delete


### Features to be added

- Hash passwords
- Encryption functionality
- Optionally generate passwords


## Run locally


#### clone/get the repo
* Run `git clone https://github.com/benjithorpe/spind.git`

#### go inside the folder
* Run `cd spind/`

#### create a virtual environment
Run `python -m venv venv`

> the second "venv" is the name of your virtual environment.

#### activate virtual environment
* Run `source venv/bin/activate`

> On windows use `spind\Scripts\activate`

#### install the dependencies...
* Run `pip install -r requirements.txt`

#### creating the database
* Run `python manage.py makemigrations`

#### create the models/tables
* Run `python manage.py migrate`

#### run the server
* Run `python manage.py runserver`

---
Navigate to [localhost:8000](http://localhost:8000) and the project should be live


## Technologies Used/Stack
- Django
- Heroku
- UiKit
