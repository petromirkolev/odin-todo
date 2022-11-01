import "../src/css/style.css";
import { renderHeader } from "../src/scripts/headerController.js";
import { renderMenu, menuBtnEvents } from "./scripts/menuController.js";
import { renderHomeView } from "../src/renderers/homeViewRenderer.js";

renderHeader();
renderMenu();
menuBtnEvents();
renderHomeView();
