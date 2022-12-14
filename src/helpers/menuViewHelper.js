import goalController from "../controllers/goalController.js";
import taskController from "../controllers/taskController.js";

const renderView = {
  goals() {
    const goalsContainer = document.querySelector(".nav-goals");
    goalsContainer.innerHTML = "";
    // Import goals from local storage
    let latestGoals = JSON.parse(localStorage.getItem("goals"));
    // If goals, add them to menu
    const data = latestGoals === null ? false : latestGoals;
    if (data) {
      latestGoals.forEach((goal) => {
        goalsContainer.insertAdjacentHTML(
          "beforeend",
          `<div class="nav-item ${goal.id}">
          <h1>${goal.name}</h1>
          </div>`
        );
      });
    } else {
      goalsContainer.innerHTML = "";
    }
    if (latestGoals !== null) {
      document
        .querySelector(".nav-goals")
        .addEventListener("click", function viewGoal(e) {
          const [navClass, id] = [
            e.target.parentNode.classList[0],
            +e.target.parentNode.classList[1],
          ];
          if (navClass === "nav-item" && id !== undefined)
            goalController.viewGoal(id);
        });
    }
  },
  buttons() {
    document.querySelector(".nav-buttons").addEventListener("click", (e) => {
      const currentButton = e.target.classList[0];
      // Call add new goal view and add new goal function
      if (currentButton === "btn-new-goal") {
        goalController.addGoal();
      }
      // Call add new task view and add task function
      if (currentButton === "btn-new-task") {
        taskController.addTask();
      }
    });
  },
};

export { renderView };
