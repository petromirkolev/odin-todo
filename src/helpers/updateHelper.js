import goalController from "../controllers/goalController.js";
import taskController from "../controllers/taskController.js";

export default function updateHelper(data, section /* , event */) {
  let item3, item2, item1;
  // We check if there is data that we receive, else we set it to false and return preset text
  const itemArray = data === null ? false : data;
  if (itemArray) {
    [item3, item2, item1] = [
      itemArray[itemArray.length - 1] === undefined
        ? "Empty"
        : itemArray[itemArray.length - 1].name,
      itemArray[itemArray.length - 2] === undefined
        ? "Empty"
        : itemArray[itemArray.length - 2].name,
      itemArray[itemArray.length - 3] === undefined
        ? "Empty"
        : itemArray[itemArray.length - 3].name,
    ];
  } else {
    let [...sectionOwner] = section.split("-");
    item3 = item2 = item1 = `Waiting for ${sectionOwner[1]} 😢`;
  }
  // Add latest tasks to home view
  const container = document.querySelector(`.${section}`);
  container.insertAdjacentHTML(
    "beforeend",
    `
  <h2>${item3}</h2>
  <h2>${item2}</h2>
  <h2>${item1}</h2>
  `
  );
  // Attach event listener to each view
  container.addEventListener("click", (e) => {
    if (e.target.tagName !== "H2" || e.target.textContent === "Empty") return;
    if (e.target.parentNode.classList.contains("latest-goals")) {
      // Goal handler
      const clickTarget = itemArray.filter((goal) => {
        if (goal.name === e.target.textContent) return goal.id;
      });
      const id = clickTarget[0].id;
      goalController.viewGoal(id);
    } else {
      // Task handler
      const clickTarget = itemArray.filter((task) => {
        if (task.name === e.target.textContent) return task.goal;
      });
      const id = clickTarget[0].id;
      taskController.viewTask(id);
    }
  });
}
