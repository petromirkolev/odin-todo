export default function updateHelper(
  localStorageData,
  kind,
  type,
  eventListener
) {
  const data = localStorageData === null ? false : localStorageData;
  let item3, item2, item1;
  if (data) {
    [item3, item2, item1] = [
      data[data.length - 1] === undefined
        ? "Empty"
        : data[data.length - 1].name,
      data[data.length - 2] === undefined
        ? "Empty"
        : data[data.length - 2].name,
      data[data.length - 3] === undefined
        ? "Empty"
        : data[data.length - 3].name,
    ];
  } else {
    item3 = item2 = item1 = `Waiting for ${type} 😢`;
  }
  // Add latest tasks to home view
  const container = document.querySelector(`.${kind}-${type}`);
  container.insertAdjacentHTML(
    "beforeend",
    `
  <h2>${item3}</h2>
  <h2>${item2}</h2>
  <h2>${item1}</h2>
  `
  );
  container.addEventListener("click", (e) => {
    if (e.target.tagName !== "H2" || e.target.textContent === "Empty") return;
    const goalClicked = data.filter(
      (goal) => goal.name === e.target.textContent
    );
    const id = goalClicked[0].id;
    eventListener(id);
  });
}
