import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LoggerEntity } from "src/logger/logger.entity";
import { LoggerModule } from "src/logger/logger.module";
import { LoggerService } from "src/logger/logger.service";
import { blockRequest } from "./blockRequest.middleware";
import { EmployeeController } from "./employee.controller";
import { EmployeeEntity } from "./employee.entity";
import { EmployeeService } from "./employee.service";

@Module({
    imports: [TypeOrmModule.forFeature([EmployeeEntity, LoggerEntity])],
    controllers: [EmployeeController],
    providers: [EmployeeService, LoggerService],
})
export class EmployeeModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(blockRequest).forRoutes('/hello')
    }
};