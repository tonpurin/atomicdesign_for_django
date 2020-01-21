from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def index(request):
    """
    """
    maxcnt = int(request.GET.get('maxcnt'))
    vars = {'vars': range(maxcnt)}
    return render(request, 'index/index.html', vars)
