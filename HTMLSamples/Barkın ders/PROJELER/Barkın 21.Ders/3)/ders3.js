

$(document).ready(function()
{
    $("#b1").click(function()
    {
        $(".metin1").append("* ");
    });

    $("#b2").dblclick(function()
    {
        $(".metin2").append("* ");
    });

    $("#b3").mouseenter(function()
    {
        $(".metin3").append("* ");
    });

    $("#b4").mouseleave(function()
    {
        $(".metin4").append("* ");
    });

    $("#b5").mousedown(function()
    {
        $(".metin5").append("* ");
    });

    $("#b6").mouseup(function()
    {
        $(".metin6").append("* ");
    });

    $("#b7").hover(function()
    {
        $(".metin7").append("A ");
    },
    function()
    {
        $(".metin7").append("B ");
    });

    

    $("kutu1").blur(function()
    {
        $("#kutu1").css("background-color", "#cccccc");
    });

    $("kutu1").blur(function()
    {
        $("#kutu1").css("background-color", "#ffffff");
    });

    $(window).resize(function()
    {
        $(".metin8").append($ (window).width()+ " - ");
    });
    
});