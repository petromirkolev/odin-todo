import "../css/home.css";
import homeView from "../views/homeView.js";
import updateLatestGoals from "../helpers/updateLatestGoals.js";
import { renderGoalView } from "../renderers/goalRenderer.js";

// Render home view
function renderHomeView() {
  const [g3, g2, g1] = [...updateLatestGoals()];
  const appContainer = document.querySelector(".app-container");
  appContainer.innerHTML = "";
  appContainer.innerHTML = homeView(g3, g2, g1);
  // Show all goals
  document.querySelector(".latest-goals").addEventListener("click", (e) => {
    if (e.target.tagName !== "H2") return;
    renderGoalView();
  });
}

export { renderHomeView };
