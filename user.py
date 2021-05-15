class User(object):

    def __init__(self, email, password, accounts={}):
        self.email = email
        self.password = password
        self.accounts = accounts

    def update_password(self, new_password):
        self.password = new_password

    def add_new_account(self, account_name, account_password):
        self.accounts[account_name] = account_password

    def update_account(self, account_name, account_password):
        self.accounts[account_name] = account_password

    def delete_account(self, account_name):
        if self.accounts.get(account_name):
            del self.accounts[account_name]
        else:
            print("Account Does Not Exists!")

    def get_accounts(self):
        """Returns all the accounts or None if no account is found."""
        if self.accounts:
            return self.accounts
        else:
            return None
