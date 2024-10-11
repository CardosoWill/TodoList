// Função para escapar caracteres especiais
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Adicionar nova tarefa
document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value;
    if (taskText) {
        fetch('http://localhost:3000/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ task: taskText })
        })
        .then(response => response.json())
        .then(data => {
            addTaskToList(data);
            taskInput.value = '';
        });
    }
});

// Função para adicionar tarefa à lista na UI
function addTaskToList(task) {
    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    li.textContent = escapeHtml(task.task);  // Use a função de escape aqui

    // Botão para marcar como concluído
    const completeBtn = document.createElement('button');
    completeBtn.textContent = task.completed ? 'Desmarcar' : 'Concluir';
    completeBtn.addEventListener('click', function() {
        fetch(`http://localhost:3000/tasks/${task.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ completed: !task.completed })
        })
        .then(response => response.json())
        .then(updatedTask => {
            task.completed = updatedTask.completed;
            completeBtn.textContent = task.completed ? 'Desmarcar' : 'Concluir';
        });
    });
    
    // Botão para remover tarefa
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remover';
    removeBtn.addEventListener('click', function() {
        fetch(`http://localhost:3000/tasks/${task.id}`, {
            method: 'DELETE'
        })
        .then(() => {
            taskList.removeChild(li);
        });
    });
    
    li.appendChild(completeBtn);
    li.appendChild(removeBtn);
    taskList.appendChild(li);
}

// Carregar tarefas ao iniciar
fetch('http://localhost:3000/tasks')
    .then(response => response.json())
    .then(tasks => {
        tasks.forEach(addTaskToList);
    });
