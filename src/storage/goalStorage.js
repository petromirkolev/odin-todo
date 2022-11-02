let goalStorage = JSON.parse(localStorage.getItem("goals"));
if (goalStorage == null) goalStorage = [];

export default goalStorage;
