"use strict";
(self["webpackChunkodin_todo"] = self["webpackChunkodin_todo"] || []).push([["index"],{

/***/ "./src/constructors/goalConstructor.js":
/*!*********************************************!*\
  !*** ./src/constructors/goalConstructor.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Goal)
/* harmony export */ });
class Goal {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
  type = "goal";
  id = Date.now();
}


/***/ }),

/***/ "./src/helpers/closeBtnHelper.js":
/*!***************************************!*\
  !*** ./src/helpers/closeBtnHelper.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ closeView)
/* harmony export */ });
/* harmony import */ var _scripts_homeController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/homeController.js */ "./src/scripts/homeController.js");


function closeView() {
  document.querySelector(".close-btn").addEventListener("click", (e) => {
    _scripts_homeController_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderHomeView();
  });
}


/***/ }),

/***/ "./src/helpers/updateLatestGoals.js":
/*!******************************************!*\
  !*** ./src/helpers/updateLatestGoals.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateLatestGoals)
/* harmony export */ });
function updateLatestGoals() {
  // Import goals from local storage
  let latestGoals = JSON.parse(localStorage.getItem("goals"));
  // Check for goals and assign example values if goals.length < 3
  const data = latestGoals === null ? false : latestGoals;
  let g3, g2, g1;
  if (data) {
    [g3, g2, g1] = [
      data[data.length - 1] === undefined
        ? "Example"
        : data[data.length - 1].name,
      data[data.length - 2] === undefined
        ? "Example"
        : data[data.length - 2].name,
      data[data.length - 3] === undefined
        ? "Example"
        : data[data.length - 3].name,
    ];
  } else {
    g3 = g2 = g1 = "Waiting for a goal 😢";
  }
  return [g3, g2, g1];
}


/***/ }),

/***/ "./src/helpers/updateMenuGoals.js":
/*!****************************************!*\
  !*** ./src/helpers/updateMenuGoals.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateMenuGoals)
/* harmony export */ });
function updateMenuGoals() {
  const goalsContainer = document.querySelector(".nav-goals");
  // Import goals from local storage
  let latestGoals = JSON.parse(localStorage.getItem("goals"));
  // If goals, add them to menu
  const data = latestGoals === null ? false : latestGoals;
  if (data) {
    latestGoals.forEach((goal) => {
      goalsContainer.insertAdjacentHTML(
        "beforeend",
        `
          <div class="nav-item ${goal.id}">
          <span class="material-symbols-outlined"> menu </span>
          <h1>${goal.name}</h1>
          </div>
          `
      );
    });
  } else {
    goalsContainer.insertAdjacentHTML(
      "beforeend",
      `
        <div class="nav-item">
        <span class="material-symbols-outlined"> menu </span>
        <h1>No goals yet 😢</h1>
        </div>
        `
    );
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_homeController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/homeController.js */ "./src/scripts/homeController.js");
/* harmony import */ var _scripts_menuController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/menuController.js */ "./src/scripts/menuController.js");
/* harmony import */ var _scripts_headerController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/headerController.js */ "./src/scripts/headerController.js");
// import "../src/css/style.css";





// Initiate application

window.addEventListener("load", () => {
  (0,_scripts_headerController_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_scripts_menuController_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  _scripts_homeController_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderHomeView();
});


/***/ }),

/***/ "./src/renderers/goalRenderer.js":
/*!***************************************!*\
  !*** ./src/renderers/goalRenderer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderAddGoalView": () => (/* binding */ renderAddGoalView),
/* harmony export */   "renderGoalView": () => (/* binding */ renderGoalView)
/* harmony export */ });
/* harmony import */ var _views_addGoalView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/addGoalView.js */ "./src/views/addGoalView.js");
/* harmony import */ var _views_goalView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/goalView.js */ "./src/views/goalView.js");
/* harmony import */ var _helpers_closeBtnHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/closeBtnHelper.js */ "./src/helpers/closeBtnHelper.js");



const appContainer = document.querySelector(".app-container");

const renderGoalView = () => {
  appContainer.innerHTML = "";
  appContainer.innerHTML = _views_goalView_js__WEBPACK_IMPORTED_MODULE_1__.goalView;
  (0,_helpers_closeBtnHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
};

const renderAddGoalView = () => {
  appContainer.innerHTML = "";
  appContainer.innerHTML = _views_addGoalView_js__WEBPACK_IMPORTED_MODULE_0__.addGoalView;
  (0,_helpers_closeBtnHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
};




/***/ }),

/***/ "./src/renderers/homeRenderer.js":
/*!***************************************!*\
  !*** ./src/renderers/homeRenderer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHomeView": () => (/* binding */ renderHomeView)
/* harmony export */ });
/* harmony import */ var _views_homeView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/homeView.js */ "./src/views/homeView.js");
/* harmony import */ var _helpers_updateLatestGoals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/updateLatestGoals.js */ "./src/helpers/updateLatestGoals.js");
/* harmony import */ var _renderers_goalRenderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../renderers/goalRenderer.js */ "./src/renderers/goalRenderer.js");
// import "../css/home.css";




// Render home view
function renderHomeView() {
  const [g3, g2, g1] = [...(0,_helpers_updateLatestGoals_js__WEBPACK_IMPORTED_MODULE_1__["default"])()];
  const appContainer = document.querySelector(".app-container");
  appContainer.innerHTML = "";
  appContainer.innerHTML = (0,_views_homeView_js__WEBPACK_IMPORTED_MODULE_0__["default"])(g3, g2, g1);
  // Show all goals
  document.querySelector(".latest-goals").addEventListener("click", (e) => {
    if (e.target.tagName !== "H2") return;
    (0,_renderers_goalRenderer_js__WEBPACK_IMPORTED_MODULE_2__.renderGoalView)();
  });
}




/***/ }),

/***/ "./src/renderers/menuRenderer.js":
/*!***************************************!*\
  !*** ./src/renderers/menuRenderer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderMenuGoals": () => (/* binding */ renderMenuGoals)
/* harmony export */ });
/* harmony import */ var _helpers_updateMenuGoals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/updateMenuGoals.js */ "./src/helpers/updateMenuGoals.js");
// import "../css/home.css";

const goalsContainer = document.querySelector(".nav-goals");

// Render home view
function renderMenuGoals() {
  goalsContainer.innerHTML = "";
  (0,_helpers_updateMenuGoals_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
}




/***/ }),

/***/ "./src/renderers/modalRenderer.js":
/*!****************************************!*\
  !*** ./src/renderers/modalRenderer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderModal)
/* harmony export */ });
function renderModal(content) {
  document.querySelector(".modal").style.display = "block";
  document.querySelector(".modal-content > p").textContent = `🎉 ${content} 🎉`;
  document.querySelector(".modal-close").addEventListener("click", (e) => {
    document.querySelector(".modal").style.display = "none";
  });
}


/***/ }),

/***/ "./src/renderers/taskRenderer.js":
/*!***************************************!*\
  !*** ./src/renderers/taskRenderer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderAddTaskView": () => (/* binding */ renderAddTaskView),
/* harmony export */   "renderTaskView": () => (/* binding */ renderTaskView)
/* harmony export */ });
/* harmony import */ var _views_taskView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/taskView.js */ "./src/views/taskView.js");
/* harmony import */ var _views_addTaskView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/addTaskView.js */ "./src/views/addTaskView.js");
/* harmony import */ var _helpers_closeBtnHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/closeBtnHelper.js */ "./src/helpers/closeBtnHelper.js");



const appContainer = document.querySelector(".app-container");

const renderTaskView = () => {
  appContainer.innerHTML = "";
  appContainer.innerHTML = _views_taskView_js__WEBPACK_IMPORTED_MODULE_0__.taskView;
  (0,_helpers_closeBtnHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
};

const renderAddTaskView = () => {
  appContainer.innerHTML = "";
  appContainer.innerHTML = _views_addTaskView_js__WEBPACK_IMPORTED_MODULE_1__.addTaskView;
  (0,_helpers_closeBtnHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
};




/***/ }),

/***/ "./src/scripts/goalController.js":
/*!***************************************!*\
  !*** ./src/scripts/goalController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _renderers_goalRenderer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../renderers/goalRenderer.js */ "./src/renderers/goalRenderer.js");
/* harmony import */ var _homeController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeController.js */ "./src/scripts/homeController.js");
/* harmony import */ var _renderers_modalRenderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../renderers/modalRenderer.js */ "./src/renderers/modalRenderer.js");
/* harmony import */ var _constructors_goalConstructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constructors/goalConstructor.js */ "./src/constructors/goalConstructor.js");
/* harmony import */ var _storage_goalStorage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage/goalStorage.js */ "./src/storage/goalStorage.js");
/* harmony import */ var _renderers_menuRenderer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../renderers/menuRenderer.js */ "./src/renderers/menuRenderer.js");
// import "../css/goal.css";







const goalController = {
  // Render goal view
  renderGoalView: _renderers_goalRenderer_js__WEBPACK_IMPORTED_MODULE_0__.renderGoalView,
  // Render add new goal view
  renderAddGoalView: _renderers_goalRenderer_js__WEBPACK_IMPORTED_MODULE_0__.renderAddGoalView,
  // Add new goal function
  addNewGoal() {
    document.querySelector(".add-goal").addEventListener("click", (e) => {
      const goalName = document.querySelector("#goal-name").value;
      const goalDescription = document.querySelector("#goal-description").value;
      const newGoal = new _constructors_goalConstructor_js__WEBPACK_IMPORTED_MODULE_3__["default"](goalName, goalDescription);
      // Add goals to local storage
      localStorage.setItem("goal", JSON.stringify(newGoal));
      _storage_goalStorage_js__WEBPACK_IMPORTED_MODULE_4__["default"].push(newGoal);
      localStorage.setItem("goals", JSON.stringify(_storage_goalStorage_js__WEBPACK_IMPORTED_MODULE_4__["default"]));
      document.querySelector("#goal-name").value = document.querySelector(
        "#goal-description"
      ).value = "";
      // Show modal
      (0,_renderers_modalRenderer_js__WEBPACK_IMPORTED_MODULE_2__["default"])("Goal added successfully!");
      // Render home page
      _homeController_js__WEBPACK_IMPORTED_MODULE_1__["default"].renderHomeView();
      (0,_renderers_menuRenderer_js__WEBPACK_IMPORTED_MODULE_5__.renderMenuGoals)();
    });
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (goalController);


/***/ }),

/***/ "./src/scripts/headerController.js":
/*!*****************************************!*\
  !*** ./src/scripts/headerController.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ headerController)
/* harmony export */ });
/* harmony import */ var _views_headerView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/headerView.js */ "./src/views/headerView.js");
// import "../css/header.css";

// import searchIcon from "../images/search.svg";
// import menuIcon from "../images/menu.svg";
// import gitHubImage from "../images/GitHub.png";

// Render header
const renderHeaderView = () => {
  // Render view skeleton
  const headerContainer = document.querySelector(".header-container");
  headerContainer.innerHTML = _views_headerView_js__WEBPACK_IMPORTED_MODULE_0__.headerView;
  // Add header images
  // document.querySelector(".menu-icon").src = menuIcon;
  // document.querySelector(".search-icon").src = searchIcon;
  // document.querySelector(".gh-icon").src = gitHubImage;
  document.querySelector(".menu-icon").src = "./images/menu.svg";
  document.querySelector(".search-icon").src = "./images/search.svg";
  document.querySelector(".gh-icon").src = "./images/GitHub.png";
};

// Render search bar
const renderSearchBar = () => {
  document.querySelector(".search-icon").addEventListener("click", (e) => {
    document.querySelector(".search-bar").classList.toggle("active");
  });
};

// Use the search bar to find a goal or a task
const useSearchBar = () => {
  document.addEventListener("keypress", (e) => {
    // Store search value
    const input = document.querySelector(".search-bar").value;
    // Submit search by pressing the Enter key
    if (e.key === "Enter") {
      // TO DO - Find search result
      console.log(input);
      // Reset the input field
      document.querySelector(".search-bar").value = "";
    }
  });

  // console.log(document.querySelector(".search-bar").classList);

  // TO DO
};

function headerController() {
  // Render the header view in browser
  renderHeaderView();
  // Show or hide search bar
  renderSearchBar();
  // Use the search bar to find results
  useSearchBar();
}


/***/ }),

/***/ "./src/scripts/homeController.js":
/*!***************************************!*\
  !*** ./src/scripts/homeController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _renderers_homeRenderer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../renderers/homeRenderer.js */ "./src/renderers/homeRenderer.js");
// import "../css/home.css";


const homeController = {
  renderHomeView: _renderers_homeRenderer_js__WEBPACK_IMPORTED_MODULE_0__.renderHomeView,
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeController);


/***/ }),

/***/ "./src/scripts/menuController.js":
/*!***************************************!*\
  !*** ./src/scripts/menuController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuController)
/* harmony export */ });
/* harmony import */ var _goalController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goalController.js */ "./src/scripts/goalController.js");
/* harmony import */ var _taskController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskController.js */ "./src/scripts/taskController.js");
/* harmony import */ var _helpers_updateMenuGoals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/updateMenuGoals.js */ "./src/helpers/updateMenuGoals.js");
/* harmony import */ var _renderers_goalRenderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../renderers/goalRenderer.js */ "./src/renderers/goalRenderer.js");
// import "../css/menu.css";
// import menuView from "../views/menuView.js";





// Show or hide menu
const showOrHideMenu = () => {
  document.querySelector(".menu-icon").addEventListener("click", (e) => {
    document.querySelector(".nav-container").classList.toggle("active");
  });
};
// Buttons event listener
const menuBtnListener = () => {
  document.querySelector(".nav-buttons").addEventListener("click", (e) => {
    const currentButton = e.target.classList[0];
    if (currentButton === "btn-new-goal") {
      _goalController_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderAddGoalView();
      _goalController_js__WEBPACK_IMPORTED_MODULE_0__["default"].addNewGoal();
    }
    if (currentButton === "btn-new-task") _taskController_js__WEBPACK_IMPORTED_MODULE_1__["default"].renderAddTaskView();
  });
};
// Goals event listener
const goalBtnListener = () => {
  document.querySelector(".nav-goals").addEventListener("click", (e) => {
    (0,_renderers_goalRenderer_js__WEBPACK_IMPORTED_MODULE_3__.renderGoalView)();
  });
};

function menuController() {
  (0,_helpers_updateMenuGoals_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  showOrHideMenu();
  menuBtnListener();
  goalBtnListener();
}


/***/ }),

/***/ "./src/scripts/taskController.js":
/*!***************************************!*\
  !*** ./src/scripts/taskController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _renderers_taskRenderer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../renderers/taskRenderer.js */ "./src/renderers/taskRenderer.js");
// import "../css/task.css";


const taskController = {
  renderTaskView: _renderers_taskRenderer_js__WEBPACK_IMPORTED_MODULE_0__.renderTaskView,
  renderAddTaskView: _renderers_taskRenderer_js__WEBPACK_IMPORTED_MODULE_0__.renderAddTaskView,
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskController);


/***/ }),

/***/ "./src/storage/goalStorage.js":
/*!************************************!*\
  !*** ./src/storage/goalStorage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let goalStorage = JSON.parse(localStorage.getItem("goals"));
if (goalStorage == null) goalStorage = [];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (goalStorage);


/***/ }),

/***/ "./src/views/addGoalView.js":
/*!**********************************!*\
  !*** ./src/views/addGoalView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addGoalView": () => (/* binding */ addGoalView)
/* harmony export */ });
const addGoalView = `
<div class="goal-container">
  <button class="close-btn">
    <span class="material-symbols-outlined"> close </span>
  </button>
  <div class="add-new-goal">
    <h1>Add new goal</h1>
    <form class="add-new-goal-form" action="submit">
      <label for="goal-name">📛 Name</label>
      <input type="text" name="goal-name" id="goal-name" required />
      <label for="goal-description">📖 Description</label>
      <input
        type="text"
        name="goal-description"
        id="goal-description"
        required
      />
      </form>
      <button class="add-goal">Add goal</button>
  </div>
</div>
`;


/***/ }),

/***/ "./src/views/addTaskView.js":
/*!**********************************!*\
  !*** ./src/views/addTaskView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTaskView": () => (/* binding */ addTaskView)
/* harmony export */ });
const addTaskView = `
<div class="task-container">
  <button class="close-btn">
    <span class="material-symbols-outlined"> close </span>
  </button>
  <div class="add-new-task">
    <h1>Add new task</h1>
    <form class="add-new-task-form" action="submit">
      <label for="task-name">📛 Name</label>
      <input type="text" name="task-name" id="task-name" required />
      <label for="task-description">📖 Description</label>
      <input
        type="text"
        name="task-description"
        id="task-description"
        required
      />
      <label for="task-due-date">📆 Due date</label>
      <input type="date" name="task-due-date" id="task-due-date" />
      <label for="task-priority">🛎 Priority</label>
      <select name="task-priority" id="task-priority">
        <option value="low">⬇️ Low</option>
        <option value="medium">↕️ Medium</option>
        <option value="high">⬆️ High</option>
        <option value="urgent">❗️Urgent❗️</option>
      </select>
      <label for="parent-goal">🥅 Goal</label>
      <select name="parent-goal" id="parent-goal">
        <option value="lorem">lorem</option>
        <option value="lorem">lorem</option>
        <option value="lorem">lorem</option>
        <option value="lorem">lorem</option>
      </select>
      <label for="task-completed">✔︎ Completed</label>
      <input
        type="checkbox"
        name="task-completed"
        id="task-completed"
      />
      </form>
      <button class="add-task">Add task</button>
  </div>
</div>
`;


/***/ }),

/***/ "./src/views/goalView.js":
/*!*******************************!*\
  !*** ./src/views/goalView.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "goalView": () => (/* binding */ goalView)
/* harmony export */ });
const goalView = `
<div class="view-goal-container">
  <button class="close-btn">
    <span class="material-symbols-outlined"> close </span>
  </button>
  <h1>Current goals</h1>
  <div class="list-goals">
    <h2>🎯 Goal 1</h2>
    <div class="goal-wrapper">
      <h3>🛠 Sub goal 1</h3>
      <h3>🛠 Sub goal 2</h3>
      <h3>🛠 Sub goal 3</h3>
    </div>
    <h2>🎯 Goal 2</h2>
    <div class="goal-wrapper">
      <h3>🛠 Sub goal 1</h3>
      <h3>🛠 Sub goal 2</h3>
      <h3>🛠 Sub goal 3</h3>
    </div>
    <h2>🎯 Goal 3</h2>
    <div class="goal-wrapper">
      <h3>🛠 Sub goal 1</h3>
      <h3>🛠 Sub goal 2</h3>
      <h3>🛠 Sub goal 3</h3>
    </div>
    <h2>🎯 Goal 4</h2>
    <div class="goal-wrapper">
      <h3>🛠 Sub goal 1</h3>
      <h3>🛠 Sub goal 2</h3>
      <h3>🛠 Sub goal 3</h3>
    </div>
  </div>
</div>
`;


/***/ }),

/***/ "./src/views/headerView.js":
/*!*********************************!*\
  !*** ./src/views/headerView.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "headerView": () => (/* binding */ headerView)
/* harmony export */ });
const headerView = `
<div class="header-icons">
  <a href="https://github.com/petromirkolev">
    <img class="gh-icon" alt="GitHub logo"
  /></a>
  <img class="menu-icon" alt="Menu icon" />
  <img class="search-icon" alt="Search icon" />
</div>
<input type="text" class="search-bar" />
`;


/***/ }),

/***/ "./src/views/homeView.js":
/*!*******************************!*\
  !*** ./src/views/homeView.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homeView)
/* harmony export */ });
function homeView(g3, g2, g1) {
  return `<div class="home-container">
    <div class="latest-goals">
      <h1>🥅 Latest goals</h1>
      <h2>🟢 ${g3}</h2>
      <h2>🟡 ${g2}</h2>
      <h2>🔴 ${g1}</h2>
    </div>
    <div class="latest-tasks">
      <h1>📚 Latest tasks</h1>
      <h2>🟢 Test</h2>
      <h2>🟡 Test</h2>
      <h2>🔴 Test</h2>
    </div>
    <div class="priority-tasks">
      <h1>🔝 Top priority tasks</h1>
      <h2>🟢 Test</h2>
      <h2>🟡 Test</h2>
      <h2>🔴 Test</h2>
    </div>
    <div class="deadline-tasks">
      <h1>⏰ Tasks approaching deadline</h1>
      <h2>🟢 Test</h2>
      <h2>🟡 Test</h2>
      <h2>🔴 Test</h2>
    </div>
  </div>
  `;
}


/***/ }),

/***/ "./src/views/taskView.js":
/*!*******************************!*\
  !*** ./src/views/taskView.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskView": () => (/* binding */ taskView)
/* harmony export */ });
const taskView = `
<div class="view-task-container">
  <button class="close-btn">
    <span class="material-symbols-outlined"> close </span>
  </button>
  <h1>📛 Example task</h1>
  <div class="task-info-container">
    <div class="task-description">
      <h3>📖 Description</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
        culpa aliquam quos eveniet repellendus nesciunt, expedita
        consequatur modi nisi repudiandae assumenda sint laboriosam
        laborum cumque. Iste vitae eaque unde numquam.
      </p>
      <button>✏️</button>
    </div>
    <div class="task-due-date">
      <h3>📆 Due date</h3>
      <p>21.12.2021</p>
      <button>✏️</button>
    </div>
    <div class="task-priority">
      <h3>🛎 Priority</h3>
      <p>Urgent</p>
      <button>✏️</button>
    </div>
    <div class="task-parent-goal">
      <h3>🥅 Goal</h3>
      <p>Imaginary goal</p>
      <button>✏️</button>
    </div>
  </div>
</div>
`;


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDakNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNUZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLGVBQWUsR0FBRztBQUNsQixlQUFlLEdBQUc7QUFDbEIsZUFBZSxHQUFHO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1Qk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9jb25zdHJ1Y3RvcnMvZ29hbENvbnN0cnVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9oZWxwZXJzL2Nsb3NlQnRuSGVscGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9oZWxwZXJzL3VwZGF0ZUxhdGVzdEdvYWxzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9oZWxwZXJzL3VwZGF0ZU1lbnVHb2Fscy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3JlbmRlcmVycy9nb2FsUmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3JlbmRlcmVycy9ob21lUmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3JlbmRlcmVycy9tZW51UmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3JlbmRlcmVycy9tb2RhbFJlbmRlcmVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9yZW5kZXJlcnMvdGFza1JlbmRlcmVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zY3JpcHRzL2dvYWxDb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zY3JpcHRzL2hlYWRlckNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3NjcmlwdHMvaG9tZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3NjcmlwdHMvbWVudUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3NjcmlwdHMvdGFza0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N0b3JhZ2UvZ29hbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3ZpZXdzL2FkZEdvYWxWaWV3LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy92aWV3cy9hZGRUYXNrVmlldy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvdmlld3MvZ29hbFZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3ZpZXdzL2hlYWRlclZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3ZpZXdzL2hvbWVWaWV3LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy92aWV3cy90YXNrVmlldy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBHb2FsIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxuICB0eXBlID0gXCJnb2FsXCI7XG4gIGlkID0gRGF0ZS5ub3coKTtcbn1cbiIsImltcG9ydCBob21lQ29udHJvbGxlciBmcm9tIFwiLi4vc2NyaXB0cy9ob21lQ29udHJvbGxlci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbG9zZVZpZXcoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGhvbWVDb250cm9sbGVyLnJlbmRlckhvbWVWaWV3KCk7XG4gIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlTGF0ZXN0R29hbHMoKSB7XG4gIC8vIEltcG9ydCBnb2FscyBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgbGV0IGxhdGVzdEdvYWxzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImdvYWxzXCIpKTtcbiAgLy8gQ2hlY2sgZm9yIGdvYWxzIGFuZCBhc3NpZ24gZXhhbXBsZSB2YWx1ZXMgaWYgZ29hbHMubGVuZ3RoIDwgM1xuICBjb25zdCBkYXRhID0gbGF0ZXN0R29hbHMgPT09IG51bGwgPyBmYWxzZSA6IGxhdGVzdEdvYWxzO1xuICBsZXQgZzMsIGcyLCBnMTtcbiAgaWYgKGRhdGEpIHtcbiAgICBbZzMsIGcyLCBnMV0gPSBbXG4gICAgICBkYXRhW2RhdGEubGVuZ3RoIC0gMV0gPT09IHVuZGVmaW5lZFxuICAgICAgICA/IFwiRXhhbXBsZVwiXG4gICAgICAgIDogZGF0YVtkYXRhLmxlbmd0aCAtIDFdLm5hbWUsXG4gICAgICBkYXRhW2RhdGEubGVuZ3RoIC0gMl0gPT09IHVuZGVmaW5lZFxuICAgICAgICA/IFwiRXhhbXBsZVwiXG4gICAgICAgIDogZGF0YVtkYXRhLmxlbmd0aCAtIDJdLm5hbWUsXG4gICAgICBkYXRhW2RhdGEubGVuZ3RoIC0gM10gPT09IHVuZGVmaW5lZFxuICAgICAgICA/IFwiRXhhbXBsZVwiXG4gICAgICAgIDogZGF0YVtkYXRhLmxlbmd0aCAtIDNdLm5hbWUsXG4gICAgXTtcbiAgfSBlbHNlIHtcbiAgICBnMyA9IGcyID0gZzEgPSBcIldhaXRpbmcgZm9yIGEgZ29hbCDwn5iiXCI7XG4gIH1cbiAgcmV0dXJuIFtnMywgZzIsIGcxXTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZU1lbnVHb2FscygpIHtcbiAgY29uc3QgZ29hbHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1nb2Fsc1wiKTtcbiAgLy8gSW1wb3J0IGdvYWxzIGZyb20gbG9jYWwgc3RvcmFnZVxuICBsZXQgbGF0ZXN0R29hbHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ29hbHNcIikpO1xuICAvLyBJZiBnb2FscywgYWRkIHRoZW0gdG8gbWVudVxuICBjb25zdCBkYXRhID0gbGF0ZXN0R29hbHMgPT09IG51bGwgPyBmYWxzZSA6IGxhdGVzdEdvYWxzO1xuICBpZiAoZGF0YSkge1xuICAgIGxhdGVzdEdvYWxzLmZvckVhY2goKGdvYWwpID0+IHtcbiAgICAgIGdvYWxzQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgXCJiZWZvcmVlbmRcIixcbiAgICAgICAgYFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtaXRlbSAke2dvYWwuaWR9XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+IG1lbnUgPC9zcGFuPlxuICAgICAgICAgIDxoMT4ke2dvYWwubmFtZX08L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIGBcbiAgICAgICk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgZ29hbHNDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgXCJiZWZvcmVlbmRcIixcbiAgICAgIGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi1pdGVtXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPiBtZW51IDwvc3Bhbj5cbiAgICAgICAgPGgxPk5vIGdvYWxzIHlldCDwn5iiPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICApO1xuICB9XG59XG4iLCIvLyBpbXBvcnQgXCIuLi9zcmMvY3NzL3N0eWxlLmNzc1wiO1xuXG5pbXBvcnQgaG9tZUNvbnRyb2xsZXIgZnJvbSBcIi4vc2NyaXB0cy9ob21lQ29udHJvbGxlci5qc1wiO1xuaW1wb3J0IG1lbnVDb250cm9sbGVyIGZyb20gXCIuL3NjcmlwdHMvbWVudUNvbnRyb2xsZXIuanNcIjtcbmltcG9ydCBoZWFkZXJDb250cm9sbGVyIGZyb20gXCIuL3NjcmlwdHMvaGVhZGVyQ29udHJvbGxlci5qc1wiO1xuXG4vLyBJbml0aWF0ZSBhcHBsaWNhdGlvblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICBoZWFkZXJDb250cm9sbGVyKCk7XG4gIG1lbnVDb250cm9sbGVyKCk7XG4gIGhvbWVDb250cm9sbGVyLnJlbmRlckhvbWVWaWV3KCk7XG59KTtcbiIsImltcG9ydCB7IGFkZEdvYWxWaWV3IH0gZnJvbSBcIi4uL3ZpZXdzL2FkZEdvYWxWaWV3LmpzXCI7XG5pbXBvcnQgeyBnb2FsVmlldyB9IGZyb20gXCIuLi92aWV3cy9nb2FsVmlldy5qc1wiO1xuaW1wb3J0IGNsb3NlVmlldyBmcm9tIFwiLi4vaGVscGVycy9jbG9zZUJ0bkhlbHBlci5qc1wiO1xuY29uc3QgYXBwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcHAtY29udGFpbmVyXCIpO1xuXG5jb25zdCByZW5kZXJHb2FsVmlldyA9ICgpID0+IHtcbiAgYXBwQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIGFwcENvbnRhaW5lci5pbm5lckhUTUwgPSBnb2FsVmlldztcbiAgY2xvc2VWaWV3KCk7XG59O1xuXG5jb25zdCByZW5kZXJBZGRHb2FsVmlldyA9ICgpID0+IHtcbiAgYXBwQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIGFwcENvbnRhaW5lci5pbm5lckhUTUwgPSBhZGRHb2FsVmlldztcbiAgY2xvc2VWaWV3KCk7XG59O1xuXG5leHBvcnQgeyByZW5kZXJBZGRHb2FsVmlldywgcmVuZGVyR29hbFZpZXcgfTtcbiIsIi8vIGltcG9ydCBcIi4uL2Nzcy9ob21lLmNzc1wiO1xuaW1wb3J0IGhvbWVWaWV3IGZyb20gXCIuLi92aWV3cy9ob21lVmlldy5qc1wiO1xuaW1wb3J0IHVwZGF0ZUxhdGVzdEdvYWxzIGZyb20gXCIuLi9oZWxwZXJzL3VwZGF0ZUxhdGVzdEdvYWxzLmpzXCI7XG5pbXBvcnQgeyByZW5kZXJHb2FsVmlldyB9IGZyb20gXCIuLi9yZW5kZXJlcnMvZ29hbFJlbmRlcmVyLmpzXCI7XG5cbi8vIFJlbmRlciBob21lIHZpZXdcbmZ1bmN0aW9uIHJlbmRlckhvbWVWaWV3KCkge1xuICBjb25zdCBbZzMsIGcyLCBnMV0gPSBbLi4udXBkYXRlTGF0ZXN0R29hbHMoKV07XG4gIGNvbnN0IGFwcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwLWNvbnRhaW5lclwiKTtcbiAgYXBwQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIGFwcENvbnRhaW5lci5pbm5lckhUTUwgPSBob21lVmlldyhnMywgZzIsIGcxKTtcbiAgLy8gU2hvdyBhbGwgZ29hbHNcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sYXRlc3QtZ29hbHNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgIT09IFwiSDJcIikgcmV0dXJuO1xuICAgIHJlbmRlckdvYWxWaWV3KCk7XG4gIH0pO1xufVxuXG5leHBvcnQgeyByZW5kZXJIb21lVmlldyB9O1xuIiwiLy8gaW1wb3J0IFwiLi4vY3NzL2hvbWUuY3NzXCI7XG5pbXBvcnQgdXBkYXRlTWVudUdvYWxzIGZyb20gXCIuLi9oZWxwZXJzL3VwZGF0ZU1lbnVHb2Fscy5qc1wiO1xuY29uc3QgZ29hbHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1nb2Fsc1wiKTtcblxuLy8gUmVuZGVyIGhvbWUgdmlld1xuZnVuY3Rpb24gcmVuZGVyTWVudUdvYWxzKCkge1xuICBnb2Fsc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICB1cGRhdGVNZW51R29hbHMoKTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyTWVudUdvYWxzIH07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJNb2RhbChjb250ZW50KSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jb250ZW50ID4gcFwiKS50ZXh0Q29udGVudCA9IGDwn46JICR7Y29udGVudH0g8J+OiWA7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtY2xvc2VcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgdGFza1ZpZXcgfSBmcm9tIFwiLi4vdmlld3MvdGFza1ZpZXcuanNcIjtcbmltcG9ydCB7IGFkZFRhc2tWaWV3IH0gZnJvbSBcIi4uL3ZpZXdzL2FkZFRhc2tWaWV3LmpzXCI7XG5pbXBvcnQgY2xvc2VWaWV3IGZyb20gXCIuLi9oZWxwZXJzL2Nsb3NlQnRuSGVscGVyLmpzXCI7XG5jb25zdCBhcHBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFwcC1jb250YWluZXJcIik7XG5cbmNvbnN0IHJlbmRlclRhc2tWaWV3ID0gKCkgPT4ge1xuICBhcHBDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgYXBwQ29udGFpbmVyLmlubmVySFRNTCA9IHRhc2tWaWV3O1xuICBjbG9zZVZpZXcoKTtcbn07XG5cbmNvbnN0IHJlbmRlckFkZFRhc2tWaWV3ID0gKCkgPT4ge1xuICBhcHBDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgYXBwQ29udGFpbmVyLmlubmVySFRNTCA9IGFkZFRhc2tWaWV3O1xuICBjbG9zZVZpZXcoKTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlckFkZFRhc2tWaWV3LCByZW5kZXJUYXNrVmlldyB9O1xuIiwiLy8gaW1wb3J0IFwiLi4vY3NzL2dvYWwuY3NzXCI7XG5pbXBvcnQge1xuICByZW5kZXJHb2FsVmlldyxcbiAgcmVuZGVyQWRkR29hbFZpZXcsXG59IGZyb20gXCIuLi9yZW5kZXJlcnMvZ29hbFJlbmRlcmVyLmpzXCI7XG5pbXBvcnQgaG9tZUNvbnRyb2xsZXIgZnJvbSBcIi4vaG9tZUNvbnRyb2xsZXIuanNcIjtcbmltcG9ydCBtb2RhbFJlbmRlcmVyIGZyb20gXCIuLi9yZW5kZXJlcnMvbW9kYWxSZW5kZXJlci5qc1wiO1xuaW1wb3J0IEdvYWwgZnJvbSBcIi4uL2NvbnN0cnVjdG9ycy9nb2FsQ29uc3RydWN0b3IuanNcIjtcbmltcG9ydCBnb2FsU3RvcmFnZSBmcm9tIFwiLi4vc3RvcmFnZS9nb2FsU3RvcmFnZS5qc1wiO1xuaW1wb3J0IHsgcmVuZGVyTWVudUdvYWxzIH0gZnJvbSBcIi4uL3JlbmRlcmVycy9tZW51UmVuZGVyZXIuanNcIjtcblxuY29uc3QgZ29hbENvbnRyb2xsZXIgPSB7XG4gIC8vIFJlbmRlciBnb2FsIHZpZXdcbiAgcmVuZGVyR29hbFZpZXcsXG4gIC8vIFJlbmRlciBhZGQgbmV3IGdvYWwgdmlld1xuICByZW5kZXJBZGRHb2FsVmlldyxcbiAgLy8gQWRkIG5ldyBnb2FsIGZ1bmN0aW9uXG4gIGFkZE5ld0dvYWwoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtZ29hbFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IGdvYWxOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnb2FsLW5hbWVcIikudmFsdWU7XG4gICAgICBjb25zdCBnb2FsRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dvYWwtZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgICBjb25zdCBuZXdHb2FsID0gbmV3IEdvYWwoZ29hbE5hbWUsIGdvYWxEZXNjcmlwdGlvbik7XG4gICAgICAvLyBBZGQgZ29hbHMgdG8gbG9jYWwgc3RvcmFnZVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJnb2FsXCIsIEpTT04uc3RyaW5naWZ5KG5ld0dvYWwpKTtcbiAgICAgIGdvYWxTdG9yYWdlLnB1c2gobmV3R29hbCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImdvYWxzXCIsIEpTT04uc3RyaW5naWZ5KGdvYWxTdG9yYWdlKSk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dvYWwtbmFtZVwiKS52YWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiI2dvYWwtZGVzY3JpcHRpb25cIlxuICAgICAgKS52YWx1ZSA9IFwiXCI7XG4gICAgICAvLyBTaG93IG1vZGFsXG4gICAgICBtb2RhbFJlbmRlcmVyKFwiR29hbCBhZGRlZCBzdWNjZXNzZnVsbHkhXCIpO1xuICAgICAgLy8gUmVuZGVyIGhvbWUgcGFnZVxuICAgICAgaG9tZUNvbnRyb2xsZXIucmVuZGVySG9tZVZpZXcoKTtcbiAgICAgIHJlbmRlck1lbnVHb2FscygpO1xuICAgIH0pO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ29hbENvbnRyb2xsZXI7XG4iLCIvLyBpbXBvcnQgXCIuLi9jc3MvaGVhZGVyLmNzc1wiO1xuaW1wb3J0IHsgaGVhZGVyVmlldyB9IGZyb20gXCIuLi92aWV3cy9oZWFkZXJWaWV3LmpzXCI7XG4vLyBpbXBvcnQgc2VhcmNoSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL3NlYXJjaC5zdmdcIjtcbi8vIGltcG9ydCBtZW51SWNvbiBmcm9tIFwiLi4vaW1hZ2VzL21lbnUuc3ZnXCI7XG4vLyBpbXBvcnQgZ2l0SHViSW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy9HaXRIdWIucG5nXCI7XG5cbi8vIFJlbmRlciBoZWFkZXJcbmNvbnN0IHJlbmRlckhlYWRlclZpZXcgPSAoKSA9PiB7XG4gIC8vIFJlbmRlciB2aWV3IHNrZWxldG9uXG4gIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLWNvbnRhaW5lclwiKTtcbiAgaGVhZGVyQ29udGFpbmVyLmlubmVySFRNTCA9IGhlYWRlclZpZXc7XG4gIC8vIEFkZCBoZWFkZXIgaW1hZ2VzXG4gIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1pY29uXCIpLnNyYyA9IG1lbnVJY29uO1xuICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1pY29uXCIpLnNyYyA9IHNlYXJjaEljb247XG4gIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2gtaWNvblwiKS5zcmMgPSBnaXRIdWJJbWFnZTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWljb25cIikuc3JjID0gXCIuL2ltYWdlcy9tZW51LnN2Z1wiO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1pY29uXCIpLnNyYyA9IFwiLi9pbWFnZXMvc2VhcmNoLnN2Z1wiO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdoLWljb25cIikuc3JjID0gXCIuL2ltYWdlcy9HaXRIdWIucG5nXCI7XG59O1xuXG4vLyBSZW5kZXIgc2VhcmNoIGJhclxuY29uc3QgcmVuZGVyU2VhcmNoQmFyID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1pY29uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWJhclwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICB9KTtcbn07XG5cbi8vIFVzZSB0aGUgc2VhcmNoIGJhciB0byBmaW5kIGEgZ29hbCBvciBhIHRhc2tcbmNvbnN0IHVzZVNlYXJjaEJhciA9ICgpID0+IHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XG4gICAgLy8gU3RvcmUgc2VhcmNoIHZhbHVlXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1iYXJcIikudmFsdWU7XG4gICAgLy8gU3VibWl0IHNlYXJjaCBieSBwcmVzc2luZyB0aGUgRW50ZXIga2V5XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIC8vIFRPIERPIC0gRmluZCBzZWFyY2ggcmVzdWx0XG4gICAgICBjb25zb2xlLmxvZyhpbnB1dCk7XG4gICAgICAvLyBSZXNldCB0aGUgaW5wdXQgZmllbGRcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWJhclwiKS52YWx1ZSA9IFwiXCI7XG4gICAgfVxuICB9KTtcblxuICAvLyBjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1iYXJcIikuY2xhc3NMaXN0KTtcblxuICAvLyBUTyBET1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhZGVyQ29udHJvbGxlcigpIHtcbiAgLy8gUmVuZGVyIHRoZSBoZWFkZXIgdmlldyBpbiBicm93c2VyXG4gIHJlbmRlckhlYWRlclZpZXcoKTtcbiAgLy8gU2hvdyBvciBoaWRlIHNlYXJjaCBiYXJcbiAgcmVuZGVyU2VhcmNoQmFyKCk7XG4gIC8vIFVzZSB0aGUgc2VhcmNoIGJhciB0byBmaW5kIHJlc3VsdHNcbiAgdXNlU2VhcmNoQmFyKCk7XG59XG4iLCIvLyBpbXBvcnQgXCIuLi9jc3MvaG9tZS5jc3NcIjtcbmltcG9ydCB7IHJlbmRlckhvbWVWaWV3IH0gZnJvbSBcIi4uL3JlbmRlcmVycy9ob21lUmVuZGVyZXIuanNcIjtcblxuY29uc3QgaG9tZUNvbnRyb2xsZXIgPSB7XG4gIHJlbmRlckhvbWVWaWV3LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgaG9tZUNvbnRyb2xsZXI7XG4iLCIvLyBpbXBvcnQgXCIuLi9jc3MvbWVudS5jc3NcIjtcbi8vIGltcG9ydCBtZW51VmlldyBmcm9tIFwiLi4vdmlld3MvbWVudVZpZXcuanNcIjtcbmltcG9ydCBnb2FsQ29udHJvbGxlciBmcm9tIFwiLi9nb2FsQ29udHJvbGxlci5qc1wiO1xuaW1wb3J0IHRhc2tDb250cm9sbGVyIGZyb20gXCIuL3Rhc2tDb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgdXBkYXRlTWVudUdvYWxzIGZyb20gXCIuLi9oZWxwZXJzL3VwZGF0ZU1lbnVHb2Fscy5qc1wiO1xuaW1wb3J0IHsgcmVuZGVyR29hbFZpZXcgfSBmcm9tIFwiLi4vcmVuZGVyZXJzL2dvYWxSZW5kZXJlci5qc1wiO1xuXG4vLyBTaG93IG9yIGhpZGUgbWVudVxuY29uc3Qgc2hvd09ySGlkZU1lbnUgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1pY29uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWNvbnRhaW5lclwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICB9KTtcbn07XG4vLyBCdXR0b25zIGV2ZW50IGxpc3RlbmVyXG5jb25zdCBtZW51QnRuTGlzdGVuZXIgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWJ1dHRvbnNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc3QgY3VycmVudEJ1dHRvbiA9IGUudGFyZ2V0LmNsYXNzTGlzdFswXTtcbiAgICBpZiAoY3VycmVudEJ1dHRvbiA9PT0gXCJidG4tbmV3LWdvYWxcIikge1xuICAgICAgZ29hbENvbnRyb2xsZXIucmVuZGVyQWRkR29hbFZpZXcoKTtcbiAgICAgIGdvYWxDb250cm9sbGVyLmFkZE5ld0dvYWwoKTtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRCdXR0b24gPT09IFwiYnRuLW5ldy10YXNrXCIpIHRhc2tDb250cm9sbGVyLnJlbmRlckFkZFRhc2tWaWV3KCk7XG4gIH0pO1xufTtcbi8vIEdvYWxzIGV2ZW50IGxpc3RlbmVyXG5jb25zdCBnb2FsQnRuTGlzdGVuZXIgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWdvYWxzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHJlbmRlckdvYWxWaWV3KCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudUNvbnRyb2xsZXIoKSB7XG4gIHVwZGF0ZU1lbnVHb2FscygpO1xuICBzaG93T3JIaWRlTWVudSgpO1xuICBtZW51QnRuTGlzdGVuZXIoKTtcbiAgZ29hbEJ0bkxpc3RlbmVyKCk7XG59XG4iLCIvLyBpbXBvcnQgXCIuLi9jc3MvdGFzay5jc3NcIjtcbmltcG9ydCB7XG4gIHJlbmRlclRhc2tWaWV3LFxuICByZW5kZXJBZGRUYXNrVmlldyxcbn0gZnJvbSBcIi4uL3JlbmRlcmVycy90YXNrUmVuZGVyZXIuanNcIjtcblxuY29uc3QgdGFza0NvbnRyb2xsZXIgPSB7XG4gIHJlbmRlclRhc2tWaWV3LFxuICByZW5kZXJBZGRUYXNrVmlldyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRhc2tDb250cm9sbGVyO1xuIiwibGV0IGdvYWxTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImdvYWxzXCIpKTtcbmlmIChnb2FsU3RvcmFnZSA9PSBudWxsKSBnb2FsU3RvcmFnZSA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBnb2FsU3RvcmFnZTtcbiIsImV4cG9ydCBjb25zdCBhZGRHb2FsVmlldyA9IGBcbjxkaXYgY2xhc3M9XCJnb2FsLWNvbnRhaW5lclwiPlxuICA8YnV0dG9uIGNsYXNzPVwiY2xvc2UtYnRuXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+IGNsb3NlIDwvc3Bhbj5cbiAgPC9idXR0b24+XG4gIDxkaXYgY2xhc3M9XCJhZGQtbmV3LWdvYWxcIj5cbiAgICA8aDE+QWRkIG5ldyBnb2FsPC9oMT5cbiAgICA8Zm9ybSBjbGFzcz1cImFkZC1uZXctZ29hbC1mb3JtXCIgYWN0aW9uPVwic3VibWl0XCI+XG4gICAgICA8bGFiZWwgZm9yPVwiZ29hbC1uYW1lXCI+8J+TmyBOYW1lPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJnb2FsLW5hbWVcIiBpZD1cImdvYWwtbmFtZVwiIHJlcXVpcmVkIC8+XG4gICAgICA8bGFiZWwgZm9yPVwiZ29hbC1kZXNjcmlwdGlvblwiPvCfk5YgRGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cImdvYWwtZGVzY3JpcHRpb25cIlxuICAgICAgICBpZD1cImdvYWwtZGVzY3JpcHRpb25cIlxuICAgICAgICByZXF1aXJlZFxuICAgICAgLz5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtZ29hbFwiPkFkZCBnb2FsPC9idXR0b24+XG4gIDwvZGl2PlxuPC9kaXY+XG5gO1xuIiwiZXhwb3J0IGNvbnN0IGFkZFRhc2tWaWV3ID0gYFxuPGRpdiBjbGFzcz1cInRhc2stY29udGFpbmVyXCI+XG4gIDxidXR0b24gY2xhc3M9XCJjbG9zZS1idG5cIj5cbiAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj4gY2xvc2UgPC9zcGFuPlxuICA8L2J1dHRvbj5cbiAgPGRpdiBjbGFzcz1cImFkZC1uZXctdGFza1wiPlxuICAgIDxoMT5BZGQgbmV3IHRhc2s8L2gxPlxuICAgIDxmb3JtIGNsYXNzPVwiYWRkLW5ldy10YXNrLWZvcm1cIiBhY3Rpb249XCJzdWJtaXRcIj5cbiAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLW5hbWVcIj7wn5ObIE5hbWU8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRhc2stbmFtZVwiIGlkPVwidGFzay1uYW1lXCIgcmVxdWlyZWQgLz5cbiAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLWRlc2NyaXB0aW9uXCI+8J+TliBEZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBuYW1lPVwidGFzay1kZXNjcmlwdGlvblwiXG4gICAgICAgIGlkPVwidGFzay1kZXNjcmlwdGlvblwiXG4gICAgICAgIHJlcXVpcmVkXG4gICAgICAvPlxuICAgICAgPGxhYmVsIGZvcj1cInRhc2stZHVlLWRhdGVcIj7wn5OGIER1ZSBkYXRlPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJ0YXNrLWR1ZS1kYXRlXCIgaWQ9XCJ0YXNrLWR1ZS1kYXRlXCIgLz5cbiAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLXByaW9yaXR5XCI+8J+bjiBQcmlvcml0eTwvbGFiZWw+XG4gICAgICA8c2VsZWN0IG5hbWU9XCJ0YXNrLXByaW9yaXR5XCIgaWQ9XCJ0YXNrLXByaW9yaXR5XCI+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3dcIj7irIfvuI8gTG93PC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIj7ihpXvuI8gTWVkaXVtPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCI+4qyG77iPIEhpZ2g8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInVyZ2VudFwiPuKdl++4j1VyZ2VudOKdl++4jzwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG4gICAgICA8bGFiZWwgZm9yPVwicGFyZW50LWdvYWxcIj7wn6WFIEdvYWw8L2xhYmVsPlxuICAgICAgPHNlbGVjdCBuYW1lPVwicGFyZW50LWdvYWxcIiBpZD1cInBhcmVudC1nb2FsXCI+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3JlbVwiPmxvcmVtPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3JlbVwiPmxvcmVtPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3JlbVwiPmxvcmVtPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3JlbVwiPmxvcmVtPC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLWNvbXBsZXRlZFwiPuKclO+4jiBDb21wbGV0ZWQ8L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgIG5hbWU9XCJ0YXNrLWNvbXBsZXRlZFwiXG4gICAgICAgIGlkPVwidGFzay1jb21wbGV0ZWRcIlxuICAgICAgLz5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtdGFza1wiPkFkZCB0YXNrPC9idXR0b24+XG4gIDwvZGl2PlxuPC9kaXY+XG5gO1xuIiwiZXhwb3J0IGNvbnN0IGdvYWxWaWV3ID0gYFxuPGRpdiBjbGFzcz1cInZpZXctZ29hbC1jb250YWluZXJcIj5cbiAgPGJ1dHRvbiBjbGFzcz1cImNsb3NlLWJ0blwiPlxuICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPiBjbG9zZSA8L3NwYW4+XG4gIDwvYnV0dG9uPlxuICA8aDE+Q3VycmVudCBnb2FsczwvaDE+XG4gIDxkaXYgY2xhc3M9XCJsaXN0LWdvYWxzXCI+XG4gICAgPGgyPvCfjq8gR29hbCAxPC9oMj5cbiAgICA8ZGl2IGNsYXNzPVwiZ29hbC13cmFwcGVyXCI+XG4gICAgICA8aDM+8J+boCBTdWIgZ29hbCAxPC9oMz5cbiAgICAgIDxoMz7wn5ugIFN1YiBnb2FsIDI8L2gzPlxuICAgICAgPGgzPvCfm6AgU3ViIGdvYWwgMzwvaDM+XG4gICAgPC9kaXY+XG4gICAgPGgyPvCfjq8gR29hbCAyPC9oMj5cbiAgICA8ZGl2IGNsYXNzPVwiZ29hbC13cmFwcGVyXCI+XG4gICAgICA8aDM+8J+boCBTdWIgZ29hbCAxPC9oMz5cbiAgICAgIDxoMz7wn5ugIFN1YiBnb2FsIDI8L2gzPlxuICAgICAgPGgzPvCfm6AgU3ViIGdvYWwgMzwvaDM+XG4gICAgPC9kaXY+XG4gICAgPGgyPvCfjq8gR29hbCAzPC9oMj5cbiAgICA8ZGl2IGNsYXNzPVwiZ29hbC13cmFwcGVyXCI+XG4gICAgICA8aDM+8J+boCBTdWIgZ29hbCAxPC9oMz5cbiAgICAgIDxoMz7wn5ugIFN1YiBnb2FsIDI8L2gzPlxuICAgICAgPGgzPvCfm6AgU3ViIGdvYWwgMzwvaDM+XG4gICAgPC9kaXY+XG4gICAgPGgyPvCfjq8gR29hbCA0PC9oMj5cbiAgICA8ZGl2IGNsYXNzPVwiZ29hbC13cmFwcGVyXCI+XG4gICAgICA8aDM+8J+boCBTdWIgZ29hbCAxPC9oMz5cbiAgICAgIDxoMz7wn5ugIFN1YiBnb2FsIDI8L2gzPlxuICAgICAgPGgzPvCfm6AgU3ViIGdvYWwgMzwvaDM+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG5gO1xuIiwiZXhwb3J0IGNvbnN0IGhlYWRlclZpZXcgPSBgXG48ZGl2IGNsYXNzPVwiaGVhZGVyLWljb25zXCI+XG4gIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcGV0cm9taXJrb2xldlwiPlxuICAgIDxpbWcgY2xhc3M9XCJnaC1pY29uXCIgYWx0PVwiR2l0SHViIGxvZ29cIlxuICAvPjwvYT5cbiAgPGltZyBjbGFzcz1cIm1lbnUtaWNvblwiIGFsdD1cIk1lbnUgaWNvblwiIC8+XG4gIDxpbWcgY2xhc3M9XCJzZWFyY2gtaWNvblwiIGFsdD1cIlNlYXJjaCBpY29uXCIgLz5cbjwvZGl2PlxuPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJzZWFyY2gtYmFyXCIgLz5cbmA7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lVmlldyhnMywgZzIsIGcxKSB7XG4gIHJldHVybiBgPGRpdiBjbGFzcz1cImhvbWUtY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImxhdGVzdC1nb2Fsc1wiPlxuICAgICAgPGgxPvCfpYUgTGF0ZXN0IGdvYWxzPC9oMT5cbiAgICAgIDxoMj7wn5+iICR7ZzN9PC9oMj5cbiAgICAgIDxoMj7wn5+hICR7ZzJ9PC9oMj5cbiAgICAgIDxoMj7wn5S0ICR7ZzF9PC9oMj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibGF0ZXN0LXRhc2tzXCI+XG4gICAgICA8aDE+8J+TmiBMYXRlc3QgdGFza3M8L2gxPlxuICAgICAgPGgyPvCfn6IgVGVzdDwvaDI+XG4gICAgICA8aDI+8J+foSBUZXN0PC9oMj5cbiAgICAgIDxoMj7wn5S0IFRlc3Q8L2gyPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eS10YXNrc1wiPlxuICAgICAgPGgxPvCflJ0gVG9wIHByaW9yaXR5IHRhc2tzPC9oMT5cbiAgICAgIDxoMj7wn5+iIFRlc3Q8L2gyPlxuICAgICAgPGgyPvCfn6EgVGVzdDwvaDI+XG4gICAgICA8aDI+8J+UtCBUZXN0PC9oMj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZGVhZGxpbmUtdGFza3NcIj5cbiAgICAgIDxoMT7ij7AgVGFza3MgYXBwcm9hY2hpbmcgZGVhZGxpbmU8L2gxPlxuICAgICAgPGgyPvCfn6IgVGVzdDwvaDI+XG4gICAgICA8aDI+8J+foSBUZXN0PC9oMj5cbiAgICAgIDxoMj7wn5S0IFRlc3Q8L2gyPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgYDtcbn1cbiIsImV4cG9ydCBjb25zdCB0YXNrVmlldyA9IGBcbjxkaXYgY2xhc3M9XCJ2aWV3LXRhc2stY29udGFpbmVyXCI+XG4gIDxidXR0b24gY2xhc3M9XCJjbG9zZS1idG5cIj5cbiAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj4gY2xvc2UgPC9zcGFuPlxuICA8L2J1dHRvbj5cbiAgPGgxPvCfk5sgRXhhbXBsZSB0YXNrPC9oMT5cbiAgPGRpdiBjbGFzcz1cInRhc2staW5mby1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwidGFzay1kZXNjcmlwdGlvblwiPlxuICAgICAgPGgzPvCfk5YgRGVzY3JpcHRpb248L2gzPlxuICAgICAgPHA+XG4gICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIElwc2FcbiAgICAgICAgY3VscGEgYWxpcXVhbSBxdW9zIGV2ZW5pZXQgcmVwZWxsZW5kdXMgbmVzY2l1bnQsIGV4cGVkaXRhXG4gICAgICAgIGNvbnNlcXVhdHVyIG1vZGkgbmlzaSByZXB1ZGlhbmRhZSBhc3N1bWVuZGEgc2ludCBsYWJvcmlvc2FtXG4gICAgICAgIGxhYm9ydW0gY3VtcXVlLiBJc3RlIHZpdGFlIGVhcXVlIHVuZGUgbnVtcXVhbS5cbiAgICAgIDwvcD5cbiAgICAgIDxidXR0b24+4pyP77iPPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRhc2stZHVlLWRhdGVcIj5cbiAgICAgIDxoMz7wn5OGIER1ZSBkYXRlPC9oMz5cbiAgICAgIDxwPjIxLjEyLjIwMjE8L3A+XG4gICAgICA8YnV0dG9uPuKcj++4jzwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrLXByaW9yaXR5XCI+XG4gICAgICA8aDM+8J+bjiBQcmlvcml0eTwvaDM+XG4gICAgICA8cD5VcmdlbnQ8L3A+XG4gICAgICA8YnV0dG9uPuKcj++4jzwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrLXBhcmVudC1nb2FsXCI+XG4gICAgICA8aDM+8J+lhSBHb2FsPC9oMz5cbiAgICAgIDxwPkltYWdpbmFyeSBnb2FsPC9wPlxuICAgICAgPGJ1dHRvbj7inI/vuI88L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbmA7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=