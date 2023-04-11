

function büyük()
{
    var a=parseInt(document.getElementById("kutu1").value);
    var b=parseInt(document.getElementById("kutu2").value);

    if(a>b)
    {
        document.getElementById("sonuc").innerHTML=a + " büyüktür " + b;
    }

    else if(a<b)
    {
        document.getElementById("sonuc").innerHTML=a + " küçüktür " + b;
    }

    else 
    {
        document.getElementById("sonuc").innerHTML=a + " eşittir " + b;
    }
}