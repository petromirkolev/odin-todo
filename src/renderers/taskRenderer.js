import { taskView } from "../views/taskView.js";
import { addTaskView } from "../views/addTaskView.js";
import closeView from "../helpers/closeBtnHelper.js";
import { getGoals } from "../helpers/taskHelper.js";

const appContainer = document.querySelector(".app-container");

const renderTaskView = () => {
  appContainer.innerHTML = "";
  appContainer.innerHTML = taskView;
  closeView();
};

const renderAddTaskView = () => {
  appContainer.innerHTML = "";
  appContainer.innerHTML = addTaskView;
  closeView();
  getGoals();
};

export { renderAddTaskView, renderTaskView };
