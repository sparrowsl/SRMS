# Password Manager (Spind *(German for Locker)*)

A simple web based password manager for all your accounts.

## Features

- Stores password safely
- toggle password visibility
- Contains basic functionalities:
  - Create
  - Update
  - Edit
  - Delete


## Features to be added

- Hash passwords
- Encryption functionality
- Optionally generate passwords


## Get started

#### Cloning the project
```bash
git clone https://github.com/benjithorpe/spind.git

cd spind
```

#### Create a virtual environment
```python
python -m venv venv
```

#### Activate virtual environment
```bash
source venv/bin/activate
```

#### Install the dependencies...
```python
pip install -r requirements.txt
```

#### Creating the database and tables
```python
python manage.py makemigrations

# create the tables
python manage.py migrate
```

Navigate to [localhost:8000](http://localhost:8000)

## Technologies Used
- Python (Django Framework)
- Heroku (for Deployment)
- UiKit (for Styling)
