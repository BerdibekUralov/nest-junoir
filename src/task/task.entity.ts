import { ITask, Status } from "./task.interface";

export class Task implements ITask {
  id = new Date().getTime();
  tasks: string;
  status: Status = Status.CREATED;
  tags: string[] = [];
  createdAt: Date = new Date();
  updatedAt: Date = new Date();

  constructor (task: string, tags?: string[], status?: Status) {
    this.tasks = task;
    this.tags = tags;
    this.status = status;
  }
}