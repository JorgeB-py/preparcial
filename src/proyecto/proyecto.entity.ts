import { Column, Entity, Long, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { EstudianteEntity } from 'src/estudiante/estudiante.entity';
import { PropuestaEntity } from 'src/propuesta/propuesta.entity';

@Entity()
export class ProyectoEntity {
    @PrimaryGeneratedColumn()
    id: Long;

    @Column()
    fechainicio: Date;

    @Column()
    fechafin: Date;

    @Column()
    url: string;

    @OneToOne(() => EstudianteEntity, estudiante => estudiante.proyecto)
        estudiante: EstudianteEntity;

    @OneToOne(() => PropuestaEntity, propuesta => propuesta.proyecto)
        propuesta: PropuestaEntity;
}