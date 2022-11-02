import homeController from "../scripts/homeController.js";

export default function closeView() {
  document.querySelector(".close-btn").addEventListener("click", (e) => {
    homeController.renderHomeView();
  });
}
