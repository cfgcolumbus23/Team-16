# from django.conf.urls import url
from django.urls import path, include
from .views import (
    ChildListApiBaseView,
    ChildListApiView,
    ChildAssessmentDetailApiView,
    ChildListFromGuideApiView
)

urlpatterns = [
    path('api', ChildListApiBaseView.as_view()),
    path('api/parentToChildren/<int:parent_id>/', ChildListApiView.as_view()),
    path('api/childToAssessmentDetail/<int:child_id>/', ChildAssessmentDetailApiView.as_view()),
    path('api/guideToChildren/<int:guide_id>/', ChildListFromGuideApiView.as_view())
    path('api/childToGuide/<int:child_id>/', GuideInfoApiView.as_view())
]