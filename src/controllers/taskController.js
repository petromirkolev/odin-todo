// import "../css/task.css";
import { renderView as task } from "../helpers/taskViewHelper.js";

const taskController = {
  addTask() {
    task.add();
  },
  viewTask() {},
};

export default taskController;
