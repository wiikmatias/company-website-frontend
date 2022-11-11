/* Navigation menu-button */

const navButton = document.querySelector('.nav-button');
const navList = document.querySelector("#navList");

navButton.addEventListener('click', () => {
  if (navList.className === "hidden") {
    navList.className = "visible";
  } else {
    navList.className = "hidden";
  }
});