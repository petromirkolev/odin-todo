import taskView from "../views/taskView.js";
import addTaskView from "../views/addTaskView.js";
import editTaskView from "../views/editTaskView.js";
import Task from "../constructors/taskConstructor.js";
import taskStorage from "../storage/taskStorage.js";
import renderModal from "../helpers/modalHelper.js";
import homeController from "../controllers/homeController.js";
import taskController from "../controllers/taskController.js";
import goalController from "../controllers/goalController.js";
import goalStorage from "../storage/goalStorage.js";
const query = document.querySelector.bind(document);
const appContainer = query(".app-container");

const renderView = {
  view(id) {
    appContainer.innerHTML = "";
    appContainer.innerHTML = taskView;
    homeController.closeView(); // Attach close view button logic
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
    if (goalData === undefined) {
      query(".task-parent-goal > p").innerHTML = `No goals found!`;
    } else {
      query(".task-parent-goal > p").innerHTML = `${goalData.name}`;
      query(".task-parent-goal > p").addEventListener("click", (e) => {
        goalController.viewGoal(goalData.id);
      });
    }
    // Attach edit task button logic
    query(".edit-task").addEventListener("click", (e) => {
      taskController.editTask(id);
    });
    // Attach delete task button logic
    query(".delete-task").addEventListener("click", (e) => {
      taskController.deleteTask(id);
    });
  },
  add() {
    appContainer.innerHTML = "";
    appContainer.innerHTML = addTaskView;
    homeController.closeView(); // Attach close view button logic
    // Import goals list from local storage to use in add task view
    let latestGoals = JSON.parse(localStorage.getItem("goals"));
    let latestTasks = JSON.parse(localStorage.getItem("tasks"));
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
    query(".add-task").addEventListener("click", (e) => {
      const [name, description, dueDate, priority, goal] = [
        query("#task-name").value,
        query("#task-description").value,
        query("#task-due-date").value,
        query("#task-priority").value,
        query("#parent-goal").value,
      ];
      if (goal !== "ngy") {
        if (name.length > 0) {
          let goalName = latestGoals.find((goal) => goal.name === name);
          let isNameUsed = false;
          if (latestTasks !== null)
            latestTasks.map((task) => {
              if (task.name.includes(name)) {
                isNameUsed = true;
              }
            });
          if (goalName === undefined && isNameUsed === false) {
            // Call task constructor
            const newTask = new Task(
              name,
              description,
              dueDate,
              priority,
              goal
            );
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
            // Show success modal
            renderModal("🏆 Task added successfully! 🏆");
            homeController.renderHomeView();
          } else {
            renderModal("❗️ Task name must be different! ❗️");
          }
        } else {
          // Show failure modal
          renderModal("❗️ Name must not be empty ❗️");
        }
      } else {
        // Show failure modal
        renderModal("❗️ Add a goal first! ❗️");
      }
    });
  },
  edit(id) {
    appContainer.innerHTML = "";
    appContainer.innerHTML = editTaskView;
    homeController.closeView(); // Attach close view button logic
    taskStorage.find((task) => {
      if (task.id === id) {
        query("#task-name").value = task.name;
        query("#task-description").value = task.description;
        query("#task-due-date").value = task.dueDate;
        query("#task-priority").value = task.priority;
        const goal = goalStorage.find((goal) => {
          if (+goal.id === +task.goal) return goal;
        });
        document
          .querySelector("#parent-goal")
          .insertAdjacentHTML(
            "beforeend",
            `<option value="${goal.id}">${goal.name}</option>`
          );

        query(".edit-task").addEventListener("click", (e) => {
          task.name = query("#task-name").value;
          task.description = query("#task-description").value;
          task.dueDate = query("#task-due-date").value;
          task.priority = query("#task-priority").value;
          if (task.name.length === 0) {
            renderModal("❗️ Name must not be empty ❗️");
          } else {
            localStorage.setItem("tasks", JSON.stringify(taskStorage));
            // Show success modal
            renderModal("✅ Task edited successfully! ✅");
            homeController.renderHomeView();
          }
        });
      }
    });
  },
  delete(id) {
    const taskIndex = taskStorage.findIndex((task) => +task.id === +id);
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    // Remove goal
    taskStorage.splice(taskIndex, 1);
    // Clear local storage
    localStorage.clear();
    // Re-assing remaining values to local storage
    if (goalStorage.length !== 0)
      localStorage.setItem("goals", JSON.stringify(goalStorage));
    if (taskStorage.length !== 0)
      localStorage.setItem("tasks", JSON.stringify(taskStorage));
    // Show success modal
    renderModal("Task deleted successfully!");
    // Update views
    homeController.renderHomeView();
  },
};

export { renderView };
