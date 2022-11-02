import "../css/header.css";
import { headerView } from "../views/headerView.js";
import searchIcon from "../images/search.svg";
import menuIcon from "../images/menu.svg";
import gitHubImage from "../images/GitHub.png";

// Render header
const renderHeaderView = () => {
  // Render view skeleton
  const headerContainer = document.querySelector(".header-container");
  headerContainer.innerHTML = headerView;
  // Add header images
  document.querySelector(".menu-icon").src = menuIcon;
  document.querySelector(".search-icon").src = searchIcon;
  document.querySelector(".gh-icon").src = gitHubImage;
  // document.querySelector(".menu-icon").src = "./images/menu.svg";
  // document.querySelector(".search-icon").src = "./images/search.svg";
  // document.querySelector(".gh-icon").src = "./images/GitHub.png";
};
// Render search bar
const renderSearchBar = () => {
  document.querySelector(".search-icon").addEventListener("click", (e) => {
    document.querySelector(".search-bar").classList.toggle("active");
  });
};
// Use the search bar to find a goal or a task
const useSearchBar = () => {
  document.addEventListener("keypress", (e) => {
    // Store search value
    const input = document.querySelector(".search-bar").value;
    // Submit search by pressing the Enter key
    if (e.key === "Enter") {
      // TO DO - Find search result
      console.log(input);
      // Reset the input field
      document.querySelector(".search-bar").value = "";
    }
  });

  // console.log(document.querySelector(".search-bar").classList);

  // TO DO
};

export default function headerController() {
  // Render the header view in browser
  renderHeaderView();
  // Show or hide search bar
  renderSearchBar();
  // Use the search bar to find results
  useSearchBar();
}
