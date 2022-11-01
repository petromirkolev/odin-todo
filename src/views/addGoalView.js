export const addGoalView = `
<div class="goal-container">
  <button class="close-goal-btn">
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
      <button class="add-goal">Add goal</button>
    </form>
  </div>
</div>
`;
