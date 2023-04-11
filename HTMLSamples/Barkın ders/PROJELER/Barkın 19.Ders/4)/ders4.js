

function çevir()
{
    var a=document.getElementById("kutu1").value;

    if(a<=20)
    {
        document.getElementById("sonuc").innerHTML="Sonuç: 1";
    }

    else if(a<=45)
    {
        document.getElementById("sonuc").innerHTML="Sonuç: 2";
    }   

    else if(a<=60)
    {
        document.getElementById("sonuc").innerHTML="Sonuç: 3";
    }

    else if(a<=80)
    {
        document.getElementById("sonuc").innerHTML="Sonuç: 4";
    }

    else
    {
        document.getElementById("sonuc").innerHTML="Sonuç: 5";
    }

}