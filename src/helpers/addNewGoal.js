import Goal from "../constructors/goalConstructor.js";
import goalStorage from "../storage/goalStorage.js";
import modalRenderer from "../renderers/modalRenderer.js";
import homeController from "../scripts/homeController.js";
import { renderMenuGoals } from "../renderers/menuRenderer.js";

export default function addNewGoal() {
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
}
