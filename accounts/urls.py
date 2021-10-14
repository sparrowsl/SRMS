from django.urls import path

from . import views


app_name = "accounts"
urlpatterns = [
    path("", views.index, name="index"),
    path("dashboard/", views.dashboard, name="dashboard"),
    path("accounts/edit_account/<int:account_id>",
         views.edit_account, name="edit_account"),
    path("accounts/add_account", views.add_account, name="add_account"),
    path("accounts/delete/<int:account_id>",
         views.delete_account, name="delete_account"),
]
