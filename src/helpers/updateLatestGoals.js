export default function updateLatestGoals() {
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
