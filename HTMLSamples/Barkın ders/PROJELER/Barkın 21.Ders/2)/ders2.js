

$(document).ready(function()
{
    $("#b1").click(function()
    {
        $("p").hide();
    })

    $("#b2").click(function()
    {
        $(".yazi").hide();
    })

    $("#b3").click(function()
    {
        $("#yazi").hide();
    })

    $("#b4").click(function()
    {
        $(this).hide();
    })

    $("#b5").click(function()
    {
        $("*").hide();
    })

    $("#b6").click(function()
    {
        $("p:first").hide();
    })

    $("#b7").click(function()
    {
        $("ul li:first").hide();
    })

    $("#b8").click(function()
    {
        $("ul.listem li:first").hide();
    })

    $("#b9").click(function()
    {
        $("ul li:first-child").hide();
    })

    $("#b10").click(function()
    {
        $("li:even").hide();
    })

    $("#b11").click(function()
    {
        $("li:odd").hide();
    })
    
});