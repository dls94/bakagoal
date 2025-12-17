from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from ..serializer import ArticleSerializer


from ..models import Article


@api_view(['GET'])
def getArticles(request):
    articles = Article.objects.all()
    serializer = ArticleSerializer(articles, many=True)
    
    return Response(serializer.data)


@api_view(['GET'])
def getArticle(request, pk):
    article = Article.objects.get(_id=pk)
    serializer = ArticleSerializer(article, many=False)      

    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAdminUser])
def createArticle(request):

    user = request.user
    article = Article.objects.create(
        user=user,
        nom='Sample Name',
        titre='',
        description=''

    )
    
    serializer = ArticleSerializer(article, many=False)
            
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateArticle(request, pk):
    data = request.data
    article = Article.objects.get(_id=pk)

    article.nom = data['nom']
    article.titre = data['titre']
    article.description = data['description']
    article.save()


    serializer = ArticleSerializer(article, many=False)
            
    return Response(serializer.data)

@api_view(['DELETE'])
def deleteArticle(request, pk):
    article = Article.objects.get(_id=pk)
    article.delete()
            
    return Response('Product Deleted')

@api_view(['POST'])
def uploadImage(request):
    data = request.data

    article_id = data['article_id']
    article = Article.objects.get(_id=article_id)

    article.image = request.FILES.get('image')
    article.save()
    
    return Response('Image was uploaded')