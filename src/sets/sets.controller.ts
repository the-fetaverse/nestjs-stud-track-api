import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
} from '@nestjs/common';
import { SetsService } from './sets.service';
import { Set, SetStatus } from './set.model';
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

  @Patch('/:id/set_status')
  updateSetStatus(
    @Param('id') id: string,
    @Body('set_status') status: SetStatus,
  ): Set {
    return this.setsService.updateSetStatus(id, status);
  }

  @Delete('/:id')
  deleteSetById(@Param('id') id: string): void {
    return this.setsService.deleteSetByID(id);
  }
}
