from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from ..models import Gallery
from ..serializer import GallerySerializer


@api_view(['GET'])
def getGallerys(request):
    gallerys = Gallery.objects.all()
    serializer = GallerySerializer(gallerys, many=True)
    
    return Response(serializer.data)


@api_view(['GET'])
def getGallery(request, pk):
    gallery = Gallery.objects.get(_id=pk)
    media = gallery.medias.all()
    serializer = GallerySerializer(media, many=True)      

    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAdminUser])
def createGallery(request):

    user = request.user
    gallery = Gallery.objects.create(
        user=user,
        nom='Sample Name',
        titre='',

    )
    
    serializer = GallerySerializer(gallery, many=False)
            
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateGallery(request, pk):
    data = request.data
    gallery = Gallery.objects.get(_id=pk)

    gallery.nom = data['nom']
    gallery.image = data['titre']
    
    gallery.save()


    serializer = GallerySerializer(gallery, many=False)
            
    return Response(serializer.data)

@api_view(['DELETE'])
def deleteGallery(request, pk):
    gallery = Gallery.objects.get(_id=pk)
    gallery.delete()
            
    return Response('Product Deleted')

@api_view(['POST'])
def uploadImage(request):
    data = request.data

    gallery_id = data['article_id']
    gallery = Gallery.objects.get(_id=gallery_id)

    gallery.image = request.FILES.get('image')
    gallery.save()
    
    return Response('Image was uploaded')