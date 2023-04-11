

function hesapla()
{
    var x=parseInt(document.getElementById("degera").value);
    var y=parseInt(document.getElementById("degerb").value);
    var sonuc=(x*x)+2*(x*y)+(y*y);
    document.getElementById("sonuc").innerHTML="sonuç: "+sonuc;
}