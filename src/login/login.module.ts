import { MiddlewareConsumer, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EmployeeEntity } from "src/employee/employee.entity";
import { AuthTokenEntity } from "./authToken.entity";
import { LoginController } from "./login.controller";
import { loginMiddleware } from "./login.middlewrare";
import { LoginService } from "./login.service";

@Module({
    imports: [TypeOrmModule.forFeature([EmployeeEntity, AuthTokenEntity])],
    controllers: [LoginController],
    providers: [LoginService],

})
export class LoginModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(loginMiddleware)
            .forRoutes(LoginController)
    }
}