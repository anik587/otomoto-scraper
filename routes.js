import {Router} from 'express';
import {getNextUrl} from './controller.js';
const router = Router();
router.post('/next-url', getNextUrl)

export default router;