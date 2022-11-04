import { renderView as homeScreenRender } from "../helpers/homeViewHelper.js";

const homeController = {
  renderHomeView() {
    homeScreenRender.home();
    homeScreenRender.latestGoals();
    homeScreenRender.latestTasks();
    homeScreenRender.priorityTasks();
    homeScreenRender.deadlineTasks();
  },
  closeView() {
    homeScreenRender.closeView();
  },
};

export default homeController;
