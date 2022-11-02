import "../css/goal.css";
import {
  renderGoalView,
  renderAddGoalView,
} from "../renderers/goalRenderer.js";
import addNewGoal from "../helpers/addNewGoal.js";

const goalController = {
  // Render goal view
  renderGoalView,
  // Render add new goal view
  renderAddGoalView,
  // Add new goal
  addNewGoal,
};

export default goalController;
