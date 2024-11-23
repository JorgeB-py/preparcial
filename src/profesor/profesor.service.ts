import { Injectable } from '@nestjs/common';
import { ProfesorEntity } from './profesor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Long, Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';   



@Injectable()
export class ProfesorService {
    constructor(
        @InjectRepository(ProfesorEntity)
        private readonly deudorRepository: Repository<ProfesorEntity>
    ){}
    async findOne(id: Long): Promise<ProfesorEntity> {
        const deudor: ProfesorEntity = await this.deudorRepository.findOne({where: {id}, relations: ["propuestas"] } );
        if (!deudor){
            throw new BusinessLogicException("The profesor with the given id was not found", BusinessError.NOT_FOUND);
        }
        return deudor;
    }
    async create(deudor: ProfesorEntity): Promise<ProfesorEntity> {
        return await this.deudorRepository.save(deudor);
    }

    async delete(id: Long) {
        const deudor: ProfesorEntity = await this.deudorRepository.findOne({where:{id}});
        if (!deudor)
          throw new BusinessLogicException("The profesor with the given id was not found", BusinessError.NOT_FOUND);
     
        await this.deudorRepository.remove(deudor);
    }
    async deletebyCedula(cedula: number) {
        const deudor: ProfesorEntity = await this.deudorRepository.findOne({where:{cedula}});
        if (!deudor)
          throw new BusinessLogicException("The profesor with the given cedula was not found", BusinessError.NOT_FOUND);
     
        await this.deudorRepository.remove(deudor);
    }
 
}
