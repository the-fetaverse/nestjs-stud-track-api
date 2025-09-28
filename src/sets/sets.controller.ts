import { Controller, Get } from '@nestjs/common';
import { SetsService } from './sets.service';
import { Set } from './set.model';

@Controller('sets')
export class SetsController {
  constructor(private readonly setsService: SetsService) {}

  @Get()
  getAllSets(): Set[] {
    return this.setsService.getAllSets();
  }
}
