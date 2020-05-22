import { Controller, Get, Res } from '@nestjs/common';
import { Dog } from './dog.model';

@Controller('dog')
export class DogController {
  @Get()
  findAll(): string {
    return 'This action returns all dogs';
  }
}
