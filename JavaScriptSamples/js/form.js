function tiklamaFunc() {
    var icerik1 = document.getElementById("txt1").value;
    var icerik2 = document.getElementById("txt2").value;

    document.getElementById("sonuc1").innerHTML = icerik1;
    document.getElementById("sonuc2").innerHTML = icerik2;

    document.getElementById("txt1").value = ""; //created by NergisK
}
function arttir() {
    //var icerikArttır = document.getElementById("txt3").value;
    var icerikArttır = document.getElementById("txt3").value;
    icerikArttır++;

    document.getElementById("sonucArttir").innerHTML = icerikArttır;
}
function azalt() {
    //var icerikAzalt = document.getElementById("txt3").value;
    var icerikAzalt = document.getElementById("txt3").value;
    icerikAzalt--;

    document.getElementById("sonucAzalt").innerHTML = icerikAzalt;


}
function tabloYap() {
     var table = document.createElement("table");
    var tableBody = document.createElement("tbody");

    for (var i = 0; i < 25; i++) {
        var satir = document.createElement("tr");

        for (var j = 0; j < 25; j++) {
            var hucre = document.createElement("td");
            var hucreText = document.createTextNode(`hücre${i}`);
            hucre.appendChild(hucreText);
            satir.appendChild(hucre);
        } 

        tableBody.appendChild(satir);
    }

    table.appendChild(tableBody);
    document.body.appendChild(table);
    table.setAttribute("border", "2");

 
}