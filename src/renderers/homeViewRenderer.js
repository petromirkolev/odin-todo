import "../css/home.css";
import { homeView } from "../views/homeView.js";

const appContainer = document.querySelector(".app-container");

// Render home view
const renderHomeView = () => {
  appContainer.innerHTML = "";
  appContainer.innerHTML = homeView;
};

export { renderHomeView };
