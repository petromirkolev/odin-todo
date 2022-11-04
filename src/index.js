// import "../src/css/style.css";
import homeController from "./controllers/homeController.js";
import headerController from "./controllers/headerController.js";
import menuController from "./controllers/menuController.js";

// Initiate application
window.addEventListener("load", () => {
  // we call home controller which calls render home view function which calls homeview helper function
  homeController.renderHomeView();
  headerController.renderHeaderView();
  menuController.renderMenuView();
});
