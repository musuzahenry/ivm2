from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.views.decorators.csrf import ensure_csrf_cookie




@ensure_csrf_cookie
@api_view(["GET"])
def csrf(request):
    return JsonResponse({"detail":"CSRF Cookie set"})




@api_view(["POST"])
def login_view(request):

    username = request.data.get("username")
    password = request.data.get("password")

    user = authenticate(
        username = username,
        password = password,
    )

    if user:
        login(request, user)
        return JsonResponse({"detail":"Logged in"})
    
    return JsonResponse({"detail":"Invalid username pr password"}, status = 400)




@api_view(["POST"])
def logout_view(request):
    logout(request)
    return JsonResponse({"detail":"Logged out"})




@api_view(["GET"])
@permission_classes([IsAuthenticated])
def me(request):
    return JsonResponse({"username":request.user.username})