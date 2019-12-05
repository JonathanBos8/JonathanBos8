function nieuweMop(){
var jokes= ["Weet je waarom een politie agent altijd gelijk denkt te hebben? De aanhouder wint..", "Een kampeerwinkel die de tent moet sluiten is nooit grappig.", "Leven met obesitas is best wel zwaar.", "Een alcoholist komt een bar binnen en neemt een borrel. Hij kijkt in zijn binnenzak en bestelt opnieuw een drankje. Hij kijkt weer in zijn binnenzak en bestelt opnieuw een drankje enzovoort. De barkeeper vraagt: “Wat zit er toch in je jaszak” De man zegt: “Dat is een foto van mijn vrouw. Zodra zij er goed uit begint te zien, dan weet ik dat het tijd is om naar huis te gaan.”"]
var randomNumber=Math.floor(Math.random()*(3));
    document.getElementById("Mop").innerHTML=jokes[randomNumber];
}
