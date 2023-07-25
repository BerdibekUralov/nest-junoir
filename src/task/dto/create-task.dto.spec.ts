import { plainToInstance } from "class-transformer";
import { createTaskDto } from "./create-task.dto";
import { validate } from "class-validator";
import { Status } from "../task.interface";

describe('create-task.dto', () => {
  let dto;
  beforeAll(() => {
    dto = {
      task: '',
      tags: [],
      status: '',
    }
  });

  // task dto
  it('task пустая', async () => {
    const ofImportDto = plainToInstance(createTaskDto, dto);
    const errors = await validate(ofImportDto);
    expect(errors.map(err => err.property).includes('task')).toBeTruthy();
  });
  it('task не пустая', async () => {
    dto.task = 'какая-то таска';
    const ofImportDto = plainToInstance(createTaskDto, dto);
    const errors = await validate(ofImportDto);
    expect(errors.map(err => err.property).includes('task')).toBeFalsy();
  });

  // tags dto
  it('tags пустой', async () => {
    const ofImportDto = plainToInstance(createTaskDto, dto);
    const errors = await validate(ofImportDto);
    expect(errors.map(err => err.property).includes('tags')).toBeTruthy();
    expect(dto.tags.length).toBe(0);
  });
  it('Выдаст ошыбку если не все елементы tags является строкой', async () => {
    dto.tags = ['какая-то таска', 1];
    const ofImportDto = plainToInstance(createTaskDto, dto);
    const errors = await validate(ofImportDto);
    expect(errors.map(err => err.property).includes('tags')).toBeTruthy();
    expect(dto.tags.length).not.toBe(0);
    expect(dto.tags.every((el) => typeof el === 'string')).not.toBeTruthy();
  });
  it('Каждый елемент tags является строкой и массив не пустой', async () => {
    dto.tags = ['какая-то таска', '1'];
    const ofImportDto = plainToInstance(createTaskDto, dto);
    const errors = await validate(ofImportDto);
    expect(errors.map(err => err.property).includes('tags')).toBeFalsy();
  });

  // status dto
  it('Тип статуса не является значением enum Status', async () => {
    dto.status = 'status'
    const ofImportDto = plainToInstance(createTaskDto, dto);
    const errors = await validate(ofImportDto);
    expect(errors.map(err => err.property).includes('status')).toBeTruthy();
  });
  it('Тип статуса является значением enum Status', async () => {
    dto.status = Status.ERROR
    const ofImportDto = plainToInstance(createTaskDto, dto);
    const errors = await validate(ofImportDto);
    expect(errors.map(err => err.property).includes('status')).toBeFalsy();
    expect(dto.status).toBe(Status.ERROR)
  });
})