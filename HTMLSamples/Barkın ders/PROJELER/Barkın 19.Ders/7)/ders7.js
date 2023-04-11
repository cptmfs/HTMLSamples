

function çevir()
{
    var not=parseInt(document.getElementById("kutu1").value);

    switch(not)
    {
        case 1:
            document.getElementById("sonuc").innerHTML="Zayıf Not Aldınız";
        break;

        case 2:
            document.getElementById("sonuc").innerHTML="Geçer Not Aldınız";
        break;

        case 3:
            document.getElementById("sonuc").innerHTML="Orta Not Aldınız";
        break;

        case 4:
            document.getElementById("sonuc").innerHTML="İyi Not Aldınız";
        break;

        case 5:
            document.getElementById("sonuc").innerHTML="Fenasın";
        break;

        default:
            document.getElementById("sonuc").innerHTML="Yanlış giriş";
        break;
    }


}