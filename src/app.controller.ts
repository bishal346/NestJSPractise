import { Controller, Get } from "@nestjs/common";

@Controller('message') 
export class AppController {
    @Get('/hi')
    getRootRoute() {
        return "Hello There !"
    }
    @Get('/bye')
    getByeRoute() {
        return "Bye There !"
    }
}