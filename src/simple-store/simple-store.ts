import { Inject, Injectable } from '@nestjs/common';
import { SimpleStoreEntity, SimpleStorePersistor } from './models';
import { SIMPLE_STORE_PERSISTOR } from './simple-store.constants';

@Injectable()
export class SimpleStore<T extends SimpleStoreEntity> {
  constructor(
    @Inject(SIMPLE_STORE_PERSISTOR) private persistor: SimpleStorePersistor<T>,
  ) {}

  create(record: T): T {
    return this.persistor.create(record);
  }

  update(record: T) {
    return this.persistor.update(record);
  }

  delete(id: number) {
    return this.persistor.delete(id);
  }

  get(id: number): T {
    return this.persistor.get(id);
  }

  getAll(): T[] {
    return this.persistor.getAll();
  }

  query() {
    return this.persistor.query();
  }
}
