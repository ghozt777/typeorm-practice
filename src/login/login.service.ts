import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AuthTokenEntity } from "./authToken.entity";
import { EmployeeEntity } from "src/employee/employee.entity";
import bcrypt from 'bcryptjs'
import moment from "moment";

type LoginResponseType = {
    isValid: boolean;
    msg: string;
}

@Injectable()
export class LoginService {
    constructor(@InjectRepository(AuthTokenEntity) private authTokenRepository: Repository<AuthTokenEntity>, @InjectRepository(EmployeeEntity) private employeeRepository: Repository<EmployeeEntity>) { }

    async login(token: string): Promise<LoginResponseType> {
        const response = {
            isValid: false,
            msg: 'user auth faliure'
        }
        const headAuth = token.split(' ');
        if (headAuth.length != 2) return response;
        const decodedParam = Buffer.from(headAuth[1], 'base64');
        const decodedString = decodedParam.toString("utf8");
        const [empId, password] = decodedString.split(':');
        const employeeFound = await this.employeeRepository.query(`select * from employee_entity where emp_id = ${empId}`);
        if (Object.keys(employeeFound).length === 0) return response;
        const employeeInAuthTable = await this.authTokenRepository.query(`select * from UserAuthTokens where emp_id = ${empId} and token = ${token}`);
        if (Object.keys(employeeInAuthTable).length === 0) return response;
        if (new Date(employeeInAuthTable.expiry) < new Date()) {
            response.msg = 'token expired';
            return response;
        }
        const isValidPassword = await bcrypt.compare(password, employeeInAuthTable.password);
        if (!isValidPassword) {
            response.msg = "Invalid password";
            return response;
        }
        console.log('user credentials valid : user logged in');
        await this.authTokenRepository.query(`update UserAuthTokens set lastLogin = ${moment().format('MMMM Do YYYY, h:mm:ss a')} where emp_id = ${empId} and token = ${token}`);
        response.isValid = true;
        response.msg = 'logged in successfully';
        return response;
    }
}