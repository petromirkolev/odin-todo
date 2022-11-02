let taskStorage = JSON.parse(localStorage.getItem("tasks"));
if (taskStorage == null) taskStorage = [];

export default taskStorage;
