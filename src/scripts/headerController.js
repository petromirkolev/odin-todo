import "../css/header.css";
import "../css/menu.css";
import searchIcon from "../images/search.svg";
import menuIcon from "../images/menu.svg";
import gitHubImage from "../images/GitHub.png";
let isSearchActive = false;

document.querySelector(".menu-icon").src = menuIcon;
document.querySelector(".search-icon").src = searchIcon;
document.querySelector(".gh-icon").src = gitHubImage;

// Show or hide search bar
document.querySelector(".search-icon").addEventListener("click", (e) => {
  if (!isSearchActive) {
    document.querySelector(".search-bar").style.height = "1px";
    isSearchActive = true;
  } else {
    document.querySelector(".search-bar").style.height = "40px";
    isSearchActive = false;
  }
});

// Show or hide navigation menu
document.querySelector(".menu-icon").addEventListener("click", (e) => {
  document.querySelector(".nav-container").classList.toggle("active");
});
