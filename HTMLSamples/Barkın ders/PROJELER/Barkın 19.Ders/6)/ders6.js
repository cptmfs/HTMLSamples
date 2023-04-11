

function bölme()
{
    var a=parseInt(document.getElementById("kutu1").value);
    var b=parseInt(document.getElementById("kutu2").value);

    if(a>b)
    {
        var sonuc=parseFloat(a/b);
        document.getElementById("sonuc").innerHTML="Sonuç : " + sonuc;
    }

    else if(a<b)
    {
        var sonuc=parseFloat(b/a);
        document.getElementById("sonuc").innerHTML="Sonuç : " + sonuc;
    }

    else 
    {
        document.getElementById("sonuc").innerHTML="Sonuç : 1";
    }
}
