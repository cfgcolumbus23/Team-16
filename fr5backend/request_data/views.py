from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import Parent, Child, Assessment, AssessmentDetail, Organization, Guide, Admin, Login
from .serializers import ParentSerializer, ChildSerializer#, AssessmentSerializer, AssessmentDetailSerializer, OrganizationSerializer, GuideSerializer, AdminSerializer, LoginSerializer

# Create your views here.
class ChildListApiBaseView(APIView):
    # permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):

        children = Parent.objects.filter(id = request.user.id)
        serializer = ChildSerializer(children, many = True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        data = {
            ''
        }


class ChildListApiView(APIView):

    def get(self, request, parent_id, *args, **kwargs):
        '''
        Retrieves the children basic info with given parent_id
        '''
        children = Child.objects.filter(parent = parent_id)
        if not children:
            return Response(
                {"res": "Object with parent id does not exists"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = ChildSerializer(children, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
