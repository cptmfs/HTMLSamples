

$(document).ready(function()
{
    $("#b1").click(function()
    {
        $("#kutu1").show("slow", function()
        {
            $("#kutu2").show("slow");
        });
    });
    
    $("#b2").click(function()
    {
        $("#kutu2").hide("slow", function()
        {
            $("#kutu1").hide("slow");
        });
    });
});