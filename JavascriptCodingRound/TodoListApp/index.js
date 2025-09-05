const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add Task
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  // Create list item
  const li = document.createElement("li");

  // Task text
  const span = document.createElement("span");
  span.textContent = taskText;
  span.addEventListener("click", () => {
    span.classList.toggle("completed"); // toggle completed style
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("delete");
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
});
