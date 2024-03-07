import express from 'express';
const router = express.Router();

router.get('/categories', (req, res) => {
  res.json([]);
});

router.all('*', (req, res) => {
  res.status(404);
  res.send('Not found');
});

export default router;
