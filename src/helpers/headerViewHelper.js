import goalController from "../controllers/goalController.js";
import taskController from "../controllers/taskController.js";
import goalView from "../views/goalView.js";
import headerView from "../views/headerView.js";
import renderModal from "./modalHelper.js";

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
      const getGoals = JSON.parse(localStorage.getItem("goals"));
      const getTasks = JSON.parse(localStorage.getItem("tasks"));
      // Submit search by pressing the Enter key
      if (e.key === "Enter") {
        if (input.length > 0) {
          const checkGoals = getGoals.find((goal) => goal.name === input);
          const checkTasks = getTasks.find((task) => task.name === input);
          if (checkGoals === undefined && checkTasks === undefined) {
            renderModal("No results found");
          }
          if (checkGoals !== undefined) {
            goalController.viewGoal(checkGoals.id);
          }
          if (checkTasks !== undefined) {
            taskController.viewTask(checkTasks.id);
          }
        }
        // Reset the input field
        document.querySelector(".search-bar").value = "";
      }
    });
  },
};

export { renderView };
