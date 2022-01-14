import { Module } from "@nestjs/common";
import { InjectRepository, TypeOrmModule } from "@nestjs/typeorm";
import { LoggerController } from "./logger.controller";
import { LoggerEntity } from "./logger.entity";
import { LoggerService } from "./logger.service";

@Module({
    imports: [TypeOrmModule.forFeature([LoggerEntity])],
    controllers: [LoggerController],
    providers: [LoggerService]
})
export class LoggerModule { };