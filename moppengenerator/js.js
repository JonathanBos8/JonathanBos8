function nieuweMop(){
var jokes= ["Weet je waarom een politie agent altijd gelijk denkt te hebben? De aanhouder wint..", "Een kampeerwinkel die de tent moet sluiten is nooit grappig.", "Leven met obesitas is best wel zwaar."]
var randomNumber=Math.floor(Math.random()*(3));
    document.getElementById("Mop").innerHTML=jokes[randomNumber];
}
