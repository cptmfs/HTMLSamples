function carp() {
    var sayi1 = document.getElementById("txt4").value;
    var sayi2 = document.getElementById("txt5").value;
    var sonuc = sayi1 * sayi2;
    document.getElementById("txt6").value = sonuc;
}
function bol() {
    var sayi1 = document.getElementById("txt4").value;
    var sayi2 = document.getElementById("txt5").value;
    if (sayi1>=sayi2 && sayi1==0 &&sayi2==0) {
        var sonuc = sayi1 / sayi2;
        document.getElementById("txt7").value = sonuc;
    }
    else {
        document.getElementById("txt7").value = "Sayi1 degeri Sayi2'den küçük olamaz";
    }
   
}