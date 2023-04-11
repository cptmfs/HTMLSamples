

function pencere()
{
    window.open("ders1-2.html", "mesaj", "toolbar=no, location=no, directories=no, status=no, copyhistory=no, width=280, height=400, left=200, screenX=200, top=300,screenY=300");
}

function kapat()
{
    var karar=confirm("Pencereyi kapatmak istiyor musunuz?");

    if(karar==true)
    {
        window.close();
    }
}