import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  private _newTaskTitle: string = '';

  @Input()
  set newTaskTitle(value: string) {
    this._newTaskTitle = value;
  }

  get newTaskTitle(): string {
    return this._newTaskTitle;
  }

  @Input() editMode: boolean = false;

  @Output() taskCreated = new EventEmitter<string>();
  @Output() newTaskTitleChange = new EventEmitter<string>();

  onInputChange(value: string) {
    this._newTaskTitle = value;
    this.newTaskTitleChange.emit(this._newTaskTitle);
  }

  addTask() {
    const title = this.newTaskTitle.trim();
    if (title) {
      this.taskCreated.emit(title);
      this.newTaskTitle = ''; 
      this.newTaskTitleChange.emit(this.newTaskTitle); // para atualizar o input via two-way binding
    }
  }
}
