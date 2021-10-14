from django.shortcuts import render, redirect, get_object_or_404

from .models import Account
from .forms import EditAccountForm, AddAccountForm


def index(request):
    return render(request, "accounts/index.html")


def dashboard(request):
    accounts = Account.objects.all()
    context = {"accounts": accounts}
    return render(request, "accounts/dashboard.html", context)


def edit_account(request, account_id):
    account = Account.objects.get(id=account_id)

    if request.method != "POST":
        # Open new form with account details
        form = EditAccountForm(instance=account)
    else:
        # Enter account data from the database
        form = EditAccountForm(instance=account, data=request.POST)

        if form.is_valid():
            form.save()  # Save the data to the database
            return redirect("accounts:dashboard")

    context = {"form": form, "account": account}
    return render(request, "accounts/edit_account.html", context)


def add_account(request):
    if request.method != "POST":
        form = AddAccountForm()
    else:
        form = AddAccountForm(data=request.POST)

        if form.is_valid():
            form.save()
            return redirect("accounts:dashboard")

    context = {"form": form}
    return render(request, "accounts/add_account.html", context)


def delete_account(request, account_id):
    # Get the account from the database and delete it
    Account.objects.get_object_or_404(id=account_id).delete()
    # Return back to dashboard
    return redirect("accounts:dashboard")
