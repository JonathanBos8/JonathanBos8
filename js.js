function alert() {
    var person = prompt('Vul je naam in');
    if (person != null) {
        document.getElementById("naam").innerHTML = "Hey " + person + ", welkom op mijn site"
        document.getElementById("welkom").innerHTML = person
    }
}
function lovetester() {
  var input1 = document.getElementById("text1").value
  var input2 = document.getElementById("text2").value
  var random = Math.floor(Math.random() * 100)
  if (input1 !== "" && input2 !== "") {
  document.getElementById("percentage").innerHTML = random + "%";
  document.getElementById("progress").value = random;
  document.getElementById("tester").setAttribute('onclick',"removeNames()")
  document.getElementById("tester").innerHTML = "Haal de namen weg"
  }
  if (random == "69") {
      document.getElementById("sixtynine").innerHTML = "Nice ¬‿¬"
  }
}
function removeNames() {
 document.getElementById("text1").value = ""
 document.getElementById("text2").value = ""
 document.getElementById("tester").setAttribute('onclick',"lovetester()")
 document.getElementById("tester").innerHTML = "Test de liefde!"
 document.getElementById("progress").value = null;
 document.getElementById("percentage").innerHTML = "0" + "%";

}
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function getTime() {
  var d = new Date();
  var x = document.getElementById("Time");
  var h = addZero(d.getHours());
  var m = addZero(d.getMinutes());
  var s = addZero(d.getSeconds());
  x.innerHTML = h + ":" + m + ":" + s;
}
