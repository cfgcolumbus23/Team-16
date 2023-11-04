from rest_framework import serializers
from .models import Parent, Child, Assessment, AssessmentDetail, Organization, Guide, Admin, Login

class ParentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Parent
        fields = "__all__"

class ChildSerializer(serializers.ModelSerializer):
    class Meta:
        model = Child
        fields = "__all__"

class AssessmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assessment
        fields = "__all__"

class AssessmentDetailSerializer(serializers.ModelSerializer):
    assessment = AssessmentSerializer()
    class Meta:
        model = AssessmentDetail
        fields = "__all__"