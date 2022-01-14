import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { BranchService } from "./branch.service";

@Controller('branch')
export class BranchController {

    constructor(private branchService: BranchService) { }

    @Get()
    getBranchNamesHandler() {
        return this.branchService.getBranchNames();
    }

    @Get('managers')
    async getManagershandler() {
        const res = await this.branchService.getManagers();
        return {
            statusCode: res ? HttpStatus.OK : HttpStatus.NOT_FOUND,
            success: res ? true : false,
            data: res
        }
    }
}