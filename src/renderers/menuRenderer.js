import "../css/home.css";
import updateMenuGoals from "../helpers/updateMenuGoals.js";
const goalsContainer = document.querySelector(".nav-goals");

// Render home view
function renderMenuGoals() {
  goalsContainer.innerHTML = "";
  updateMenuGoals();
}

export { renderMenuGoals };
