import express from 'express';
const router = express.Router();

router.get('/categories', (req, res) => {
  res.json([]);
});

export default router;
