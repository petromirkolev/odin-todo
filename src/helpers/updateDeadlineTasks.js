import updateHelper from "./updateHelper.js";
import { renderTaskView } from "../renderers/taskRenderer.js";

export default function updateDeadlineTasks() {
  let tempTasks;
  if (JSON.parse(localStorage.getItem("tasks")) !== null) {
    [...tempTasks] = [...JSON.parse(localStorage.getItem("tasks"))];
    tempTasks.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else {
    tempTasks = null;
  }
  updateHelper(tempTasks, "deadline", "tasks", renderTaskView);
}
