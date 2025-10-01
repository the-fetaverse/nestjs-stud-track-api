import { IsOptional, IsString, IsEnum } from 'class-validator';
import { SetStatus } from '../set.model';

export class GetSetQueryDto {
  @IsOptional()
  @IsString()
  set_num?: string;

  @IsOptional()
  @IsString()
  name_query?: string;

  @IsOptional()
  @IsString()
  set_year?: string;

  @IsOptional()
  @IsString()
  theme_id?: string;

  @IsOptional()
  @IsEnum(SetStatus)
  set_status?: SetStatus;
}
