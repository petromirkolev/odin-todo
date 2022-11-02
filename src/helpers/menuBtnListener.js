import goalController from "./goalController.js.js";
import taskController from "./taskController.js.js";

export default function menuBtnListener() {
  const navButtons = document.querySelector(".nav-buttons");
  navButtons.addEventListener("click", (e) => {
    const currentButton = e.target.classList[0];
    if (currentButton === "btn-new-goal") {
      goalController.renderAddGoalView();
      goalController.addNewGoal();
    }
    if (currentButton === "btn-new-task") taskController.renderAddTaskView();
  });
}
