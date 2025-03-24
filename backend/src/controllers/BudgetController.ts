import type {Request, Response} from "express"

export class BudgetController {
    static getAll = (req: Request, res: Response) => {
        console.log('Desde /api/budgets')
    }
    static create = (req: Request, res: Response) => {
        console.log('Desde POST')
    }
    static getById = (req: Request, res: Response) => {
        console.log('Desde GetById /api/budgets')
    }
    static updateById = (req: Request, res: Response) => {
        console.log('Desde PUT /api/budgets')
    }
    static deleteById = (req: Request, res: Response) => {
        console.log('Desde DELETE /api/budgets')
    }
    
}