document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");
  const input = document.querySelector("input[name='new-task-description']");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskText = input.value.trim();
    if (!taskText) return;
    buildToDo(taskText);
    input.value = "";
  });

  function buildToDo(task) {
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
  }

  module.exports = { buildToDo }; // allows tests to run
});