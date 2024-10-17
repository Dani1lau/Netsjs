import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('bootcamps')
export class BootcampsController {

    //EndPoint GET:
    @Get()
    getAllBootcamps():string{
        return `Aqui se van a mostrar todos los bootcamps`
    }    

    @Get(":id")
    getBootcampById(@Param ("id") id:number ): string{
        return `Aqui va a mostrar el bootcamp cuyo id es : ${id}`
    }

    @Post()
    createBootcamp():string{
        return "Aqui se va a guardar un nuevo bootcamp"
    }
    
}
