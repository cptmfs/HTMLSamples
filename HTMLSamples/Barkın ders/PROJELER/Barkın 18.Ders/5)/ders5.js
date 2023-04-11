

function gengöster()
{
    var genişlik = document.getElementById("tablo").getAttribute("width");
    document.getElementById("kutu1").value = genişlik;
}

function genayarla()
{
    var genişlik=document.getElementById("kutu1").value;
    document.getElementById("tablo").setAttribute("width",genişlik);
}

function renkgöster()
{
    var renk=document.getElementById("tablo").getAttribute("bgcolor");
    document.getElementById("kutu2").value=renk;
}

function renkayarla()
{
    var renk=document.getElementById("secim").getAttribute("bgcolor");
    document.getElementById("tablo").setAttribute("bgcolor",renk);
}

function renkayarla()
{
    var renk=document.getElementById("secim").value;
    document.getElementById("tablo").setAttribute("bgcolor",renk);
}

function istekrenk()
{
    var renk=document.getElementById("kutu2").value;
    document.getElementById("tablo").setAttribute("bgcolor",renk);
}

function genazalt()
{
    var genişlik=parseInt(document.getElementById("tablo").getAttribute("width"));
    genişlik-=25;
    document.getElementById("tablo").setAttribute("width",genişlik);
}

function genarttır()
{
    var genişlik=parseInt(document.getElementById("tablo").getAttribute("width"));
    genişlik+=25;
    document.getElementById("tablo").setAttribute("width",genişlik);
}
