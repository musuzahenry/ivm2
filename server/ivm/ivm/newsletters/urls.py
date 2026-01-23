from django.urls import path
from . views import NewsLettersList, get_last_letter



urlpatterns = [
    path("newsletters", NewsLettersList.as_view(), name="newsletters"),
    path("last-letter", get_last_letter, name="last-letter"),
]

