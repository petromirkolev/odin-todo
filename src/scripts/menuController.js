import "../css/menu.css";
import { menuView } from "../views/menuView.js";
const menuContainer = document.querySelector(".nav-container");

const renderMenu = () => {
  // Render menu
  menuContainer.innerHTML = menuView;

  // Show or hide navigation menu
  document.querySelector(".menu-icon").addEventListener("click", (e) => {
    document.querySelector(".nav-container").classList.toggle("active");
  });
};

const menuBtnEvents = () => {
  // Local variables
  const navButtons = document.querySelector(".nav-buttons");
  // Menu buttons event listeners
  navButtons.addEventListener("click", (e) => {
    const currentButton = e.target.classList[0];

    switch (currentButton) {
      case "btn-new-goal":
        console.log("New Goal");

        // renderAddGoal();
        break;
      case "btn-new-task":
        console.log("New Task");

        // renderAddTask();

        break;
      default:
        break;
    }
  });
};

export { renderMenu, menuBtnEvents };
