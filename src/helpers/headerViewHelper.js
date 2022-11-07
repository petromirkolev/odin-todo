import goalController from "../controllers/goalController.js";
import taskController from "../controllers/taskController.js";
import headerView from "../views/headerView.js";
import renderModal from "./modalHelper.js";
import menuIcon from "../images/menu.svg";
import searchIcon from "../images/search.svg";
import gitHubImage from "../images/GitHub.png";

const renderView = {
  headerView() {
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
      const getGoals = JSON.parse(localStorage.getItem("goals")); // null if no goals
      const getTasks = JSON.parse(localStorage.getItem("tasks")); // null if no tasks
      // Submit search by pressing the Enter key
      if (e.key === "Enter" && input.length > 0) {
        document.querySelector(".search-bar").value = "";

        if (getGoals === null && getTasks === null)
          return renderModal("🚫 No results found 🚫");

        if (getGoals !== null && getTasks === null) {
          const checkGoals = getGoals.find((goal) => goal.name === input);
          if (checkGoals !== undefined) {
            renderModal("🎉 Goal found! 🎉");
            setTimeout(() => {
              document.querySelector(".modal-close").click();
              goalController.viewGoal(checkGoals.id);
            }, 1500);
            return;
          } else {
            return renderModal("🚫 No results found 🚫");
          }
        }
        if (getGoals !== null && getTasks !== null) {
          const checkTasks = getTasks.find((task) => task.name === input);
          const checkGoals = getGoals.find((goal) => goal.name === input);
          if (checkGoals === undefined && checkTasks === undefined)
            return renderModal("🚫 No results found 🚫");
          if (checkGoals !== undefined) {
            renderModal("🎉 Goal found! 🎉");
            setTimeout(() => {
              document.querySelector(".modal-close").click();
              goalController.viewGoal(checkGoals.id);
            }, 1500);
            return;
          }
          if (checkTasks !== undefined) {
            renderModal("🎉 Task found! 🎉");
            setTimeout(() => {
              document.querySelector(".modal-close").click();
              taskController.viewTask(checkTasks.id);
            }, 1500);
            return;
          }
        }
      }
    });
  },
};

export { renderView };
