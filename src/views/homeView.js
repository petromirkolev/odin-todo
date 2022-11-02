export default function homeView(g3, g2, g1) {
  return `<div class="home-container">
    <div class="latest-goals">
      <h1>🥅 Latest goals</h1>
      <h2>🟢 ${g3}</h2>
      <h2>🟡 ${g2}</h2>
      <h2>🔴 ${g1}</h2>
    </div>
    <div class="latest-tasks">
      <h1>📚 Latest tasks</h1>
      <h2>🟢 Test</h2>
      <h2>🟡 Test</h2>
      <h2>🔴 Test</h2>
    </div>
    <div class="priority-tasks">
      <h1>🔝 Top priority tasks</h1>
      <h2>🟢 Test</h2>
      <h2>🟡 Test</h2>
      <h2>🔴 Test</h2>
    </div>
    <div class="deadline-tasks">
      <h1>⏰ Tasks approaching deadline</h1>
      <h2>🟢 Test</h2>
      <h2>🟡 Test</h2>
      <h2>🔴 Test</h2>
    </div>
  </div>
  `;
}
