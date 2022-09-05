from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Contact
from django.core.mail import send_mail

from django.conf import settings
import requests

# ACTIVECAMPAIN
activecampaign_url = settings.ACTIVE_CAMPAIGN_URL
activecampaign_key = settings.ACTIVE_CAMPAIGN_KEY

class ContactCreateView(APIView):
    def post(self, request, format=None):
        data = self.request.data

        print(data)

        try:
            return Response({'success':'Mensaje enviado correctamente'})

        except:
            return Response({'error':'El mensaje no se ha podido enviar'})
