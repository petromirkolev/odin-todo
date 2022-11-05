const editGoalView = `
<div class="edit-goal-container">
  <button class="close-btn">
    <span class="material-symbols-outlined"> close </span>
  </button>
  <div class="edit-current-goal">
    <h1>Edit goal</h1>
    <form class="edit-goal-form" action="submit">
      <label for="edit-goal-name">📛 Name</label>
      <input
        type="text"
        name="edit-goal-name"
        id="edit-goal-name"
        required
      />
      <label for="goal-description">📖 Description</label>
      <input
        type="text"
        name="edit-goal-description"
        id="edit-goal-description"
        required
      />
    </form>
    <button type="submit" class="edit-goal">Edit goal</button>
  </div>
</div>
`;

export default editGoalView;
