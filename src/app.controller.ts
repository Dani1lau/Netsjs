import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Student } from './entidades/Student.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  //EndPoint: metodo que se ejecuta cuando
  //          se invonca determinada URL desde 
  //          el cliente http(Bruno)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //EndPoint:
  //1. Metodo(Verbo) HTTP a utilizar (junto con la ruta)
  //2. Frima del metodo a invocar
  //3. Instrucciones a ejecutar
  @Get("/prueba1")
  mensaje():string {
return"mensaje de prueba 1"
  }

  @Get("/bootcamps/:id/curso/:cursoId")
  mensajeBootcampPorId(@Param("id") id:string, @Param("cursoId") cursoId:string ): string{
    return `mostrnado bootcamp con id: ${id} y el curso : ${cursoId}`
  }

  @Get("identificacion/:id")
  getIdentificacion(@Query ("nombre") nombre:string, 
                    @Query("edad") edad:number, 
                    @Param("id") id:number,
                    @Query("ciudad") ciudad:string ): Student{
    return new Student(id, nombre, edad, ciudad)
  }

}
