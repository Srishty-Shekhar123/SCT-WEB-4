function addTask() {
  const taskInput = document.getElementById("taskInput");
  const datetimeInput = document.getElementById("datetime");
  const taskText = taskInput.value.trim();
  const taskTime = datetimeInput.value;

  if (!taskText || !taskTime) {
    alert("Please enter both task and date/time.");
    return;
  }

  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");

  const formattedTime = new Date(taskTime).toLocaleString();

  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <small style="display:block;">🕒 ${formattedTime}</small>
    <div class="actions">
      <button onclick="markComplete(this)">✔</button>
      <button onclick="editTask(this)">✏</button>
      <button onclick="deleteTask(this)">❌</button>
    </div>
  `;

  taskList.appendChild(li);
  taskInput.value = "";
  datetimeInput.value = "";
}

function markComplete(button) {
  const li = button.closest("li");
  li.classList.toggle("completed");
}

function editTask(button) {
  const li = button.closest("li");
  const text = li.querySelector(".task-text").textContent;
  const newText = prompt("Edit your task:", text);
  if (newText !== null) {
    li.querySelector(".task-text").textContent = newText;
  }
}

function deleteTask(button) {
  const li = button.closest("li");
  li.remove();
}
