import { addGoalView } from "../views/addGoalView.js";
import { goalView } from "../views/goalView.js";
import closeView from "../helpers/closeBtnHelper.js";
const appContainer = document.querySelector(".app-container");

const renderGoalView = () => {
  appContainer.innerHTML = "";
  appContainer.innerHTML = goalView;
  closeView();
};

const renderAddGoalView = () => {
  appContainer.innerHTML = "";
  appContainer.innerHTML = addGoalView;
  closeView();
};

export { renderAddGoalView, renderGoalView };
