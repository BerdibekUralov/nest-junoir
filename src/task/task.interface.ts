export enum Status {
  CREATED = "created",
  PROCESSING = "processing",
  ABORTED = "aborted",
  ERROR = "error",
  DONE = "done"
}

export interface ITask {
  id: number;
  tasks: string;
  status: Status;
  tags: string[];
  createdAt: Date;
  updatedAt: Date; 
}