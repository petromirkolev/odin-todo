export default class Task {
  constructor(name, description, dueDate, priority, goal) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.goal = goal;
  }
  type = "task";
  isCompleted = false;
}
