import { renderHomeGoalView } from "../renderers/goalRenderer.js";
import updateHelper from "./updateHelper.js";

export default function updateLatestGoals() {
  // Import goals from local storage
  let latestGoals = JSON.parse(localStorage.getItem("goals"));
  // Update latest goals
  updateHelper(latestGoals, "latest", "goals", renderHomeGoalView);
}
