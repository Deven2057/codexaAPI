import express from 'express';
import agentRoutes from './routes/agent.routes';

const app = express();
const PORT = 5050;

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('✅ It works!');
});

app.use('/api/agents', agentRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
