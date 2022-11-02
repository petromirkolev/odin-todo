export default function updateMenuGoals() {
  const goalsContainer = document.querySelector(".nav-goals");
  // Import goals from local storage
  let latestGoals = JSON.parse(localStorage.getItem("goals"));
  // If goals, add them to menu
  const data = latestGoals === null ? false : latestGoals;
  if (data) {
    latestGoals.forEach((goal) => {
      goalsContainer.insertAdjacentHTML(
        "beforeend",
        `
          <div class="nav-item ${goal.id}">
          <span class="material-symbols-outlined"> menu </span>
          <h1>${goal.name}</h1>
          </div>
          `
      );
    });
  } else {
    goalsContainer.insertAdjacentHTML(
      "beforeend",
      `
        <div class="nav-item">
        <span class="material-symbols-outlined"> menu </span>
        <h1>No goals yet 😢</h1>
        </div>
        `
    );
  }
}
