import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SimpleStoreModule } from './simple-store/simple-store.module';

@Module({
  imports: [SimpleStoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
