// import "../css/home.css";
import updateMenuGoals from "../helpers/updateMenuGoals.js";

// Render all goals in the application menu
function renderMenuGoals() {
  document.querySelector(".nav-goals").innerHTML = "";
  updateMenuGoals();
}

export { renderMenuGoals };
