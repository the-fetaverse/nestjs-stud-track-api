import { Injectable } from '@nestjs/common';
import { Set } from './set.model';

@Injectable()
export class SetsService {
  private sets: Set[] = [];

  getAllSets(): Set[] {
    return this.sets;
  }
}
