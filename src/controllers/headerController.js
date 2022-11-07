import { renderView as headerRender } from "../helpers/headerViewHelper.js";
const headerController = {
  renderHeaderView() {
    headerRender.headerView();
    headerRender.useSearchBar();
  },
};

export default headerController;
