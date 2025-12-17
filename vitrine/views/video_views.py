from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from ..serializer import VideoSerializer

from ..models import Video

# Create your views here.
@api_view(['GET'])
def getVideos(request):
    videos = Video.objects.all()
    serializer = VideoSerializer(videos, many=True)
    return Response(serializer.data)



@api_view(['GET'])
def getVideo(request, pk):
    video = Video.objects.get(_id=pk)
    serializer = VideoSerializer(video, many=False)
            
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAdminUser])
def createVideo(request):

    user = request.user
    video = Video.objects.create(
        user=user,
        taille = 0,
        poids = 0,
        age = 0,
        nom = "Nom du joueur",
        nationalité = "Nationalité",
        poste = "Poste",
        match = 0,
        goals = 0,
        assists = 0,
        yellowCard = 0,
        redCard = 0,
        cleanSheets = 0,
        onPenalties = 0,
        penaltiesSaves = 0,
        number = 0,
    )
    
    serializer = VideoSerializer(video, many=False)
            
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateVideo(request, pk):
    data = request.data
    video = Video.objects.get(_id=pk)
    video.added = data['added']
    video.url = data['url']
    video.title= data['title']
    
    video.save()

    serializer = VideoSerializer(video, many=False)
            
    return Response(serializer.data)

@api_view(['DELETE'])
def deleteVideo(request, pk):
    video = Video.objects.get(_id=pk)
    video.delete()
            
    return Response('video Deleted')

@api_view(['POST'])
def uploadImage(request):
    data = request.data

    video_id = data['video_id']
    video = Video.objects.get(_id=video_id)

    video.image = request.FILES.get('image')
    video.save()
    
    return Response('Image was uploaded')