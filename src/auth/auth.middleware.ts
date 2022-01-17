import { HttpException, HttpStatus } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    if (req.headers['Authorization'] === null) throw new HttpException('unauthorized', HttpStatus.UNAUTHORIZED);
    next();
}