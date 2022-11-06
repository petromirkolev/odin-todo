const editTaskView = `
<div class="edit-task-container">
  <button class="close-btn">
    <span class="material-symbols-outlined"> close </span>
  </button>
  <div class="edit-new-task">
    <h1>Edit task</h1>
    <form class="edit-task-form" action="submit">
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
        <option value="1">⬇️ Low</option>
        <option value="2">↕️ Medium</option>
        <option value="3">⬆️ High</option>
        <option value="4">❗️Urgent❗️</option>
      </select>
      <label for="parent-goal">🥅 Goal</label>
      <select name="parent-goal" id="parent-goal">
      </select>
      </form>
      <button class="edit-task">Edit task</button>
  </div>
</div>
`;

export default editTaskView;