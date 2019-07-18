export interface SimpleStoreEntity {
  id?: number;
}

export interface SimpleStorePersistor<T extends SimpleStoreEntity> {
  create(entity: T): T;
  update(entity: T): T;
  delete(id: number): void;
  get(id: number): T;
  getAll(): T[];
  query(): T[];
}
