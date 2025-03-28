import { Request, Response, NextFunction } from "express";
import { ValidationError } from "class-validator";

export function errorHandler(error: any, res: Response): Response {
    console.error("Ocorreu um erro:", error);
    if (Array.isArray(error) && error.every(err => err instanceof ValidationError)) {
        return res.status(422).json({
            message: "Validation failed",
            errors: error.map(err => ({
                property: err.property,
                constraints: err.constraints
            }))
        });
    }
    if (error instanceof Error && error.message === 'Product already exists') {
        return res.status(409).json({ message: 'Product already exists' });
    }
    return res.status(500).json({ message: "Internal server error" });
}