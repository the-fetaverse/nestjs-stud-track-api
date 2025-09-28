import { Module } from '@nestjs/common';
import { SetModule } from './set/set.module';

@Module({
  imports: [SetModule],
})
export class AppModule {}
