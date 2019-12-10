var jokes= ["Weet je waarom een politie agent altijd gelijk denkt te hebben? De aanhouder wint..",
 "Een kampeerwinkel die de tent moet sluiten is nooit grappig.",
  "Leven met obesitas is best wel zwaar.",
   "Een alcoholist komt een bar binnen en neemt een borrel. Hij kijkt in zijn binnenzak en bestelt opnieuw een drankje. Hij kijkt weer in zijn binnenzak en bestelt opnieuw een drankje enzovoort. De barkeeper vraagt: “Wat zit er toch in je jaszak” De man zegt: “Dat is een foto van mijn vrouw. Zodra zij er goed uit begint te zien, dan weet ik dat het tijd is om naar huis te gaan.”",
   "Een nul komt een acht tegen. De nul zegt tegen de acht: “Zit je riem te strak?”",
  	"Twee kaarsen zijn met elkaar aan het praten. Opeens moet de ene kaars hoesten. Zegt de andere: “Houd je hand eens voor je mond, straks steek je me nog aan!”",
    "Een kat vraagt aan een muis: “Wat wil jij later worden?” Zegt de muis: “Een antwoordapparaat. Dan kun je bij mij een boodschap inspreken na de PIEP!”",
    "Jantje loopt langs het gemeentehuis. Hij spuugt op het raam . De burgemeester komt boos naar buiten en vraagt aan Jantje: “Hoe zou je moeder het vinden als ik dat bij jou thuis zou doen?” Jantje zegt: “Nou, dat zou ze heel knap vinden, want wij wonen op de 10e verdieping.”",
    "Vrouw: De dokters hebben mijn hoofd met een speciale scanner onderzocht, maar niets gevonden. Man: Dat had ik al lang verwacht...",
    "Jan heeft bezoek en ze amuseren zich erg. Op een bepaald moment vraagt z'n vriend: Hoe laat is het? Geen idee, zegt Jan, maar ik zal dat direct te weten komen. Hij neemt z'n trompet en blaast er enkele seconden goed op. Vriend: waarom doe je dat? Jan: Ssst. Dan klopt z'n buur op de muur en roept: Ben je gek geworden? Om half vier 's nachts!!.",]
function nieuweMop(){
var randomNumber=Math.floor(Math.random()*(10));
    document.getElementById("Mop").innerHTML=jokes[randomNumber];
}
