import { TodoItem } from "./todoItem";

export class TodoList {
  
  constructor(public user: string, private todoItems: TodoItem[] = []) {}

  get items(): readonly TodoItem[]{
    return this.todoItems;
  }

  // Outro teste

  addItem(task: string) {
    this.todoItems.push(new TodoItem(task))
  }
}