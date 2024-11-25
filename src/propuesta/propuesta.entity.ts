import { ProfesorEntity } from 'src/profesor/profesor.entity';
import { ProyectoEntity } from 'src/proyecto/proyecto.entity';
import { Column, Entity, JoinColumn, Long, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PropuestaEntity {
    @PrimaryGeneratedColumn()
    id: Long;

    @Column()
    titulo: string;

    @Column()
    descripcion: string;

    @Column()
    palabraclave: string;

    @OneToOne(() => ProyectoEntity, proyecto => proyecto.propuesta)
    @JoinColumn()
        proyecto: ProyectoEntity;

    @ManyToOne(()=>ProfesorEntity, profesor => profesor.propuestas)
        profesor: ProfesorEntity;
}