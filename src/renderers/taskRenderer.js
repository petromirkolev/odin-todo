import { addTaskView } from "../views/addTaskView.js";
import { taskView } from "../views/taskView.js";
import { getGoals } from "../helpers/taskHelper.js";
import closeView from "../helpers/closeBtnHelper.js";

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
