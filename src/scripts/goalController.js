// import "../css/goal.css";
import {
  renderHomeGoalView,
  renderAddGoalView,
} from "../renderers/goalRenderer.js";
import { addNewGoal } from "../helpers/goalHelper.js";

const goalController = {
  // Render goal view
  renderHomeGoalView,
  // Render add new goal view
  renderAddGoalView,
  // Add new goal
  addNewGoal,
};

export default goalController;
