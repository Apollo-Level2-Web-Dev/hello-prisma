import express from 'express';
import { PostController } from './post.controller';

const router = express.Router();

router.get("/", PostController.getAllPostController)
router.post("/create-post", PostController.createPostController)
router.patch('/:id', PostController.updatePost)
router.delete('/:id', PostController.deletePost)
router.get('/learn-query', PostController.learnAggregateAndGrouping)

export const PostRoutes = router;