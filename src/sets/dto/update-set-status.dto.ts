import { IsEnum } from 'class-validator';
import { SetStatus } from '../set.model';

export class UpdateSetStatus {
  @IsEnum(SetStatus)
  set_status: SetStatus;
}
