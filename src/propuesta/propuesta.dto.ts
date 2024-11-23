import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { Long } from 'typeorm';

export class PropuestaDto {

    @IsString()
    @IsNotEmpty()
    titulo: string;

    @IsString()
    @IsNotEmpty()
    descripcion: string;

    @IsString()
    @IsNotEmpty()
    palabraclave: string;

    @IsNotEmpty()
    proyectoId: Long;

    @IsNotEmpty()
    profesorId: Long;
}