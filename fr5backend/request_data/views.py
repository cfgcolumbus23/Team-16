from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import Parent, Child, Assessment, AssessmentDetail, Organization, Guide, Admin, Login
from .serializers import ParentSerializer, ChildSerializer, AssessmentSerializer, AssessmentDetailSerializer#, OrganizationSerializer, GuideSerializer, AdminSerializer, LoginSerializer

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
                {"res": "Object with parent id does not exist"},
                {"res": "Object with parent id does not exist"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = ChildSerializer(children, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ChildAssessmentDetailApiView(APIView):

    def get(self, request, child_id, *args, **kwargs):
        '''
        Retrieves the assessment detail info with given child_id
        '''
        assessmentdetails = AssessmentDetail.objects.filter(child = child_id)
        if not assessmentdetails:
            return Response(
                {"res": "Object with child id does not exist"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = AssessmentDetailSerializer(assessmentdetails, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class GuideInfoApiView(APIView):

    def get(self, request, child_id, *args, **kwargs):

        child = Child.objects.get(id = child_id)
        guide = child.guide
        if not guide:
            return Response(
                {"res": "Object with child id does not exist"},
                status= status.HTTP_400_BAD_REQUEST
            )

        serializer = GuideSerializer(guide)
        return Response(serializer.data, status=status.HTTP_200_OK)

class ChildListFromGuideApiView(APIView):
    def get(self, request, guide_id, *args, **kwargs):
        '''
        Retrieves the children basic info with given guide_id
        '''
        children = Child.objects.filter(guide = guide_id)
        if not children:
            return Response(
                {"res": "Object with guide id does not exist"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = ChildSerializer(children, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
        
