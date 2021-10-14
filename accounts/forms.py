from django import forms

from .models import Account


class EditAccountForm(forms.ModelForm):
    class Meta:
        model = Account
        fields = ["name", "password"]
        labels = {"name": "Account Name", "password": "Account Password"}
        widgets = {"name": forms.TextInput(attrs={
                                           "class": "uk-input",
                                           "placeholder": "Account Name",
                                           }),
            "password": forms.PasswordInput(attrs={
                                            "class": "uk-input",
                                            "placeholder": "Account Password",
                                            "id": "passField",
                                            }, render_value=True),
        }


class AddAccountForm(forms.ModelForm):
    class Meta:
        model = Account
        fields = ["name", "password"]
        labels = {"name": "Account Name", "password": "Account Password"}
        widgets = {"name": forms.TextInput(attrs={
                                           "class": "uk-input",
                                           "placeholder": "Account Name",
                                           }),
            "password": forms.PasswordInput(attrs={
                                            "class": "uk-input",
                                            "placeholder": "Account Password",
                                            "id": "passField",
                                            }),
        }
