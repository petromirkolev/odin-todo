import "../css/header.css";
import search from "../images/search.svg";
import menuIcon from "../images/menu.svg";
let isActive = false;

document.querySelector(".menu-icon").src = menuIcon;

document.querySelector(".search-icon").src = search;

document.querySelector(".search-icon").addEventListener("click", (e) => {
  if (isActive) {
    document.querySelector(".search-bar").style.height = "1px";
    isActive = false;
  } else {
    document.querySelector(".search-bar").style.height = "40px";
    isActive = true;
  }
});
