import { Module } from '@nestjs/common';
import { InMemoryPersistor } from './persistors';
import { SimpleStore } from './simple-store';
import { SIMPLE_STORE_PERSISTOR } from './simple-store.constants';

@Module({
  providers: [
    SimpleStore,
    { provide: SIMPLE_STORE_PERSISTOR, useClass: InMemoryPersistor },
  ],
  exports: [SimpleStore],
})
export class SimpleStoreModule {}
