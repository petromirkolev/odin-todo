// import "../css/menu.css";
import goalController from "./goalController.js";
import taskController from "./taskController.js";
import updateMenuGoals from "../helpers/updateMenuGoals.js";
import { renderHomeGoalView } from "../renderers/goalRenderer.js";

// Show or hide menu
const showOrHideMenu = () => {
  document.querySelector(".menu-icon").addEventListener("click", (e) => {
    document.querySelector(".nav-container").classList.toggle("active");
  });
};
// Buttons event listener
const menuBtnListener = () => {
  document.querySelector(".nav-buttons").addEventListener("click", (e) => {
    const currentButton = e.target.classList[0];
    // Call add new goal view and add new goal function
    if (currentButton === "btn-new-goal") {
      goalController.renderAddGoalView();
      goalController.addNewGoal();
    }
    // Call add new task view and add task function
    if (currentButton === "btn-new-task") {
      taskController.renderAddTaskView();
      taskController.addNewTask();
    }
  });
};
// Goals event listener
const goalBtnListener = () => {
  document.querySelector(".nav-goals").addEventListener("click", (e) => {
    const [navClass, id] = [
      e.target.parentNode.classList[0],
      +e.target.parentNode.classList[1],
    ];
    if (navClass === "nav-item" && id !== undefined) renderHomeGoalView(id);
  });
};

export default function menuController() {
  updateMenuGoals();
  showOrHideMenu();
  menuBtnListener();
  goalBtnListener();
}
