import { Injectable } from '@nestjs/common';
import { EstudianteEntity } from './estudiante.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Long, Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';   



@Injectable()
export class EstudianteService {
    constructor(
        @InjectRepository(EstudianteEntity)
        private readonly deudorRepository: Repository<EstudianteEntity>
    ){}
    async findOne(id: Long): Promise<EstudianteEntity> {
        const deudor: EstudianteEntity = await this.deudorRepository.findOne({where: {id}, relations: ["proyecto"] } );
        if (!deudor){
            throw new BusinessLogicException("The deudor with the given id was not found", BusinessError.NOT_FOUND);
        }
        return deudor;
    }
    async create(deudor: EstudianteEntity): Promise<EstudianteEntity> {
        return await this.deudorRepository.save(deudor);
    }
 
}
