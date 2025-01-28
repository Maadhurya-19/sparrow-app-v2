// Sample tasks data
let tasks = [
    { name: "Complete homework", priority: "high" },
    { name: "Go for a run", priority: "low" }
  ];
  
  // Function to display tasks
  function displayTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ''; // Clear the existing list
  
    tasks.forEach(task => {
      const listItem = document.createElement('li');
      listItem.textContent = `${task.name} - Priority: ${task.priority}`;
      taskList.appendChild(listItem);
    });
  }
  
  // Add a new task
  document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
    const taskName = document.getElementById('task-name').value;
    const taskPriority = document.getElementById('task-priority').value;
  
    if (taskName && taskPriority) {
      tasks.push({ name: taskName, priority: taskPriority });
      displayTasks(); // Update the task list
    }
    // Clear the input fields
    document.getElementById('task-name').value = '';
    document.getElementById('task-priority').value = 'low';
  });
  
  // Initial display of tasks
  displayTasks();
  