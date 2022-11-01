import "../css/header.css";
import { headerView } from "../views/headerView.js";
import searchIcon from "../images/search.svg";
import menuIcon from "../images/menu.svg";
import gitHubImage from "../images/GitHub.png";
const headerContainer = document.querySelector(".header-container");

// Render header
const renderHeader = () => {
  headerContainer.innerHTML = headerView;

  // Add header images
  document.querySelector(".menu-icon").src = menuIcon;
  document.querySelector(".search-icon").src = searchIcon;
  document.querySelector(".gh-icon").src = gitHubImage;

  // Show or hide search bar
  document.querySelector(".search-icon").addEventListener("click", (e) => {
    document.querySelector(".search-bar").classList.toggle("active");
  });
};

export { renderHeader };
