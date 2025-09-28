import { Injectable } from '@nestjs/common';
import { Set, SetStatus } from './set.model';
import { v7 as uuid } from 'uuid';

@Injectable()
export class SetsService {
  private sets: Set[] = [];

  getAllSets(): Set[] {
    return this.sets;
  }

  createSet(
    set_num: string,
    set_name: string,
    set_year: number,
    theme_id: number,
    num_parts: number,
    set_img_url: string,
  ): Set {
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
