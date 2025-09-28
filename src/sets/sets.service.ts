import { Injectable } from '@nestjs/common';
import { Set, SetStatus } from './set.model';
import { v7 as uuid } from 'uuid';
import { CreateSetDto } from './dto/create-set.dto';

@Injectable()
export class SetsService {
  private sets: Set[] = [];

  getAllSets(): Set[] {
    return this.sets;
  }

  createSet(createSetDto: CreateSetDto): Set {
    const { set_num, set_name, set_year, theme_id, num_parts, set_img_url } =
      createSetDto;

    const newSet: Set = {
      set_id: uuid(),
      set_num,
      set_name,
      set_year,
      theme_id,
      num_parts,
      set_img_url,
      set_status: SetStatus.OWNED,
    };
    this.sets.push(newSet);
    return newSet;
  }
}
