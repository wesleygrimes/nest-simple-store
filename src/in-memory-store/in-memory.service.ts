import { Injectable } from '@nestjs/common';

export interface InMemoryEntity {
  id?: number;
}

@Injectable()
export class InMemoryService<T extends InMemoryEntity> {
  private records: T[] = [];

  constructor() {}

  get(id: number): T {
    return this.records.find(r => r.id === id);
  }

  getAll(): T[] {
    return this.records;
  }

  query() {}

  queryByKeyValue() {}

  create(record: T): T {
    const id = record.id || this.getNextId();
    const newRecord = { ...record, id };
    this.records.push(newRecord);
    return newRecord;
  }

  update(model: T) {}

  private getNextId(): number {
    if (this.records && this.records.length > 0) {
      return Math.max(...this.records.map(r => r.id)) + 1;
    }

    return 1;
  }

  // delete(id: number) {}
}
