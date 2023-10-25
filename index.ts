// Definindo a classe Task para representar tarefas
class Task {
    constructor(public id: number, public description: string, public completed: boolean) {}
  }
  
  // Criando uma lista de tarefas
  const tasks: Task[] = [];
  
  // Função para adicionar uma nova tarefa
  function addTask(description: string) {
    const task = new Task(tasks.length + 1, description, false);
    tasks.push(task);
  }
  
  // Função para marcar uma tarefa como concluída
  function completeTask(id: number) {
    const task = tasks.find(task => task.id === id);
    if (task) {
      task.completed = true;
    }
  }
  
  // Função para listar todas as tarefas
  function listTasks() {
    console.log("Lista de Tarefas:");
    tasks.forEach(task => {
      const status = task.completed ? "Concluída" : "Pendente";
      console.log(`ID: ${task.id}, Descrição: ${task.description}, Status: ${status}`);
    });
  }
  
  // Exemplo de uso
  addTask("Fazer compras");
  addTask("Estudar TypeScript");
  completeTask(1);
  listTasks();
  