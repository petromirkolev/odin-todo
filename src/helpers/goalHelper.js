import Goal from "../constructors/goalConstructor.js";
import goalStorage from "../storage/goalStorage.js";
import taskStorage from "../storage/taskStorage.js";
import modalRenderer from "../renderers/modalRenderer.js";
import homeController from "../scripts/homeController.js";
import { renderMenuGoals } from "../renderers/menuRenderer.js";
import { renderHomeView } from "../renderers/homeRenderer.js";

// Add new goal
const addNewGoal = () => {
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
    modalRenderer("Goal added successfully!");
    // Render home page
    homeController.renderHomeView();
    renderMenuGoals();
  });
};
// Update goal view
const updateGoalView = (id) => {
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
};
// Delete a goal
const deleteGoal = (name, tasks) => {
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
    localStorage.setItem("goals", JSON.stringify(goalStorage));
    localStorage.setItem("tasks", JSON.stringify(taskStorage));
    renderHomeView();
    renderMenuGoals();
  });
};

export { addNewGoal, updateGoalView, deleteGoal };
