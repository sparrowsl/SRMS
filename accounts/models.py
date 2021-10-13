from django.db import models


class Account(models.Model):
    name = models.CharField(max_length=150)
    password = models.CharField(max_length=350)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        """Returns the account name."""
        return self.name

    class Meta:
        verbose_name_plural = "Accounts"
