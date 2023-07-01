import { Injectable } from "@nestjs/common";
import { ITask } from "./task.interface";

@Injectable()
export class TaskService {
  private tasks: ITask[] = [
    {id: 1, tasks: 'task 1'},
    {id: 2, tasks: 'task 2'},
  ]

  getTasks(): ITask[] {
    return this.tasks;
  }
  
  getTasksById(id: string):ITask {
    const task =  this.tasks.find((t) => t.id === +id)
    return task;
  }

  
  createTask(task: ITask): ITask {
    this.tasks.push(task)
    return task;
  }
}
 