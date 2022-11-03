// import "../css/task.css";
import {
  renderTaskView,
  renderAddTaskView,
} from "../renderers/taskRenderer.js";
import { addNewTask } from "../helpers/taskHelper.js";

const taskController = {
  // Show all tasks
  renderTaskView,
  // Show add new task view
  renderAddTaskView,
  // Add new task
  addNewTask,
};

export default taskController;
