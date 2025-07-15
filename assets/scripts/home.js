let mainSection = document.getElementById("mainSection");
let rightSection = document.getElementById("rightSection");
let closeFriends = document.getElementById("closeFriends");

closeFriends.addEventListener("click", function () {
  console.log("il bottone funziona");
  mainSection.classList.remove("col-8");
  mainSection.classList.add("col-10");
  rightSection.classList.add("d-none");
});
