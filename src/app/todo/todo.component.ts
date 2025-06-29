import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/models/todo.model';
import { TodoService } from '../shared/services/todo.service';
import { Filter } from 'bad-words'; 
import jsPDF from 'jspdf';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  showCompletedTasks: boolean = true;
  taskBeingEdited: Todo | null = null;
  editMode: boolean = false;
  newTaskTitle: string = '';

  constructor(private todoService: TodoService) { }

  startEdit(todo: Todo) {
  this.editMode = true;
  this.taskBeingEdited = todo;
  this.newTaskTitle = todo.title; 
}
exportToPDF() {
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text('Lista de Tarefas', 10, 10);

  let y = 20; 

  this.todos.forEach((todo, index) => {
    const status = todo.completed ? '[X]' : '[ ]';
    doc.text(`${status} ${todo.title}`, 10, y);
    y += 10;

    
    if (y > 280) {
      doc.addPage();
      y = 10;
    }
  });

  doc.save('lista_de_tarefas.pdf');
}


  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }
  sortTodosByTitle() {
  this.todos.sort((a, b) => a.title.localeCompare(b.title));
}

 addTodo(title: string) {
  const filter = new Filter();

  const titles = title
    .split('|')
    .map(t => t.trim())
    .filter(t => t.length > 0);

  const hasProfanity = titles.some(t => filter.isProfane(t));
  if (hasProfanity) {
    alert("Não é permitido cadastrar tarefas com palavras obscenas.");
    return;
  }

  if (this.editMode && this.taskBeingEdited) {
    const updatedTodo: Todo = {
      ...this.taskBeingEdited,
      title: titles[0]
    };
    this.todoService.updateTodo(updatedTodo);
    this.editMode = false;
    this.taskBeingEdited = null;

    for (let i = 1; i < titles.length; i++) {
      const newTodo: Todo = {
        id: Date.now() + i,
        title: titles[i],
        completed: false
      };
      this.todoService.addTodo(newTodo);
    }
  } else {
    titles.forEach((t, index) => {
      const newTodo: Todo = {
        id: Date.now() + index,
        title: t,
        completed: false
      };
      this.todoService.addTodo(newTodo);
    });
  }

  this.newTaskTitle = '';
  this.loadTodos();
}


  updateTodo(updatedTodo: Todo) {
    this.todoService.updateTodo(updatedTodo);
  }

  deleteTodo(todoId: number) {
    this.todoService.deleteTodo(todoId);
  }

  clearAll() {
  if (this.todos.length === 0) return;

  Swal.fire({
    title: 'Tem certeza?',
    text: 'Você realmente deseja limpar todas as tarefas?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sim, limpar tudo!',
    cancelButtonText: 'Cancelar',
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6'
  }).then((result) => {
    if (result.isConfirmed) {
      this.todoService.clearAll();
      this.loadTodos();
      Swal.fire('Tudo limpo!', 'Todas as tarefas foram removidas.', 'success');
    }
  });
}

  clearCompletedTasks() {
  Swal.fire({
    title: 'Tem certeza?',
    text: 'Você deseja limpar apenas as tarefas concluídas?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sim, limpar concluídas!',
    cancelButtonText: 'Cancelar',
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6'
  }).then((result) => {
    if (result.isConfirmed) {
      this.todoService.clearCompletedTasks();
      this.loadTodos();
      Swal.fire('Concluídas limpas!', 'As tarefas concluídas foram removidas.', 'success');
    }
  });
}

  toggleCompletedTasks() {
    this.showCompletedTasks = !this.showCompletedTasks;
    this.loadTodos();
    this.todos = this.filteredTodos();
  }

  filteredTodos() {
    return this.showCompletedTasks ? this.todos : this.todos.filter(todo => !todo.completed);
  }

  get labelClearAll(){
    return 'Clear All'
  }
}
