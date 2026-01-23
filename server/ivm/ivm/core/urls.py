from django.urls import path
from . views import csrf, login_view, logout_view, me

urlpatterns = [
    path("csrf", csrf, name = "csrf"),
    path("login", login_view, name = "login"),
    path("logout", logout_view, name = "logout"),
    path("me/", me, name="me")
]