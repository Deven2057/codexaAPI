import { Router } from 'express';
const router = Router();

router.get('/', (_req, res) => {
  res.json({ agents: ['Agent A', 'Agent B'] });
});

export default router;
