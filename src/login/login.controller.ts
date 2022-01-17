import { Body, Controller, HttpStatus, Post, Request } from "@nestjs/common";
import { LoginService } from "./login.service";


@Controller('login')
export class LoginController {
    constructor(private loginService: LoginService) { }

    @Post()
    async loginHandler(@Request() req: any) {
        const access_token = req.headers['authorization'];
        const response = await this.loginService.login(access_token);
        if (response.isValid) {
            return {
                statusCode: HttpStatus.OK,
                msg: response.msg
            }
        }
        else {
            return {
                statusCode: HttpStatus.UNAUTHORIZED,
                msg: response.msg
            }
        }
    }
}