const addTaskView = `
<div class="task-container">
  <button class="close-btn">
    <span class="material-symbols-outlined"> close </span>
  </button>
  <div class="add-new-task">
    <h1>Add new task</h1>
    <form class="add-new-task-form" action="submit">
      <label for="task-name">π Name</label>
      <input type="text" name="task-name" id="task-name" required />
      <label for="task-description">π Description</label>
      <input
        type="text"
        name="task-description"
        id="task-description"
        required
      />
      <label for="task-due-date">π Due date</label>
      <input type="date" name="task-due-date" id="task-due-date" />
      <label for="task-priority">π Priority</label>
      <select name="task-priority" id="task-priority">
        <option value="1">β¬οΈ Low</option>
        <option value="2">βοΈ Medium</option>
        <option value="3">β¬οΈ High</option>
        <option value="4">βοΈUrgent</option>
      </select>
      <label for="parent-goal">π₯ Goal</label>
      <select name="parent-goal" id="parent-goal">
      </select>
      </form>
      <button class="add-task">Add task</button>
  </div>
</div>
`;

export default addTaskView;
