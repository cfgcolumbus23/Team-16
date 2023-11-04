# from django.conf.urls import url

#This file contains the urls paths for the APIs.
from django.urls import path, include
from .views import (
    ChildListApiBaseView,
    ChildListApiView,
    ChildAssessmentDetailApiView,
    ChildListFromGuideApiView,
    GuideInfoApiView,
    ChildInfoFromChild
)

urlpatterns = [
    path('api', ChildListApiBaseView.as_view()),
    path('api/parentToChildren/<int:parent_id>/', ChildListApiView.as_view()),
    path('api/childToAssessmentDetail/<int:child_id>/', ChildAssessmentDetailApiView.as_view()),
    path('api/guideToChildren/<int:guide_id>/', ChildListFromGuideApiView.as_view()),
    path('api/childToGuide/<int:child_id>/', GuideInfoApiView.as_view()),
    path('api/child/<int:child_id>/', ChildInfoFromChild.as_view())
]