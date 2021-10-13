from django.shortcuts import render, redirect

from .models import Account
from .forms import EditAccountForm


def index(request):
    return render(request, "accounts/index.html")


def dashboard(request):
    accounts = Account.objects.all()
    context = {"accounts": accounts}
    return render(request, "accounts/dashboard.html", context)


def edit_account(request, account_id):
    account = Account.objects.get(id=account_id)

    if request.method != "POST":
        # Create new form
        form = EditAccountForm(instance=account)
    else:
        # Enter data from the database
        form = EditAccountForm(instance=account, data=request.POST)

        if form.is_valid():
            form.save()  # Save the data to the database
            return redirect("accounts:dashboard")

    context = {"form": form, "account": account}
    return render(request, "accounts/edit_account.html", context)
