import { Controller, Get, HttpStatus } from "@nestjs/common";

@Controller('auth')
export class AuthController {
    constructor() { }

    @Get()
    hello() {
        return {
            statusCode: HttpStatus.OK,
            msg: "Hello From Auth Controller"
        }
    }
}