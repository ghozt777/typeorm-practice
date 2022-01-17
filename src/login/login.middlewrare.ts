import { HttpException, HttpStatus } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export function loginMiddleware(req: Request, res: Response, next: NextFunction) {
    console.log("LOG FROM MIDDLEWARE :  ", req.headers)
    if (!req.headers['authorization']) throw new HttpException('unauthorized', HttpStatus.UNAUTHORIZED);
    next();
}