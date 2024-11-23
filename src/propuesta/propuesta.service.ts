import { Injectable } from '@nestjs/common';
import { PropuestaEntity } from './propuesta.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Long, Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';   



@Injectable()
export class PropuestaService {
    constructor(
        @InjectRepository(PropuestaEntity)
        private readonly deudorRepository: Repository<PropuestaEntity>
    ){}
    async findAll(): Promise<PropuestaEntity[]> {
        return await this.deudorRepository.find({ relations: ["profesor", "proyecto"] });
    }
    async findOne(id: Long): Promise<PropuestaEntity> {
        const deudor: PropuestaEntity = await this.deudorRepository.findOne({where: {id}, relations: ["profesor", "proyecto"] } );
        if (!deudor){
            throw new BusinessLogicException("The deudor with the given id was not found", BusinessError.NOT_FOUND);
        }
        return deudor;
    }
    async create(deudor: PropuestaEntity): Promise<PropuestaEntity> {
        return await this.deudorRepository.save(deudor);
    }
    async delete(id: Long) {
        const deudor: PropuestaEntity = await this.deudorRepository.findOne({where:{id}});
        if (!deudor)
          throw new BusinessLogicException("The deudor with the given id was not found", BusinessError.NOT_FOUND);
     
        await this.deudorRepository.remove(deudor);
    }
 
}
