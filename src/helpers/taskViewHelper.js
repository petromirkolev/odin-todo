import taskView from "../views/taskView.js";
import addTaskView from "../views/addTaskView.js";
import Task from "../constructors/taskConstructor.js";
import taskStorage from "../storage/taskStorage.js";
import renderModal from "../helpers/modalHelper.js";
import homeController from "../controllers/homeController.js";
const appContainer = document.querySelector(".app-container");

const renderView = {
  view() {
    appContainer.innerHTML = "";
    appContainer.innerHTML = taskView;
    // Attach close view button logic
    homeController.closeView();
  },
  add() {
    const query = document.querySelector.bind(document);
    appContainer.innerHTML = "";
    appContainer.innerHTML = addTaskView;
    // Import goals list from local storage to use in add task view
    let latestGoals = JSON.parse(localStorage.getItem("goals"));
    // If goals, add them to the view
    const data = latestGoals === null ? false : latestGoals;
    if (data) {
      data.map((goal) => {
        document
          .querySelector("#parent-goal")
          .insertAdjacentHTML(
            "beforeend",
            `<option value="${goal.id}">${goal.name}</option>`
          );
      });
    } else {
      document
        .querySelector("#parent-goal")
        .insertAdjacentHTML(
          "beforeend",
          `<option value="lorem">No goals yet</option>`
        );
    }
    document.querySelector(".add-task").addEventListener("click", (e) => {
      const [name, description, dueDate, priority, goal] = [
        query("#task-name").value,
        query("#task-description").value,
        query("#task-due-date").value,
        query("#task-priority").value,
        query("#parent-goal").value,
      ];
      // Call task constructor
      const newTask = new Task(name, description, dueDate, priority, goal);
      // Add task to local storage
      localStorage.setItem("task", JSON.stringify(newTask));
      taskStorage.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(taskStorage));
      // Reset input
      query("#task-name").value =
        query("#task-description").value =
        query("#task-due-date").value =
        query("#task-priority").value =
        query("#parent-goal").value =
          "";
      // Show modal
      renderModal("Task added successfully!");
      // Render home page
      homeController.renderHomeView();
    });
  },
};

export { renderView };
