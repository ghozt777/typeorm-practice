import { MiddlewareConsumer, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EmployeeEntity } from "src/employee/employee.entity";
import { BranchController } from "./branch.controller";
import { BranchEntity } from "./branch.entity";
import { BranchService } from "./branch.service";

@Module({
    imports: [TypeOrmModule.forFeature([BranchEntity])],
    providers: [BranchService],
    controllers: [BranchController]
})
export class BranchModule {}