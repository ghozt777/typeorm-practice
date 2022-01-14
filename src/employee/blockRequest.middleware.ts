import { HttpException, HttpStatus } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

export function blockRequest(request: Request, response: Response, next: NextFunction) {
    if (request.method === 'POST') {
        throw new HttpException("unauthorized", HttpStatus.UNAUTHORIZED);
    }
    else next();
}