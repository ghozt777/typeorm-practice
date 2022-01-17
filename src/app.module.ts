import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BranchModule } from './branch/branch.module';
import { DatabaseModule } from './database/database.module';
import { EmployeeModule } from './employee/employee.module';
import { LoggerModule } from './logger/logger.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [EmployeeModule, DatabaseModule, LoggerModule, BranchModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
