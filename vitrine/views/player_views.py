from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from ..serializer import PlayerSerializer

from ..models import Player

# Create your views here.
@api_view(['GET'])
def getPlayers(request):
    players = Player.objects.all()
    serializer = PlayerSerializer(players, many=True)
    return Response(serializer.data)



@api_view(['GET'])
def getPlayer(request, pk):
    player = Player.objects.get(_id=pk)
    serializer = PlayerSerializer(player, many=False)
            
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAdminUser])
def createPlayer(request):

    user = request.user
    player = Player.objects.create(
        user=user,
        taille = 0,
        poids = 0,
        age = 0,
        nom = "Nom du joueur",
        nationalité = "Nationalité",
        poste = "Poste",
        match = 0,
        matchs = 0,
        goals = 0,
        assists = 0,
        yellowCard = 0,
        redCard = 0,
        cleanSheets = 0,
        onPenalties = 0,
        penaltiesSaves = 0,
        number = 0,
    )
    
    serializer = PlayerSerializer(player, many=False)
            
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updatePlayer(request, pk):
    data = request.data
    player = Player.objects.get(_id=pk)

    player.taille= data['taille']
    player.poids = data['poids']
    player.age = data['age']
    player.nom = data['nom']
    player.nationalité = data['nationalité']
    player.poste = data['poste']
    player.matchs = data['matchs']
    player.goals = data['goals']
    player.assists = data['assists']
    player.yellowCard = data['yellowCard']
    player.redCard = data['redCard']
    player.onPenalties = data['onPenalties']
    player.number = data['number']
    
    player.save()


    serializer = PlayerSerializer(player, many=False)
            
    return Response(serializer.data)

@api_view(['DELETE'])

def deletePlayer(request, pk):
    player = Player.objects.get(_id=pk)
    player.delete()
            
    return Response('Player Deleted')

@api_view(['POST'])
def uploadImage(request):
    data = request.data

    player_id = data['player_id']
    player = Player.objects.get(_id=player_id)

    player.image = request.FILES.get('image')
    player.save()
    
    return Response('Image was uploaded')