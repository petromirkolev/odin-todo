import { addGoalView } from "../views/addGoalView.js";
import { goalView } from "../views/goalView.js";
import { deleteGoal, updateGoalView } from "../helpers/goalHelper.js";
import closeView from "../helpers/closeBtnHelper.js";
const appContainer = document.querySelector(".app-container");

const renderHomeGoalView = (id) => {
  appContainer.innerHTML = "";
  appContainer.innerHTML = goalView;
  // Pass goal data to use in goal view
  const [name, description, tasks] = updateGoalView(id);
  // Add goal info to view
  document.querySelector(".list-goals").insertAdjacentHTML(
    "afterbegin",
    `
  <h1>${name}<button class="edit-goal">✏️</button></h1>
  <h2>🎯 Goal description<button class="edit-goal">✏️</button></h2>
  <p>${description}</p>
  <h2>📗 Goal tasks</h2>
  `
  );
  // Link goal to delete goal button
  document.querySelector(".list-goals").insertAdjacentHTML(
    "beforeend",
    `
  <button class="delete-goal" id="${name}">Delete</button>

  `
  );

  if (tasks.length !== 0) {
    tasks.forEach((task) => {
      document
        .querySelector(".goal-wrapper")
        .insertAdjacentHTML("afterbegin", `<h3>🛠 ${task.name}</h3>`);
    });
  }

  deleteGoal(name, tasks);
  closeView();
};

const renderAddGoalView = () => {
  appContainer.innerHTML = "";
  appContainer.innerHTML = addGoalView;
  closeView();
};

export { renderAddGoalView, renderHomeGoalView };
