import { Body, Controller, Get, Post } from '@nestjs/common';
import { SetsService } from './sets.service';
import type { Set } from './set.model';

@Controller('sets')
export class SetsController {
  constructor(private readonly setsService: SetsService) {}

  @Get()
  getAllSets(): Set[] {
    return this.setsService.getAllSets();
  }

  @Post()
  createSet(
    @Body('set_num') set_num: string,
    @Body('set_name') set_name: string,
    @Body('set_year') set_year: number,
    @Body('theme_id') theme_id: number,
    @Body('num_parts') num_parts: number,
    @Body('set_img_url') set_img_url: string,
  ): Set {
    return this.setsService.createSet(
      set_num,
      set_name,
      set_year,
      theme_id,
      num_parts,
      set_img_url,
    );
  }
}
