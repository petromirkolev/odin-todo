import taskView from "../views/taskView.js";
import addTaskView from "../views/addTaskView.js";
import editTaskView from "../views/editTaskView.js";
import Task from "../constructors/taskConstructor.js";
import taskStorage from "../storage/taskStorage.js";
import renderModal from "../helpers/modalHelper.js";
import homeController from "../controllers/homeController.js";
import taskController from "../controllers/taskController.js";
import goalController from "../controllers/goalController.js";
const query = document.querySelector.bind(document);
const appContainer = document.querySelector(".app-container");

const renderView = {
  view(id) {
    appContainer.innerHTML = "";
    appContainer.innerHTML = taskView;
    // Pass task data to use in goal view
    const getTasks = JSON.parse(localStorage.getItem("tasks"));
    const taskData = getTasks.find((task) => task.id === id);
    const priority = () => {
      switch (taskData.priority) {
        case "1":
          return "Low";
        case "2":
          return "Medium";
        case "3":
          return "High";
        case "4":
          return "Urgent";
      }
    };

    // Add task info to view
    query(".view-task-container > h1").innerHTML = `📛 ${taskData.name}`;
    query(".task-description > p").innerHTML = `${taskData.description}`;
    query(".task-due-date > p").innerHTML = `${new Date(
      taskData.id
    ).toLocaleString()}`;
    query(".task-priority > p").innerHTML = `${priority()}`;
    // Add task goal to view
    const getGoals = JSON.parse(localStorage.getItem("goals"));
    const goalData = getGoals.find((goal) => +goal.id === +taskData.goal);
    if (goalData.length !== 0) {
      query(".task-parent-goal > p").innerHTML = `${goalData.name}`;
      query(".task-parent-goal > p").addEventListener("click", (e) => {
        goalController.viewGoal(goalData.id);
      });
    } else {
      query(".task-parent-goal > p").innerHTML = `No goals found!`;
    }
    // Attach delete goal button logic
    query(".delete-task").addEventListener("click", (e) => {
      taskController.deleteTask(id);
    });
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
          `<option value="ngy">No goals yet</option>`
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

      if (goal !== "ngy") {
        if (name.length > 0) {
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
          renderModal("🏆 Task added successfully! 🏆");
        } else {
          renderModal("❗️ Name must not be empty ❗️");
        }
      } else {
        renderModal("❗️ Add a goal first! ❗️");
      }
      homeController.renderHomeView();
    });
  },
  edit(id) {
    appContainer.innerHTML = "";
    appContainer.innerHTML = editTaskView;
    goalStorage.find((goal) => {
      if (goal.id === id) {
        document.querySelector("#edit-goal-name").value = goal.name;
        document.querySelector("#edit-goal-description").value =
          goal.description;
        document.querySelector(".edit-goal").addEventListener("click", (e) => {
          goal.name = document.querySelector("#edit-goal-name").value;
          goal.description = document.querySelector(
            "#edit-goal-description"
          ).value;
          localStorage.setItem("goals", JSON.stringify(goalStorage));
          homeController.renderHomeView();
          menuController.renderMenuView();
        });
      }
    });
  },

  delete(id) {},
};

export { renderView };
