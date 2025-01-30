from rest_framework import serializers
from .models import Service, PortfolioItem, PortfolioImage, TeamSection

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = "__all__"

class PortfolioImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PortfolioImage
        fields = ["image"]

class PortfolioItemSerializer(serializers.ModelSerializer):
    images = PortfolioImageSerializer(many=True, read_only=True)

    class Meta:
        model = PortfolioItem
        fields = ["id", "title", "description", "images"]

class TeamSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamSection
        fields = "__all__"
