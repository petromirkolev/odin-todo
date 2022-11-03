import { addTaskView } from "../views/addTaskView.js";
import { taskView } from "../views/taskView.js";
import { addTaskGetDropdownGoals } from "../helpers/taskHelper.js";
import closeView from "../helpers/closeBtnHelper.js";
import { updateTaskView } from "../helpers/taskHelper.js";

const appContainer = document.querySelector(".app-container");

const renderTaskView = () => {
  appContainer.innerHTML = "";
  appContainer.innerHTML = taskView;
  // updateTaskView();
  closeView();
};

const renderAddTaskView = () => {
  appContainer.innerHTML = "";
  appContainer.innerHTML = addTaskView;
  closeView();
  addTaskGetDropdownGoals();
};

export { renderAddTaskView, renderTaskView };
