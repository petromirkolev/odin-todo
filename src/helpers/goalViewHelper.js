import menuController from "../controllers/menuController.js";
import homeController from "../controllers/homeController.js";
import Goal from "../constructors/goalConstructor.js";
import goalStorage from "../storage/goalStorage.js";
import taskStorage from "../storage/taskStorage.js";
import goalView from "../views/goalView.js";
import addGoalView from "../views/addGoalView.js";
import renderModal from "./modalHelper.js";
import goalController from "../controllers/goalController.js";
const appContainer = document.querySelector(".app-container");

const renderView = {
  view(id) {
    appContainer.innerHTML = "";
    appContainer.innerHTML = goalView;
    // Pass goal data to use in goal view
    const getGoals = JSON.parse(localStorage.getItem("goals"));
    const goalData = getGoals.find((goal) => goal.id === id);
    // Add goal info to view
    document.querySelector(".list-goals").insertAdjacentHTML(
      "afterbegin",
      `<h1>${goalData.name}</h1>
     <h2>🎯 Goal description</h2>
     <p>${goalData.description}</p>
     <h2>📗 Goal tasks</h2>`
    );
    // Add goal tasks to view
    const getTasks = JSON.parse(localStorage.getItem("tasks"));
    const taskData = getTasks.filter((task) => +task.goal === id);
    if (taskData.length !== 0) {
      taskData.forEach((task) => {
        document
          .querySelector(".goal-wrapper")
          .insertAdjacentHTML("afterbegin", `<h3>🛠 ${task.name}</h3>`);
      });
    }
    // Add delete goal button
    document
      .querySelector(".list-goals")
      .insertAdjacentHTML(
        "beforeend",
        `<button class="delete-goal" id="${goalData.name}">Delete</button>`
      );
    // Attach delete goal button logic
    goalController.deleteGoal(goalData.name, taskData);
    // Attach close view button logic
    homeController.closeView();
  },
  add() {
    appContainer.innerHTML = "";
    appContainer.innerHTML = addGoalView;
    // Attach close view button logic
    homeController.closeView();
    document.querySelector(".add-goal").addEventListener("click", (e) => {
      const goalName = document.querySelector("#goal-name").value;
      const goalDescription = document.querySelector("#goal-description").value;
      const newGoal = new Goal(goalName, goalDescription);
      // Add goals to local storage
      localStorage.setItem("goal", JSON.stringify(newGoal));
      goalStorage.push(newGoal);
      localStorage.setItem("goals", JSON.stringify(goalStorage));
      document.querySelector("#goal-name").value = document.querySelector(
        "#goal-description"
      ).value = "";
      // Show modal
      renderModal("Goal added successfully!");
      // Render home page
      homeController.renderHomeView();
      menuController.renderMenuView();
    });
  },
  update() {
    const goals = JSON.parse(localStorage.getItem("goals"));
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const goalFound = goals.find((goal) => goal.id === id);
    let tasksFound =
      tasks !== null
        ? tasks.filter((task) => {
            return +task.goal === +id;
          })
        : "";
    return [goalFound.name, goalFound.description, tasksFound];
  },
  delete(name, tasks) {
    document.querySelector(".delete-goal").addEventListener("click", (e) => {
      const goalIndex = goalStorage.findIndex((goal) => goal.name === name);
      tasks.forEach((task) => {
        const taskIndex = taskStorage.findIndex(
          (searchedTask) => searchedTask.name === task.name
        );
        taskStorage.splice(taskIndex, 1);
      });
      goalStorage.splice(goalIndex, 1);
      localStorage.clear();
      if (goalStorage.length !== 0)
        localStorage.setItem("goals", JSON.stringify(goalStorage));
      if (taskStorage.length !== 0)
        localStorage.setItem("tasks", JSON.stringify(taskStorage));
      renderModal("Goal and goal tasks deleted successfully!");
      homeController.renderHomeView();
      menuController.renderMenuView();
    });
  },
};

export { renderView };
