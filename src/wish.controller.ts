import { Controller, Get } from "@nestjs/common";

@Controller('/wish') 
export class WishController {
    @Get('/thanks')
    getThanksWishRoute() {
        return "Thank You"
    }
    @Get('/welcome')
    getWelcomeWishRoute() {
        return "Welcome"
    }
}