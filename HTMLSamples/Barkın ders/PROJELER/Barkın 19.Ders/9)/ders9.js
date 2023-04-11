

function yaz()
{
    var tutulansayı=Math.floor(Math.random()*10);
    var tahmin;
    var sayac=0;

    while(tahmin!=tutulansayı)
    {
        tamin= eval(prompt("Tahmininizi yazın",""));
        sayac++;

        document.getElementById("tahminler").innerHTML+=tahmin+" ";

        if(tahmin<tutulansayı) document.getElementById("ipucu").innerHTML= sayac + "Yukarı"
        if(tahmin>tutulansayı) document.getElementById("ipucu").innerHTML= sayac + "Aşağı"
    }

    document.getElementById("snc").innerHTML="Tebrikler "+ sayac + ". denemede buldunuz"
    document.getElementById("ipucu").innerHTML="";
}