export default class Goal {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
  type = "goal";
  id = Date.now();
}
