

function yaz()
{
    var a = document.getElementById("kutua").value;
    document.getElementById("sonuca").innerHTML=a;
}

function arttır()
{
    var b = parseInt(document.getElementById("kutub").value);
    b++;
    document.getElementById("kutub").value=b;
}

function göster()
{
    document.getElementById("tablo").innerHTML="<table border='1' width='15%' cellpadding='10' cellspacing='0'><tr><td>Mehmet</td><td>Akif</td><td>Yılmaz</td></tr><tr><td>Mehmet</td><td>Akif</td><td>Yılmaz</td></tr><tr><td>Mehmet</td><td>Akif</td><td>Yılmaz</td></tr></table>";
}

function gizle()
{
    document.getElementById("tablo").innerHTML="";
} 