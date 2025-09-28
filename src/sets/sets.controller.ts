import { Controller, Get } from '@nestjs/common';
import { SetsService } from './sets.service';

@Controller('sets')
export class SetsController {
  constructor(private readonly setsService: SetsService) {}

  @Get()
  getAllSets() {
    return this.setsService.getAllSets();
  }
}
