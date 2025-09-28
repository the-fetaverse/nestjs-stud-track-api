import { Injectable } from '@nestjs/common';

@Injectable()
export class SetsService {
  private sets = [];

  getAllSets() {
    return this.sets;
  }
}
