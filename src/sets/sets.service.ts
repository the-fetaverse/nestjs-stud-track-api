import { Injectable } from '@nestjs/common';
import { Set, SetStatus } from './set.model';
import { v7 as uuid } from 'uuid';
import { AddNewSetDto } from './dto/add-new-set.dto';
import { GetSetQueryDto } from './dto/get-set-query.dto';

@Injectable()
export class SetsService {
  private sets: Set[] = [];

  getAllSets(): Set[] {
    return this.sets;
  }

  getSetById(setId: string): Set {
    const foundSet = this.sets.find((set) => set.set_id === setId);
    if (!foundSet) {
      throw new Error(`Set with id ${setId} not found`);
    }
    return foundSet;
  }

  getSetByQuery(query: GetSetQueryDto): Set[] {
    const { set_num, name_query, set_year, theme_id, set_status } = query;
    let sets: Set[] = this.getAllSets();

    if (set_num) {
      sets = sets.filter((set) => set.set_num === set_num);
    }
    if (name_query) {
      const lowerCaseQuery = name_query.toLowerCase();
      sets = sets.filter((set) =>
        set.set_name.toLowerCase().includes(lowerCaseQuery),
      );
    }
    if (set_year) {
      sets = sets.filter((set) => set.set_year === set_year);
    }
    if (theme_id) {
      sets = sets.filter((set) => set.theme_id === theme_id);
    }
    if (set_status) {
      sets = sets.filter((set) => set.set_status === set_status);
    }
    return sets;
  }

  addNewSet(addNewSetDto: AddNewSetDto): Set {
    const { set_num, set_name, set_year, theme_id, num_parts, set_img_url } =
      addNewSetDto;

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

  updateSetStatus(setId: string, status: SetStatus): Set {
    const foundSet = this.getSetById(setId);
    foundSet.set_status = status;
    return foundSet;
  }

  deleteSetByID(setId: string): void {
    this.sets = this.sets.filter((set) => set.set_id !== setId);
  }
}
