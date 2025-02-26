
document.addEventListener("DOMContentLoaded", () => {
    const expenseForm = document.getElementById("taskForm");
    const taskTableBody = document.getElementById("taskTableBody");
    const filter = document.getElementById("status");

  
    const clearTask = document.getElementById("Clear Task");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function updateTable(tasksToShow) {
        taskTableBody.innerHTML = "";
        tasksToShow.forEach((task, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${task.newTask}</td>
                <td>${expense.Description}</td>
                <td>${expense.Date}</td>
                <td>${expense.Actions}</td>
                <td>
                    <button onclick="clearTask(${index})"></button>
                    <button onclick="deleteExpense(${index})">Delete</button>
                </td>
            `;
            taskTableBody.appendChild(row);
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    taskForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const newTask = document.getElementById("newTask").value;
        const description = document.getElementById("Description").value;
       
        const date = document.getElementById("date").value;

        if (!newTask || !description  || !date) return alert("Fill all fields!");
        

        tasks.push({newTask, description, date });
        updateTable(tasks);
        taskForm.clear();
    });


    window.editTasks = function(index) {
        const task = tasks[index];
        document.getElementById("newTask").value = expense.description;
        document.getElementById("Description").value = expense.amount;
       document.getElementById("date").value = expense.date;

        tasks.splice(index, 1);
        updateTable(tasks);
    };

    applyFilters.addEventListener("click", function() {
        let filteredExpenses = expenses.filter(expense => 
            (!filterCategory.value || expense.category === filterCategory.value) &&
            (!startDate.value || new Date(expense.date) >= new Date(startDate.value)) &&
            (!endDate.value || new Date(expense.date) <= new Date(endDate.value))
        );
        updateTable(filteredExpenses);
    });

    resetFilters.addEventListener("click", function() {
        updateTable(tasks);
    });

    document.getElementById("date").max = new Date().toISOString().split("T")[0];
    updateTable(expenses);
});