import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { EmployeeEntity } from "./employee.entity";
import { EmployeeService } from "./employee.service";

@Controller('/employee')
export class EmployeeController {
    constructor(private employeeService: EmployeeService) { }
    @Get('hello')
    hello() {
        return this.employeeService.createHelloResponse();
    }

    @Get()
    getAllEmployees() {
        return this.employeeService.queryAllEmployees();
    }

    @Get('/emp/:id')
    getSpecificEmployee(@Param('id', ParseIntPipe) id: number) {
        return this.employeeService.querySpecificEmployee(id);
    }

    @Get('/managers')
    getManagers() {
        return this.employeeService.getManager();
    }
}
