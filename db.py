import sqlite3


def connect():
    with sqlite3.connect("manager.db") as conn:
        cursor = conn.cursor()
        cursor.execute("""CREATE TABLE IF NOT EXISTS users(
                            id INTEGER PRIMARY KEY,
                            email TEXT NOT NULL UNIQUE,
                            password TEXT NOT NULL
                       )""")
        # cursor.execute("""CREATE TABLE IF NOT EXISTS accounts(
        #                     user_id FOREIGN KEY,
        #                     account_name TEXT NOT NULL,
        #                     account_password TEXT NOT NULL
        #                )""")


def get_emails():
    with sqlite3.connect("manager.db") as conn:
        cursor = conn.cursor()
        cursor.execute("""SELECT email FROM users""")

        emails = []
        for row in cursor.fetchall():
            email, *args = row
            emails.append(email)
        return emails



def insert_user(user):
    with sqlite3.connect("manager.db") as conn:
        cursor = conn.cursor()
        cursor.execute("""INSERT INTO users (email, password) VALUES (?,?)""",
                       (user.email, user.password))


def view():
    with sqlite3.connect("manager.db") as conn:
        cursor = conn.cursor()
        cursor.execute("""SELECT id, email, password
                          FROM users
                          LIMIT 5
                       """)
        rows = cursor.fetchall()
        return rows


def validate_user(email, password):
    with sqlite3.connect("manager.db") as conn:
        cursor = conn.cursor()
        cursor.execute("""SELECT email, password
                        FROM users
                        WHERE email = ? AND password = ?
                        LIMIT 1""", (email, password))

        return cursor.fetchone()


def update():
    with sqlite3.connect("manager.db") as conn:
        cursor = conn.cursor()
        cursor.execute("""UPDATE (condition)""")


def delete():
    with sqlite3.connect("manager.db") as conn:
        cursor = conn.cursor()
        cursor.execute("""DELETE FROM users
                          WHERE (condition)
                       """)

# users = {}

# for row in view():
#     id, email, password = row
#     users[id] = {'email': email, 'password': password}

# for id, user in users.items():
#     print(id, user.get('password'))
