import { Module } from '@nestjs/common';
import { PropuestaService } from './propuesta.service';
import { PropuestaEntity } from './propuesta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropuestaController } from './propuesta.controller';
import { ProyectoEntity } from 'src/proyecto/proyecto.entity';

@Module({
  providers: [PropuestaService],
  imports: [TypeOrmModule.forFeature([PropuestaEntity, ProyectoEntity])],    
  exports: [PropuestaService],
  controllers: [PropuestaController],
})
export class PropuestaModule {}
