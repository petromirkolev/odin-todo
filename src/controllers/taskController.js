// import "../css/task.css";
import { renderView as task } from "../helpers/taskViewHelper.js";

const taskController = {
  addTask() {
    task.add();
  },
  viewTask(id) {
    task.view(id);
  },
  editTask(id) {
    task.edit(id);
  },
  deleteTask(id) {
    task.delete(id);
  },
};

export default taskController;
