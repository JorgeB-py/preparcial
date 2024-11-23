import { Column, Entity, JoinColumn, JoinTable, Long, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { ProyectoEntity } from 'src/proyecto/proyecto.entity';
import { join } from 'path';

@Entity()
export class EstudianteEntity {
    @PrimaryGeneratedColumn()
    id: Long;

    @Column()
    nombre: string;

    @Column()
    codigo: string;

    @Column()
    creditosaprobados: string;

    @OneToOne(() => ProyectoEntity, proyecto => proyecto.id)
    @JoinTable()
        proyecto: ProyectoEntity;
}