import { taskView } from "../views/taskView.js";
import { addTaskView } from "../views/addTaskView.js";
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
};

export { renderAddTaskView, renderTaskView };
