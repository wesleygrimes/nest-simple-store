import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InMemoryStoreModule } from './in-memory-store/in-memory-store.module';

@Module({
  imports: [InMemoryStoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
