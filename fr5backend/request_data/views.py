from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import Parent, Child, Assessment, AssessmentDetail, Organization, Guide, Admin, Login
from .serializers import ParentSerializer, ChildSerializer#, AssessmentSerializer, AssessmentDetailSerializer, OrganizationSerializer, GuideSerializer, AdminSerializer, LoginSerializer

# Create your views here.
class ChildListApiView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):

        children = Parent.objects.filter(parent = request.parent.id)
        serializer = ChildSerializer(children, many = True)
        return Response(serializer.data, status=status.HTTP_200_OK)