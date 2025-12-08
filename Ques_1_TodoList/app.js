// Load tasks from localStorage OR empty array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Save into localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Render tasks to screen
function renderTasks(filter = "all") {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        if (filter === "completed" && !task.completed) return;
        if (filter === "pending" && task.completed) return;

        let li = document.createElement("li");
        li.dataset.index = index; // for event delegation

        li.innerHTML = `
            <span class="task-text ${task.completed ? "completed" : ""}">
                ${task.title}
            </span>

            <div>
                <button class="editBtn">✏️</button>
                <button class="deleteBtn">❌</button>
                <button class="completeBtn">✔️</button>
            </div>
        `;

        list.appendChild(li);
    });
}

// Add a task
document.getElementById("addBtn").addEventListener("click", function () {
    let input = document.getElementById("taskInput");
    let text = input.value.trim();

    if (text === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push({ title: text, completed: false }); // CREATE
    saveTasks();
    renderTasks();

    input.value = "";
});

// Event Delegation (Edit / Delete / Complete)
document.getElementById("taskList").addEventListener("click", function (e) {
    let li = e.target.closest("li");
    let index = li.dataset.index;

    // Delete
    if (e.target.classList.contains("deleteBtn")) {
        tasks.splice(index, 1); // DELETE
        saveTasks();
        renderTasks();
    }

    // Toggle Complete
    if (e.target.classList.contains("completeBtn")) {
        tasks[index].completed = !tasks[index].completed; // UPDATE
        saveTasks();
        renderTasks();
    }

    // Edit Task
    if (e.target.classList.contains("editBtn")) {
        let currentText = tasks[index].title;

        let newInput = prompt("Edit task:", currentText);

        if (newInput !== null && newInput.trim() !== "") {
            tasks[index].title = newInput.trim(); // UPDATE
            saveTasks();
            renderTasks();
        }
    }
});

// Filter Buttons
document.querySelectorAll(".filters button").forEach(btn => {
    btn.addEventListener("click", function () {
        document.querySelectorAll(".filters button").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        let filterType = btn.dataset.filter;
        renderTasks(filterType);
    });
});

// Display tasks at start
renderTasks();
