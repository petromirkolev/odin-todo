import "../src/css/style.css";
import "../src/css/goal.css";
import "../src/css/header.css";
import "../src/css/home.css";
import "../src/css/menu.css";
import "../src/css/task.css";

import homeController from "./controllers/homeController.js";
import headerController from "./controllers/headerController.js";
import menuController from "./controllers/menuController.js";

// Initiate application
window.addEventListener("load", () => {
  homeController.renderHomeView();
  headerController.renderHeaderView();
  menuController.renderMenuView();
});
