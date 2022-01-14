import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BranchEntity } from "./branch.entity";

@Injectable()
export class BranchService {
    constructor(@InjectRepository(BranchEntity) private branchRepository: Repository<BranchEntity>) { }
    async getBranchNames(): Promise<BranchEntity[]> {
        return await this.branchRepository.query(`SELECT branch_name AS branchName FROM branch`)
    }

    async getManagers(): Promise<any[]> {
        const queryString = `select branch_entity.branch_name as branchName , concat(employee_entity.first_name , ' ' , employee_entity.last_name) as manager
        from branch_entity 
        join employee_entity on branch_entity.mgr_id = employee_entity.emp_id order by branch_entity.branch_name desc;`
        return await this.branchRepository.query(queryString);
    }
}   