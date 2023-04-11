

$(document).ready(function()
{
    $("#h1").click(function()
    {
        $("#kutu1").fadeIn();
        $("#kutu2").hide();
        $("#kutu3").hide();
    });

    $("#h2").click(function()
    {
        $("#kutu1").hide();
        $("#kutu2").fadeIn();
        $("#kutu3").hide();
    });

    $("#h3").click(function()
    {
        $("#kutu1").hide();
        $("#kutu2").hide();
        $("#kutu3").fadeIn();
    })
})