import express from 'express';
import { CategoryController } from './category.controller';

const router = express.Router();

router.post('/create-category', CategoryController.insertIntoDB)

export const CategoryRoutes = router;