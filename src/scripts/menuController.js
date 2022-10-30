import "../css/menu.css";
const navigation = document.querySelector(".nav-container");

navigation.addEventListener("click", (e) => {
  const currentButton = e.target.classList[0];

  switch (currentButton) {
    case "btn-new-goal":
      console.log("Say hello to new goal!");
      break;
    case "btn-new-task":
      console.log("Say hello to new task!");
      break;
    default:
      break;
  }
});
