



function başlangıç()
{
    setInterval(başla,1000);
}
var boyut1=0;
var boyut2=0;
var boyut3=0;

function başla()
{
    var hız1 = Math.floor(Math.random()*100);
    var hız2 = Math.floor(Math.random()*100);
    var hız3 = Math.floor(Math.random()*100);
    boyut1+=hız1;
    boyut2+=hız2;
    boyut3+=hız3;
    document.getElementById("at1").style.marginLeft=boyut1+ 'px'; 
    document.getElementById("at2").style.marginLeft=boyut2+ 'px';
    document.getElementById("at3").style.marginLeft=boyut3+ 'px';

    var x=document.getElementById("at1").style.marginLeft;
    document.getElementById("son").innerHTML=x;

}
		
			

