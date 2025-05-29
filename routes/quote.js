import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://zenquotes.io/api/today');
    res.json(response.data); 
  } catch (error) {
    console.error('Failed to fetch quote:', error);
    res.status(500).json({ error: 'Failed to fetch quote' });
  }
});

export default router;
