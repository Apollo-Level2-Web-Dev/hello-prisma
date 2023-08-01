import { Request, Response } from "express";
import { UserService } from "./user.service";

const insertIntoDB = async (req: Request, res: Response) => {
    try {
        const result = await UserService.insertIntoDB(req.body);
        res.send({
            succes: true,
            message: "User created successfully!",
            data: result
        })
    }
    catch (err) {
        res.send(err)
    }
}

const insertOrUpdateProfile = async (req: Request, res: Response) => {
    try {
        const result = await UserService.insertOrUpdateProfile(req.body);
        res.send({
            succes: true,
            message: "Profile created/updated successfully!",
            data: result
        })
    }
    catch (err) {
        res.send(err)
    }
}

const getUsers = async (req: Request, res: Response) => {
    try {
        const result = await UserService.getUsers();
        res.send({
            succes: true,
            message: "data fetched successfully!",
            data: result
        })
    }
    catch (err) {
        res.send(err)
    }
}

const getSingleUser = async (req: Request, res: Response) => {
    try {
        const result = await UserService.getSingleUser(parseInt(req.params.id));
        res.send({
            succes: true,
            message: "data fetched successfully!",
            data: result
        })
    }
    catch (err) {
        res.send(err)
    }
}

export const UserController = {
    insertIntoDB,
    insertOrUpdateProfile,
    getUsers,
    getSingleUser
}