import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { WishController } from "./wish.controller";

@Module({
    controllers: [AppController, WishController]
})
export class AppModule {}