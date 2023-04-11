

$(document).ready(function()
{
    $("#b1").click(function()
    {
        $("#kutu1").fadeIn();
        $("#kutu2").fadeIn("slow");
        $("#kutu3").fadeIn(3000);
    });

    $("#b2").click(function()
    {
        $("#kutu1").fadeOut();
        $("#kutu2").fadeOut("slow");
        $("#kutu3").fadeOut(3000);
    });

    $("#b3").click(function()
    {
        $("#kutu1").fadeToggle();
        $("#kutu2").fadeToggle("slow");
        $("#kutu3").fadeToggle(3000);
    });

    $("#b4").click(function()
    {
        $("#kutu1").fadeTo("fast", 0.9);
        $("#kutu2").fadeTo("slow", 0.6);
        $("#kutu3").fadeTo(3000, 0.3);
    });
});