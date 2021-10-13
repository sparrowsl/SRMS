from django.urls import path

from . import views


app_name = "accounts"
urlpatterns = [
    path("", views.index, name="index"),
    path("dashboard/", views.dashboard, name="dashboard"),
    path("accounts/edit_account/<int:account_id>",
         views.edit_account, name="edit_account"),
]
