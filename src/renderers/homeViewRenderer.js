import { homeView } from "../views/viewHome";
const appContainer = document.querySelector(".app-container");
export default function renderHome() {
  appContainer.innerHTML = "";
  appContainer.innerHTML = homeView;
}
