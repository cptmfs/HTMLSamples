

setTimeout(a,3000);
function a()
{
    document.getElementById("kutu1").innerHTML="süre doldu.";
}

var x=setInterval(b,500);
function b()
{
    document.getElementById("kutu2").innerHTML+=".";
}

setTimeout(iptal,1000);
function iptal()
{
    clearInterval(x);
}

setInterval(zamanGoster,1000)
function zamanGoster()
{
    var saat=new Date();
    document.getElementById("kutu3").innerHTML = saat.toLocaleTimeString();
}