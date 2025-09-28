import { Body, Controller, Get, Post } from '@nestjs/common';
import { SetsService } from './sets.service';
import { Set } from './set.model';
import { CreateSetDto } from './dto/create-set.dto';

@Controller('sets')
export class SetsController {
  constructor(private readonly setsService: SetsService) {}

  @Get()
  getAllSets(): Set[] {
    return this.setsService.getAllSets();
  }

  @Post()
  createSet(@Body() createSetDto: CreateSetDto): Set {
    return this.setsService.createSet(createSetDto);
  }
}
