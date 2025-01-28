let tasks = [
    { name: "Complete homework", priority: "high" },
    { name: "Go for a run", priority: "low" }
  ];
  
  function setPriority(taskName, priorityLevel) {
    const task = tasks.find(t => t.name === taskName);
    if (task) {
      task.priority = priorityLevel;
    }
  }
  
  // Example of setting priority
  setPriority("Complete homework", "high");
  
  console.log(tasks);  // To see the updated tasks
  