import "../css/header.css";
import "../css/menu.css";
import searchIcon from "../images/search.svg";
import menuIcon from "../images/menu.svg";
import gitHubImage from "../images/GitHub.png";
let isSearchActive = false;
let isMenuActive = false;

document.querySelector(".menu-icon").src = menuIcon;
document.querySelector(".search-icon").src = searchIcon;
document.querySelector(".gh-icon").src = gitHubImage;

document.querySelector(".search-icon").addEventListener("click", (e) => {
  if (!isSearchActive) {
    document.querySelector(".search-bar").style.height = "1px";
    isSearchActive = true;
  } else {
    document.querySelector(".search-bar").style.height = "40px";
    isSearchActive = false;
  }
});

document.querySelector(".menu-icon").addEventListener("click", (e) => {
  if (!isMenuActive) {
    document.querySelector(".nav-container").style.display = "flex";
    isMenuActive = true;
  } else {
    document.querySelector(".nav-container").style.display = "none";
    isMenuActive = false;
  }
});
