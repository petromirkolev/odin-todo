// export default function homeBtnListener(container, data, eventListener) {
//   container.addEventListener("click", (e) => {
//     if (e.target.tagName !== "H2" || e.target.textContent === "Empty") return;
//     const clickTarget = data.filter(
//       (goal) => goal.name === e.target.textContent
//     );
//     const id = clickTarget[0].id;
//     eventListener !== undefined ? eventListener(id) : null;
//   });
// }
