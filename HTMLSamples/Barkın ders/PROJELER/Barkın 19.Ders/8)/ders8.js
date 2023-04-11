

function ekle()
{
    var menu=document.getElementById("tarih");
    
    for(var i=1900;i<=2023;i++)
        menu.options[menu.options.length] = new Option(i, i);
}