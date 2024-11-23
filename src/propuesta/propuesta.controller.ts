import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { PropuestaService } from './propuesta.service';
import { UseInterceptors } from '@nestjs/common';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors.interceptor';
import { PropuestaEntity } from './propuesta.entity';
import { PropuestaDto } from './propuesta.dto';
import { plainToInstance } from 'class-transformer';
import { Long } from 'typeorm';

@UseInterceptors(BusinessErrorsInterceptor)
@Controller('propuesta')
export class PropuestaController {
    constructor(private readonly propuestaService: PropuestaService) { }
    @Get()
    async findAll() {
        return await this.propuestaService.findAll();
    }

    @Get(':propuestaId')
    async findOne(@Param('propuestaId') propuestaId: Long) {
        return await this.propuestaService.findOne(propuestaId);
    }

    @Post()
    async create(@Body() propuestaDto: PropuestaDto) {
        const deudor: PropuestaEntity = plainToInstance(PropuestaEntity, propuestaDto);
        return await this.propuestaService.create(deudor);
    }


    @Delete(':propuestaId')
    @HttpCode(204)
    async delete(@Param('propuestaId') propuestaId: Long) {
        return await this.propuestaService.delete(propuestaId);
    }
}
