import { renderView as goal } from "../helpers/goalViewHelper.js";

const goalController = {
  addGoal() {
    goal.add();
  },
  viewGoal(id) {
    goal.view(id);
  },
  updateGoal() {
    goal.update();
  },
  deleteGoal(name, tasks) {
    goal.delete(name, tasks);
  },
};

export default goalController;
