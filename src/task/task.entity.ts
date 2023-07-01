import { ITask } from "./task.interface";

export class Task implements ITask {
  id: number;
  tasks: string;
  constructor (task: string) {
    this.tasks = task;
    this.id = new Date().getTime();
  }
}