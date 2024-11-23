import { Module } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { ProfesorEntity } from './profesor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [ProfesorService],
  imports: [TypeOrmModule.forFeature([ProfesorEntity])],
  exports: [ProfesorService],
})
export class ProfesorModule {}
