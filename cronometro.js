//alert("Carregando");
"use strict"

var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000;//Quantos milésimos valem 1seg
var cron;

function start() {
    if (cron == undefined) {
        cron = setInterval(() => { timer(); }, tempo);
    }
}

function pause() {
    clearInterval(cron);
    cron = undefined;
}

function reset() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;
    document.getElementById('counter').innerText = '00:00:00';
    cron = undefined;
}

function addpadding(number) {
    return number.toString().padStart(2, '0')
}

function timer() {
    ss = ss + 1;
    if (ss == 60) {
        mm = mm + 1;
        ss = 0;
    }
    if (mm == 60) {
        hh = hh + 1;
        mm = 0;
    }
    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    var format = hh.toString().padStart(2, '0') + ':' + mm.toString().padStart(2, '0') + ':' + addpadding(ss);
    document.getElementById('counter').innerText = format;

}