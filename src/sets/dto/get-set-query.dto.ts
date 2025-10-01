import { SetStatus } from '../set.model';

export class GetSetQueryDto {
  set_num?: string;
  name_query?: string;
  set_year?: number;
  theme_id?: number;
  set_status?: SetStatus;
}
