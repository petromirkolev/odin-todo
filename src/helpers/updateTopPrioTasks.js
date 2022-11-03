import updateHelper from "./updateHelper.js";
import { renderTaskView } from "../renderers/taskRenderer.js";

export default function updateTopPriorityTasks() {
  let tempTasks;
  if (JSON.parse(localStorage.getItem("tasks")) !== null) {
    [...tempTasks] = [...JSON.parse(localStorage.getItem("tasks"))];
    tempTasks.sort((a, b) => +a.priority - +b.priority);
  } else {
    tempTasks = null;
  }

  updateHelper(tempTasks, "priority", "tasks", renderTaskView);
}
