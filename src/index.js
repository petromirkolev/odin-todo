import "../src/css/style.css";

import homeController from "./scripts/homeController.js";
import menuController from "./scripts/menuController.js";
import headerController from "./scripts/headerController.js";

// Initiate application

window.addEventListener("load", () => {
  headerController();
  menuController();
  homeController.renderHomeView();
});
