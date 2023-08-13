import { Request, Response } from "express";
import { PostService } from "./post.service";

const createPostController = async (req: Request, res: Response) => {
    try {
        const result = await PostService.cratePost(req.body);
        res.send({
            success: true,
            message: "Post Created Successfully!",
            data: result
        })
    }
    catch (err) {
        res.send(err);
    }
}

const getAllPostController = async (req: Request, res: Response) => {
    console.log(req.query)
    const options = req.query;
    try {
        const result = await PostService.getAllPost(options);
        res.send({
            success: true,
            message: "Post fetched Successfully!",
            total: result.total,
            data: result.data
        })
    } catch (err) {
        res.send(err)
    }
}


const updatePost = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const data = req.body;
    try {
        const result = await PostService.updatePost(id, data);
        res.send({
            success: true,
            message: "Post updated Successfully!",
            data: result
        })
    } catch (err) {
        res.send(err)
    }
}

const deletePost = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const result = await PostService.deletePost(id);
        res.send({
            success: true,
            message: "Post deleted Successfully!",
            data: result
        })
    } catch (err) {
        res.send(err)
    }
}

const learnAggregateAndGrouping = async (req: Request, res: Response) => {
    try {
        const result = await PostService.learnAggregateAndGrouping();
        res.send({
            success: true,
            message: "Result!",
            data: result
        })
    } catch (err) {
        res.send(err)
    }
}

export const PostController = {
    createPostController,
    getAllPostController,
    updatePost,
    deletePost,
    learnAggregateAndGrouping
}