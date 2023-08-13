
import { Request, Response } from "express";
import { CategoryService } from "./category.service";

const insertIntoDB = async (req: Request, res: Response) => {
    try {
        const result = await CategoryService.insertIntoDB(req.body);
        res.send({
            success: true,
            message: "Category created!",
            data: result
        })
    }
    catch (err) {
        res.send(err);
    }
}

export const CategoryController = {
    insertIntoDB
}