import { Injectable } from '@nestjs/common';
import { ProyectoEntity } from './proyecto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';   



@Injectable()
export class ProyectoService {
    constructor(
        @InjectRepository(ProyectoEntity)
        private readonly deudorRepository: Repository<ProyectoEntity>
    ){}
    async create(deudor: ProyectoEntity): Promise<ProyectoEntity> {
        return await this.deudorRepository.save(deudor);
    }
 
}
