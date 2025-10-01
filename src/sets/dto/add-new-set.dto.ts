import { IsString, IsNotEmpty } from 'class-validator';
export class AddNewSetDto {
  @IsNotEmpty()
  @IsString()
  set_num: string;

  @IsNotEmpty()
  @IsString()
  set_name: string;

  @IsNotEmpty()
  @IsString()
  set_year: string;

  @IsNotEmpty()
  @IsString()
  theme_id: string;

  @IsNotEmpty()
  @IsString()
  num_parts: string;

  @IsNotEmpty()
  @IsString()
  set_img_url: string;
}
