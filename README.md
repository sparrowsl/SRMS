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
`git clone https://github.com/benjithorpe/spind.git`

#### go inside the folder
`cd spind/`

#### create a virtual environment
`python -m venv venv`

#### activate virtual environment
`source venv/bin/activate`

> On windows use `spind\Scripts\activate`

#### install the dependencies...
`pip install -r requirements.txt`

#### creating the database
`python manage.py makemigrations`

#### create the models/tables
`python manage.py migrate`

#### start the server
`python manage.py runserver`

---
Navigate to [localhost:8000](http://localhost:8000) and the project should be live


## Technologies Used/Stack
- Django
- UiKit
