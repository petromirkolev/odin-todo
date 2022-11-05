export default function renderModal(content) {
  document.querySelector(".modal").style.display = "block";
  document.querySelector(".modal-content > p").textContent = `${content}`;
  document.querySelector(".modal-close").addEventListener("click", (e) => {
    document.querySelector(".modal").style.display = "none";
  });
}
