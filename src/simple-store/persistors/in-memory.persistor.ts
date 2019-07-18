import { Injectable } from '@nestjs/common';
import { SimpleStoreEntity, SimpleStorePersistor } from '../models';

@Injectable()
export class InMemoryPersistor<T extends SimpleStoreEntity>
  implements SimpleStorePersistor<T> {
  private records: T[] = [];

  create(record: T): T {
    const id = record.id || this.getNextId();
    const newRecord = { ...record, id };
    this.records.push(newRecord);
    return newRecord;
  }

  update(record: T) {
    const foundRecordIndex = this.records.findIndex(r => r.id === record.id);
    delete this.records[foundRecordIndex];
    this.records.push(record);
    return record;
  }

  delete(id: number) {
    const foundRecordIndex = this.records.findIndex(r => r.id === id);
    delete this.records[foundRecordIndex];
  }

  get(id: number): T {
    return this.records.find(r => r.id === id);
  }

  getAll(): T[] {
    return this.records;
  }

  query() {
    return [];
  }

  private getNextId(): number {
    if (this.records && this.records.length > 0) {
      return Math.max(...this.records.map(r => r.id)) + 1;
    }

    return 1;
  }
}
