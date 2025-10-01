import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  Query,
} from '@nestjs/common';
import { SetsService } from './sets.service';
import { Set, SetStatus } from './set.model';
import { AddNewSetDto } from './dto/add-new-set.dto';
import { GetSetQueryDto } from './dto/get-set-query.dto';
import { UpdateSetStatus } from './dto/update-set-status.dto';

@Controller('sets')
export class SetsController {
  constructor(private readonly setsService: SetsService) {}

  // GET all sets or sets based on query parameters
  @Get()
  getSets(@Query() query: GetSetQueryDto): Set[] {
    if (Object.keys(query).length) {
      return this.setsService.getSetByQuery(query);
    } else {
      return this.setsService.getAllSets();
    }
  }

  // GET set by ID
  @Get('/:id')
  getSetById(@Param('id') id: string): Set {
    return this.setsService.getSetById(id);
  }

  // POST a new set
  @Post()
  addNewSet(@Body() addNewSetDto: AddNewSetDto): Set {
    return this.setsService.addNewSet(addNewSetDto);
  }

  // PATCH to update set status
  @Patch('/:id/set_status')
  updateSetStatus(
    @Param('id') id: string,
    @Body() updateSetStatusDto: UpdateSetStatus,
  ): Set {
    const { set_status } = updateSetStatusDto;
    return this.setsService.updateSetStatus(id, set_status);
  }

  // DELETE a set by ID
  @Delete('/:id')
  deleteSetById(@Param('id') id: string): void {
    return this.setsService.deleteSetByID(id);
  }
}
