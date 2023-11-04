from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import Parent, Child, Assessment, AssessmentDetail, Organization, Guide, Admin, Login
from .serializers import ParentSerializer, ChildSerializer, AssessmentSerializer, AssessmentDetailSerializer, GuideSerializer, OrganizationSerializer
# , GuideSerializer, AdminSerializer, LoginSerializer

# Create your views here.

#This file is defined to map the data to the APIs based on the specific user/entity.
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

    def post(self, request, *args, **kwargs):
        # Deserialize the request data
        serializer = ChildSerializer(data=request.data)

        if serializer.is_valid():
            # Save the new child object
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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

    def post(self, request, *args, **kwargs):
        # Deserialize the request data
        serializer = AssessmentDetailSerializer(data=request.data)

        if serializer.is_valid():
            # Save the new child object
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GuideInfoApiView(APIView):

    def get(self, request, child_id, *args, **kwargs):

        try:
            child = Child.objects.get(id = child_id)
        except Child.DoesNotExist:
            return Response(
                {"res": "Object with child id does not exist"},
                status=status.HTTP_400_BAD_REQUEST
            )

        guide = child.guide

        serializer = GuideSerializer(guide)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        # Deserialize the request data
        serializer = GuideSerializer(data=request.data)

        if serializer.is_valid():
            # Save the new child object
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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

    def post(self, request, *args, **kwargs):
        # Deserialize the request data
        serializer = ChildSerializer(data=request.data)

        if serializer.is_valid():
            # Save the new child object
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ChildInfoFromChild(APIView):
    def get(self, request, child_id, *args, **kwargs):

        try:
            child = Child.objects.get(id = child_id)
        except Child.DoesNotExist:
            return Response(
                {"res": "Object with child id does not exist"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = ChildSerializer(child)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request, *args, **kwargs):
        # Deserialize the request data
        serializer = ChildSerializer(data=request.data)

        if serializer.is_valid():
            # Save the new child object
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class OrganizationInfoFromChild(APIView):
    def get(self, request, child_id, *args, **kwargs):

        try:
            child = Child.objects.get(id = child_id)
        except Child.DoesNotExist:
            return Response(
                {"res": "Object with child id does not exist"},
                status=status.HTTP_400_BAD_REQUEST
            )

        # child and organization have a many to many relationship
        organizations = child.organizations.all()

        serializer = OrganizationSerializer(organizations, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        # Deserialize the request data
        serializer = OrganizationSerializer(data=request.data)

        if serializer.is_valid():
            # Save the new child object
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class GuideInfoFromGuide(APIView):
    def get(self, request, guide_id, *args, **kwargs):

        try:
            guide = Guide.objects.get(id = guide_id)
        except Guide.DoesNotExist:
            return Response(
                {"res": "Object with guide id does not exist"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = GuideSerializer(guide)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        # Deserialize the request data
        serializer = GuideSerializer(data=request.data)

        if serializer.is_valid():
            # Save the new child object
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class OrganizationInfoFromOrganization(APIView):
    def get(self, request, org_id, *args, **kwargs):

        try:
            organization = Organization.objects.get(id = org_id)
        except Organization.DoesNotExist:
            return Response(
                {"res": "Object with organization id does not exist"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = OrganizationSerializer(organization)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        # Deserialize the request data
        serializer = OrganizationSerializer(data=request.data)

        if serializer.is_valid():
            # Save the new child object
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ChildrenInfoFromOrganization(APIView):
    def get(self, request, org_id, *args, **kwargs):

        try:
            organization = Organization.objects.get(id = org_id)
        except Organization.DoesNotExist:
            return Response(
                {"res": "Object with organization id does not exist"},
                status=status.HTTP_400_BAD_REQUEST
            )

        children = organization.child.all()

        serializer = ChildSerializer(children, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request, *args, **kwargs):
        # Deserialize the request data
        serializer = ChildSerializer(data=request.data)

        if serializer.is_valid():
            # Save the new child object
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
