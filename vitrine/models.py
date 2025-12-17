from django.db import models
from django.contrib.auth.models import User


class Player(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    taille = models.DecimalField(max_digits=3, decimal_places=2, default=0)
    poids = models.DecimalField(max_digits=3, decimal_places=1, default=0)
    age = models.IntegerField(null=True, blank=True, default=0)
    nom = models.CharField(max_length=200, null=True, blank=True)
    nationalité = models.CharField(max_length=200, null=True, blank=True)
    poste = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    matchs = models.IntegerField(null=True, blank=True, default=0)
    goals = models.IntegerField(null=True, blank=True, default=0)
    assists = models.IntegerField(null=True, blank=True, default=0)
    yellowCard = models.IntegerField(null=True, blank=True, default=0)
    redCard = models.IntegerField(null=True, blank=True, default=0)
    onPenalties = models.IntegerField(null=True, blank=True, default=0)
    number = models.IntegerField(null=True, blank=True, default=0)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.nom


class Article(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    nom = models.CharField(max_length=200, null=True, blank=True)
    titre = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    date = models.DateField(auto_now_add=True, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.nom

    
class Gallery(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    nom = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    titre = models.CharField(max_length=200, null=True, blank=True)
    date = models.DateField(auto_now_add=True, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.nom

    
class Media(models.Model):
    pass


class Medias(models.Model):

    INTERVIEW = 'Interview'
    REACTIONS = 'Réactions'
    MATCHS = 'Matchs'

    CATEGORIES = (
        (INTERVIEW, 'Interview'),
        (REACTIONS, 'Réactions'),
        (MATCHS, 'Matchs'),

    )

    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    gallery = models.ForeignKey(Gallery, related_name='medias', on_delete=models.SET_NULL, null=True)
    titre = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    added = models.DateField(auto_now_add=True, null=True, blank=True)

    categorie = models.CharField(max_length=20, default=MATCHS, choices=CATEGORIES, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    

    category = models.CharField(max_length=20, default=MATCHS, choices=CATEGORIES, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)


class Videos(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    image = models.ImageField(null=True, blank=True)
    title = models.CharField(max_length=200, null=True, blank=True)
    nom = models.CharField(max_length=200, null=True, blank=True)
    added = models.DateField(auto_now_add=True, null=True, blank=True)
    url = models.FileField(upload_to='video/%y', blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.nom

    class Meta:
        ordering = ['added']


class Video(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    image = models.ImageField(null=True, blank=True)
    title = models.CharField(max_length=200, null=True, blank=True)
    nom = models.CharField(max_length=200, null=True, blank=True)
    added = models.DateField(auto_now_add=True, null=True, blank=True)
    url = models.FileField(upload_to='video/%y', blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):

        return self.title

        return self.nom

    class Meta:
        ordering = ['added']