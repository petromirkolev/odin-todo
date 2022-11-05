import menuController from "../controllers/menuController.js";
import homeController from "../controllers/homeController.js";
import goalController from "../controllers/goalController.js";
import taskController from "../controllers/taskController.js";
import goalStorage from "../storage/goalStorage.js";
import taskStorage from "../storage/taskStorage.js";
import addGoalView from "../views/addGoalView.js";
import editGoalView from "../views/editGoalView.js";
import goalView from "../views/goalView.js";
import Goal from "../constructors/goalConstructor.js";
import renderModal from "./modalHelper.js";
const appContainer = document.querySelector(".app-container");

const renderView = {
  view(id) {
    appContainer.innerHTML = "";
    appContainer.innerHTML = goalView; // Pass goal data to use in goal view
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
    if (getTasks !== null) {
      const taskData = getTasks.filter((task) => +task.goal === id);
      if (taskData.length !== 0) {
        taskData.forEach((task) => {
          document
            .querySelector(".goal-wrapper")
            .insertAdjacentHTML("afterbegin", `<h3>${task.name}</h3>`);
        });
        document
          .querySelector(".goal-wrapper")
          .addEventListener("click", (e) => {
            let task = getTasks.find(
              (task) => task.name === e.target.textContent
            );
            taskController.viewTask(task.id);
          });
      }
    } else {
      document
        .querySelector(".goal-wrapper")
        .insertAdjacentHTML("afterbegin", `<h3>🛠 No tasks yet</h3>`);
    }
    // Attach edit goal button logic
    document.querySelector(".edit-goal").addEventListener("click", (e) => {
      goalController.editGoal(id);
    });
    // Attach delete goal button logic
    document.querySelector(".delete-goal").addEventListener("click", (e) => {
      goalController.deleteGoal(id);
    });
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

      // Check if goal name is not empty
      if (goalName.length === 0)
        return renderModal("Goal name must not be empty!");
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
  delete(id) {
    const goalIndex = goalStorage.findIndex((goal) => goal.id === id);
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    // Remove all goal related tasks, if any
    if (tasks !== null)
      for (let i = tasks.length - 1; i >= 0; i--) {
        if (+tasks[i].goal === +id) taskStorage.splice(i, 1);
      }
    // Remove goal
    goalStorage.splice(goalIndex, 1);
    // Clear local storage
    localStorage.clear();
    // Re-assing remaining values to local storage
    if (goalStorage.length !== 0)
      localStorage.setItem("goals", JSON.stringify(goalStorage));
    if (taskStorage.length !== 0)
      localStorage.setItem("tasks", JSON.stringify(taskStorage));
    // Render success modal
    renderModal("Goal deleted successfully!");
    // Update views
    homeController.renderHomeView();
    menuController.renderMenuView();
  },
  edit(id) {
    appContainer.innerHTML = "";
    appContainer.innerHTML = editGoalView;
    goalStorage.find((goal) => {
      if (goal.id === id) {
        document.querySelector("#edit-goal-name").value = goal.name;
        document.querySelector("#edit-goal-description").value =
          goal.description;
        document.querySelector(".edit-goal").addEventListener("click", (e) => {
          goal.name = document.querySelector("#edit-goal-name").value;
          goal.description = document.querySelector(
            "#edit-goal-description"
          ).value;
          localStorage.setItem("goals", JSON.stringify(goalStorage));
          homeController.renderHomeView();
          menuController.renderMenuView();
        });
      }
    });
  },
};

export { renderView };
