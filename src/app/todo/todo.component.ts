import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/models/todo.model';
import { TodoService } from '../shared/services/todo.service';

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

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

 addTodo(title: string) {
  if (this.editMode && this.taskBeingEdited) {
    const updatedTodo: Todo = {
      ...this.taskBeingEdited,
      title: title.trim()
    };
    this.todoService.updateTodo(updatedTodo);
    this.editMode = false;
    this.taskBeingEdited = null;
  } else {
    const newTodo: Todo = {
      id: Date.now(),
      title: title.trim(),
      completed: false
    };
    this.todoService.addTodo(newTodo);
  }

  this.newTaskTitle = '';  // limpa o input depois de salvar
  this.loadTodos();
}

  updateTodo(updatedTodo: Todo) {
    this.todoService.updateTodo(updatedTodo);
  }

  deleteTodo(todoId: number) {
    this.todoService.deleteTodo(todoId);
  }

  clearAll() {
    if (this.todos.length > 0 && confirm('Are you sure you want to clear all tasks?')) {
      this.todoService.clearAll();
      this.loadTodos();
    }
  }

  clearCompletedTasks() {
    if(confirm('Você quer mesmo limpar as tarefas concluídas?')){
    this.todoService.clearCompletedTasks();
    this.loadTodos();
    }
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
