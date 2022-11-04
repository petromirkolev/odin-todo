import { renderView as headerRender } from "../helpers/headerViewHelper.js";
const headerController = {
  renderHeaderView() {
    headerRender.header();
    headerRender.useSearchBar();
  },
};

export default headerController;
