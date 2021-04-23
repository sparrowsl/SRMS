from account import Account
from user_db import UserDB

class User(object):

    def __init__(self, username, accounts={}):
        self.username = username
        self.accounts = accounts

    def add_account(self, account_name, account_password):
        self.accounts[account_name] = account_password

    def update_account(self, account_name, account_password):
        self.accounts[account_name] = account_password

    def delete_account(self, account_name):
        if self.accounts.get(account_name) == None:
            print("Account Does Not Exists!")
        else:
            del self.accounts[account_name]
            # return True

    def get_accounts(self):
        """Returns all the accounts or None if no account is found."""
        if self.accounts:
            return self.accounts
        else:
            return None


john = User("John", {"Facebook": "facebook", "Twitter": "twitter",})
jack = User("Jack")
mary = User("Mary", {"Twillio": "twillie", "Facebook": "fb"})
abu = User("Abu", {"Github": "github",})

print(f"Name: {john.username}\nAccounts: {john.get_accounts()}\n")
print(f"Name: {jack.username}\nAccounts: {jack.get_accounts()}\n")
print(f"Name: {mary.username}\nAccounts: {mary.get_accounts()}\n")
print(f"Name: {abu.username}\nAccounts: {abu.get_accounts()}\n")


jack.add_account("LinkedIn", "linked")
print(f"Name: {jack.username}\nAccounts: {jack.get_accounts()}\n")

mary.delete_account("Facebook")
print(f"Name: {mary.username}\nAccounts: {mary.get_accounts()}\n")























