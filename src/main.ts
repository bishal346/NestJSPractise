import { Controller, Module, Get } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

// @Controller('mes') 
// class AppController {
//     @Get('/hi')
//     getRootRoute() {
//         return "Hello There !"
//     }
// }

// @Module({
//     controllers: [AppController]
// })
// class AppModule {}

async function bootstrap() {
    const app = await NestFactory.create(AppModule); 

    await app.listen(3000); 
}
bootstrap(); 