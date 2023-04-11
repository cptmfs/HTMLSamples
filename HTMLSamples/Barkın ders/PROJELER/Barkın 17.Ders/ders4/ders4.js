

function toplama()
{
    var a=parseInt(document.getElementById("sayıa").value);
    var b=parseInt(document.getElementById("sayıb").value);
    var c=a+b;
    document.getElementById("sonuc").innerHTML=c;
}

function çarpma()
{
    var a=parseInt(document.getElementById("sayıa").value);
    var b=parseInt(document.getElementById("sayıb").value);
    var c=a*b;
    document.getElementById("sonuc").innerHTML=c;
}

function çıkarma()
{
    var a=parseInt(document.getElementById("sayıa").value);
    var b=parseInt(document.getElementById("sayıb").value);
    var c=a-b;
    document.getElementById("sonuc").innerHTML=c;
}

function bölme()
{
    var a=parseInt(document.getElementById("sayıa").value);
    var b=parseInt(document.getElementById("sayıb").value);
    var c=a/b;
    document.getElementById("sonuc").innerHTML=c;
}
