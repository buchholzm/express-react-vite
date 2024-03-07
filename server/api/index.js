import { PrismaClient } from '@prisma/client';

import express from 'express';
const router = express.Router();
const db = new PrismaClient();

router.get('/topics', async (req, res) => {
  const topics = await db.topic.findMany();
  res.json(topics);
});

router.get('/categories', async (req, res) => {
  const categories = await db.category.findMany();
  res.json(categories);
});

router.get('/bookmarks', async (req, res) => {
  const bookmarks = await db.bookmark.findMany();
  res.json(bookmarks);
});

router.all('*', (req, res) => {
  res.status(404);
  res.send('Not found');
});

export default router;
