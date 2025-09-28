import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  @Get('/:id')
  getSetById(@Param('id') id: string): Set {
    return this.setsService.getSetById(id);
  }

  @Post()
  createSet(@Body() createSetDto: CreateSetDto): Set {
    return this.setsService.createSet(createSetDto);
  }
}
