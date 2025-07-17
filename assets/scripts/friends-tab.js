let mainSection = document.getElementById("mainSection");
let rightSection = document.getElementById("rightSection");
let closeFriends = document.getElementById("closeFriends");
let openFriends = document.getElementById("openFriends");

closeFriends.addEventListener("click", function () {
  console.log("Close friends activity");
  mainSection.classList.remove("col-xl-8");
  mainSection.classList.add("col-xl-10");
  rightSection.classList.add("d-xl-none");
  openFriends.classList.remove("d-none");
});

openFriends.addEventListener("click", function () {
  console.log("Open friends activity");
  mainSection.classList.remove("col-xl-10");
  mainSection.classList.add("col-xl-8");
  rightSection.classList.remove("d-xl-none");
  openFriends.classList.add("d-none");
});
