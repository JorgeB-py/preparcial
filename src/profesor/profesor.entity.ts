import { PropuestaEntity } from 'src/propuesta/propuesta.entity';
import { Column, Entity, Long, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProfesorEntity {
    @PrimaryGeneratedColumn()
    id: Long;

    @Column()
    cedula: number;

    @Column()
    nombre: string;

    @Column()
    grupoinvestigacion: string;

    @Column()
    extension: string;

    @OneToMany(()=>PropuestaEntity, propuesta => propuesta.profesor)
    propuestas: PropuestaEntity[];
}