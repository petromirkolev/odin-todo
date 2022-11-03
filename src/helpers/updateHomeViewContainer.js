import homeView from "../views/homeView.js";

export default function updateHomeViewContainer() {
  const appContainer = document.querySelector(".app-container");
  appContainer.innerHTML = "";
  appContainer.innerHTML = homeView;
}
