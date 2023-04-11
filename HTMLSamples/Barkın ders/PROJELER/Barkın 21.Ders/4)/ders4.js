

$(document).ready(function()
{
    $("#b1").click(function()
    {
        $("#kutu1").hide();
    })

    $("#b2").click(function()
    {
        $("#kutu2").hide(1000);
    })

    $("#b3").click(function()
    {
        $("#kutu3").hide("slow");
    })

    $("#b4").click(function()
    {
        $("#kutu4").show();
    })

    $("#b5").click(function()
    {
        $("#kutu5").show(1000);
    })

    $("#b6").click(function()
    {
        $("#kutu6").show("fast");
    })

    $("#b7").click(function()
    {
        $("#kutu7").toggle();
    })

    $("#b8").click(function()
    {
        $("#kutu8").toggle(1000);
    })
    
});