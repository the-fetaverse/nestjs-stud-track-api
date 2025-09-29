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
import { AddNewSetDto } from './dto/add-new-set.dto';

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
  addNewSet(@Body() addNewSetDto: AddNewSetDto): Set {
    return this.setsService.addNewSet(addNewSetDto);
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
