import { renderView as viewMenu } from "../helpers/menuViewHelper.js";

const menuController = {
  renderMenuView() {
    viewMenu.goals();
    viewMenu.buttons();
  },
};

export default menuController;
