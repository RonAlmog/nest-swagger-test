import { Module } from '@nestjs/common';
import { DogController } from './dog.controller';
import { EasyconfigService } from 'nestjs-easyconfig';

@Module({
  controllers: [DogController],
  providers: [EasyconfigService],
})
export class DogModule {}
