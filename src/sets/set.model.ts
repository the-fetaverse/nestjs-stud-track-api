export interface Set {
  set_id: string;
  set_num: string;
  set_name: string;
  set_year: number;
  theme_id: number;
  num_parts: number;
  set_img_url: string;
  set_status: SetStatus;
}

enum SetStatus {
  OWNED = 'OWNED',
  WISHLIST = 'WISHLIST',
  SOLD = 'SOLD',
}
