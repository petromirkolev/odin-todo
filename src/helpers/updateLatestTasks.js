import { renderTaskView } from "../renderers/taskRenderer.js";
import updateHelper from "./updateHelper.js";

export default function updateLatestTasks() {
  // Import tasks from local storage
  let latestTasks = JSON.parse(localStorage.getItem("tasks"));
  // Update latest tasks
  updateHelper(latestTasks, "latest", "tasks", renderTaskView);
}
