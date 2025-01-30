from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Service, PortfolioItem, TeamSection
from .serializers import ServiceSerializer, PortfolioItemSerializer, TeamSectionSerializer

class ServiceListView(generics.ListAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class PortfolioListView(generics.ListAPIView):
    queryset = PortfolioItem.objects.all()
    serializer_class = PortfolioItemSerializer

class TeamListView(generics.ListAPIView):
    queryset = TeamSection.objects.all()
    serializer_class = TeamSectionSerializer
