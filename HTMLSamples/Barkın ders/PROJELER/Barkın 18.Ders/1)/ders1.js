

function değiştir()
{
    var eleman = document.getElementsByClassName("yazı");
    var i;

    for (i=0; i<eleman.length; i++)
    {
        eleman[i].style.color= "red";
    }
}