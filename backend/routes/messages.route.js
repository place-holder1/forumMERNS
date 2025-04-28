import express from 'express';
import { getMessages, sendMessage } from '../controllers/messages.controller.js';

const router = express.Router();

router.get('/messages', getMessages);
router.post('/messages', sendMessage);

export default router;
