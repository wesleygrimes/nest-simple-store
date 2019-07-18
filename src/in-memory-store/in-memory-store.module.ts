import { Module } from '@nestjs/common';
import { InMemoryService } from './in-memory.service';

@Module({
  providers: [InMemoryService],
  exports: [InMemoryService],
})
export class InMemoryStoreModule {}
