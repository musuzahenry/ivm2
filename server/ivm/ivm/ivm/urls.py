"""
URL configuration for ivm project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    #path('subscription/', include(("subscription.urls", "subscription"), namespace="subscription")),
    path('core/', include(('core.urls', 'core'), namespace='core')),
    path('youtube/', include(('youtube.urls', 'youtube'), namespace = 'youtube')),
    path('mission/', include(("missionworks.urls", "missionworks"), namespace ="missionworks")),
    path('newsletters/', include(('newsletters.urls', 'newsletters'), namespace='newsletters')),
    path("devotion/", include(("devotion.urls", "devotion"), namespace = "devotion")),
]


urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT) 