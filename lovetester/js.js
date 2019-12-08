function lovetester() {
  var input1 = document.getElementById("text1").value
  var input2 = document.getElementById("text2").value
  var random = Math.floor(Math.random() * 101)
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
document.getElementById("sixtynine").innerHTML = ""
} 
