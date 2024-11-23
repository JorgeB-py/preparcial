import { Module } from '@nestjs/common';
import { ProyectoService } from './proyecto.service';
import { ProyectoEntity } from './proyecto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropuestaEntity } from 'src/propuesta/propuesta.entity';

@Module({
  providers: [ProyectoService],
  imports: [TypeOrmModule.forFeature([ProyectoEntity, PropuestaEntity])],
  exports: [ProyectoService],
})
export class ProyectoModule {}
