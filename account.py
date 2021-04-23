from user_db import UserDB


class Account(object):

    def __init__(self, account_name, account_password):
        self.account_name = account_name
        self.account_password = account_password
        # self.account = UserDB(account_name, account_password)

    def add_account(self):
        UserDB.add_account(self, account)
        # file = open("db.txt", "a")
        # file.write(f"{self.account_name} := {self.account_password}\n")
        # file.close()
        # print(f"{self.account_name} {self.account_password}")

    def get_name(self):
        return self.account_name

    def get_password(self):
        return self.account_password

    def get_accounts(self):
        """Return accounts in a dictionary format"""
        accounts = {}
        file = open("db.txt", "r")

        for line in file.readlines():
            name = line.split("=")[0].strip()
            password = line.split("=")[1].strip()

            accounts[name] = password

        file.close()
        return accounts


account = Account("Medium", "medium")
account.add_account()
for key, value in account.get_accounts().items():
    print(f"{key} -> {value}")
