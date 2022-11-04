import { renderView as task } from "./taskViewHelper.js";
import { renderView as goal } from "./goalViewHelper.js";
import homeController from "../controllers/homeController.js";
import updateHelper from "../helpers/updateHelper.js";
import homeView from "../views/homeView.js";

const renderView = {
  home() {
    const appContainer = document.querySelector(".app-container");
    appContainer.innerHTML = "";
    appContainer.innerHTML = homeView;
  },
  latestGoals() {
    let latestGoals = JSON.parse(localStorage.getItem("goals"));
    updateHelper(latestGoals, "latest-goals", goal.view);
  },
  latestTasks() {
    let latestTasks = JSON.parse(localStorage.getItem("tasks"));
    updateHelper(latestTasks, "latest-tasks", task.view);
  },
  priorityTasks() {
    let tempTasks;
    if (JSON.parse(localStorage.getItem("tasks")) !== null) {
      [...tempTasks] = [...JSON.parse(localStorage.getItem("tasks"))];
      tempTasks.sort((a, b) => +a.priority - +b.priority);
    } else {
      tempTasks = null;
    }
    updateHelper(tempTasks, "priority-tasks", task.view);
  },
  deadlineTasks() {
    let tempTasks;
    if (JSON.parse(localStorage.getItem("tasks")) !== null) {
      [...tempTasks] = [...JSON.parse(localStorage.getItem("tasks"))];
      tempTasks.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else {
      tempTasks = null;
    }
    updateHelper(tempTasks, "deadline-tasks", task.view);
  },
  // goalsTasksEventListener(container, data, eventListener) {
  //   container.addEventListener("click", (e) => {
  //     if (e.target.tagName !== "H2" || e.target.textContent === "Empty") return;
  //     const clickTarget = data.filter(
  //       (goal) => goal.name === e.target.textContent
  //     );
  //     const id = clickTarget[0].id;
  //     eventListener !== undefined ? eventListener(id) : null;
  //   });
  // },
  closeView() {
    document.querySelector(".close-btn").addEventListener("click", (e) => {
      homeController.renderHomeView();
    });
  },
};

export { renderView };
