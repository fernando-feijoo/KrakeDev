let votosMinecraft = 0;
let votosRoblox = 0;

sumarLikeMinecraft = function () {
    let cmpVotos;
    cmpVotos = document.getElementById("lblMinecraft");
    votosMinecraft += 1;
    cmpVotos.innerText = votosMinecraft;
};
sumarCorazonMinecraft = function () {
    let cmpVotos;
    cmpVotos = document.getElementById("lblMinecraft");
    votosMinecraft += 5;
    cmpVotos.innerText = votosMinecraft;
};
restarLikeMinecraft = function () {
    let cmpVotos;
    cmpVotos = document.getElementById("lblMinecraft");
    votosMinecraft -= 1;
    cmpVotos.innerText = votosMinecraft;
};
sumarLikeRoblox = function () {
    let cmpVotos;
    cmpVotos = document.getElementById("lblRoblox");
    votosRoblox += 1;
    cmpVotos.innerText = votosRoblox;
};
sumarCorazonRoblox = function () {
    let cmpVotos;
    cmpVotos = document.getElementById("lblRoblox");
    votosRoblox += 5;
    cmpVotos.innerText = votosRoblox;
};
restarLikeRoblox = function () {
    let cmpVotos;
    cmpVotos = document.getElementById("lblRoblox");
    votosRoblox -= 1;
    cmpVotos.innerText = votosRoblox;
};
