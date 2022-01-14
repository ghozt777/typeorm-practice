import { HttpStatus, Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import * as moment from "moment";
import { Repository } from "typeorm";
import { LoggerEntity } from "./logger.entity";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class LoggerService {
    constructor(@InjectRepository(LoggerEntity) private loggerRespository: Repository<LoggerEntity>) { }

    async queryLogs() {
        return await this.loggerRespository.find();
    }

    createLog(req: any, res: any) {
        const log: LoggerEntity = this.createLogObject(req, res);
        const success = this.createLogInDB(log);
        if (success) {

        }
        else {
            console.error("Logging Error");
        }
    }

    createLogObject(requestObj: any, responseObj: any): LoggerEntity {
        const requestString = JSON.stringify(requestObj);
        const responseString = JSON.stringify(responseObj);
        return {
            log_id: uuidv4(),
            requestObject: requestString,
            responseObject: responseString,
            timeStamp: moment().format('MMMM Do YYYY, h:mm:ss a')
        }
    }

    createLogInDB(log: LoggerEntity): boolean {
        let status = true;
        try {
            this.loggerRespository.save(log);
            console.log("Request Logged", log);
        } catch (e) {
            console.error(e.message);
            status = false;
        }
        return status;
    }
}