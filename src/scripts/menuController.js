import "../css/menu.css";
const navigation = document.querySelector(".nav-container");

navigation.addEventListener("click", (e) => {
  const currentButton = e.target.classList[0];

  if (currentButton === "btn-expand") console.log("Say hello!");
});
