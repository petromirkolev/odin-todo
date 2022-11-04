import headerView from "../views/headerView.js";

const renderView = {
  header() {
    // Render view skeleton
    const headerContainer = document.querySelector(".header-container");
    headerContainer.innerHTML = headerView;
    // Add header images
    // document.querySelector(".menu-icon").src = menuIcon;
    // document.querySelector(".search-icon").src = searchIcon;
    // document.querySelector(".gh-icon").src = gitHubImage;
    document.querySelector(".menu-icon").src = "./images/menu.svg";
    document.querySelector(".search-icon").src = "./images/search.svg";
    document.querySelector(".gh-icon").src = "./images/GitHub.png";
    // Make search bar operational
    document.querySelector(".search-icon").addEventListener("click", (e) => {
      document.querySelector(".search-bar").classList.toggle("active");
    });
    // Make menu operational
    document.querySelector(".menu-icon").addEventListener("click", (e) => {
      document.querySelector(".nav-container").classList.toggle("active");
    });
  },
  useSearchBar() {
    document.querySelector(".search-bar").addEventListener("keypress", (e) => {
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
  },
};

export { renderView };
