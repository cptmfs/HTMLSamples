

"use strict";

var slayt=document.getElementsByClassName("slayt");
var slaytSayisi = slayt.length;
var slaytNo = 0;
var i = 0;

slaytgoster(slaytNo);

function sonrakislayt()
{
    slaytNo++;
    slaytgoster(slaytNo);
}

function oncekislayt()
{
    slaytNo--;
    slaytgoster(slaytNo);
}

function slaytgoster(slaytNumarası)
{
    slaytNo = slaytNumarası;

    if(slaytNumarası >= slaytSayisi) slaytNo = 0;

    if(slaytNumarası < 0) slaytNo = slaytSayisi - 1;

    for(i=0; i<slaytSayisi; i++)
    {
        slayt[i].style.display = "none";
    }

    slayt[slaytNo].style.display = "block";
}