import Task from "../constructors/taskConstructor.js";
import taskStorage from "../storage/taskStorage.js";
import renderModal from "../renderers/modalRenderer.js";
import homeController from "../scripts/homeController.js";
const query = document.querySelector.bind(document);

// Call new task constructor and push new task to local storage
const addNewTask = () => {
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
};
// Add goals to dropdown menu in new task view
const addTaskGetDropdownGoals = () => {
  // Import goals from local storage
  let latestGoals = JSON.parse(localStorage.getItem("goals"));
  // If goals, add them to view
  const data = latestGoals === null ? false : latestGoals;
  if (data) {
    return data.map((goal) => {
      document
        .querySelector("#parent-goal")
        .insertAdjacentHTML(
          "beforeend",
          `<option value="${goal.id}">${goal.name}</option>`
        );
    });
  } else {
    return document
      .querySelector("#parent-goal")
      .insertAdjacentHTML(
        "beforeend",
        `<option value="lorem">No goals yet</option>`
      );
  }
};
// Update task view
const updateTaskView = () => {
  const goals = JSON.parse(localStorage.getItem("goals"));
  const tasks = JSON.parse(localStorage.getItem("tasks"));

  // homeBtnListener();

  // console.log(data);
};

export { addNewTask, addTaskGetDropdownGoals, updateTaskView };
