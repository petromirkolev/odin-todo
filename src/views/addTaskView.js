export const addTaskView = `
<div class="task-container">
  <button class="close-task-btn">
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
      <button class="add-task">Add task</button>
    </form>
  </div>
</div>
`;
