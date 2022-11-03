// import "../css/home.css";
import updateHomeViewContainer from "../helpers/updateHomeViewContainer.js";
import updateLatestGoals from "../helpers/updateLatestGoals.js";
import updateLatestTasks from "../helpers/updateLatestTasks.js";
import updateTopPriorityTasks from "../helpers/updateTopPrioTasks.js";
import updateDeadlineTasks from "../helpers/updateDeadlineTasks.js";

// Render home view
function renderHomeView() {
  // Render home view
  updateHomeViewContainer();
  // Add latest goals
  updateLatestGoals();
  // Latest tasks
  updateLatestTasks();
  // Top priority tasks
  updateTopPriorityTasks();
  // Tasks approaching deadline
  updateDeadlineTasks();
  // Show all goals
}

export { renderHomeView };
