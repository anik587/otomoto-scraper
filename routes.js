import {Router} from 'express';
import {getNextUrl} from './controllers.js';
const router = Router();
router.post('/next-url', getNextUrl);

export default router;