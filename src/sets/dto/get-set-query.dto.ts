import { IsString } from 'class-validator';
import { SetStatus } from '../set.model';

export class GetSetQueryDto {
  @IsString()
  set_num?: string;

  @IsString()
  name_query?: string;

  @IsString()
  set_year?: string;

  @IsString()
  theme_id?: string;

  set_status?: SetStatus;
}
