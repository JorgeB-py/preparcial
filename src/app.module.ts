import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudianteEntity } from './estudiante/estudiante.entity';
import { ProfesorEntity } from './profesor/profesor.entity';
import { PropuestaEntity } from './propuesta/propuesta.entity';
import { ProyectoEntity } from './proyecto/proyecto.entity';
import { EstudianteModule } from './estudiante/estudiante.module';
import { ProfesorModule } from './profesor/profesor.module';
import { ProyectoModule } from './proyecto/proyecto.module';
import { PropuestaModule } from './propuesta/propuesta.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [EstudianteModule, ProfesorModule, ProyectoModule, PropuestaModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',   
    password: 'postgres',
    database: 'Parcial',
    entities: [EstudianteEntity, ProfesorEntity, PropuestaEntity, ProyectoEntity],
    dropSchema: true,
    synchronize: true,
    keepConnectionAlive: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
