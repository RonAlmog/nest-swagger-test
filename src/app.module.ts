import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogModule } from './dog/dog.module';
import { EasyconfigModule } from 'nestjs-easyconfig';

@Module({
  imports: [DogModule, EasyconfigModule.register({ path: './config/.env' })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
