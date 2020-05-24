import { Controller, Get, Res } from '@nestjs/common';
import { Dog } from './dog.model';
import { EasyconfigService } from 'nestjs-easyconfig';

@Controller('dog')
export class DogController {
  constructor(private config: EasyconfigService) {}
  @Get()
  findAll(): string {
    const email = this.config.get('email');
    return 'This action returns all dogs';
  }
}
