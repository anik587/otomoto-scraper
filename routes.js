import {Router} from 'express';

import * as controllers from './controllers.js';
import { validate } from './middleware.js';

const router = Router();

router.post('/fetch-next-url', validate, controllers.fetchNextUrl);
router.post('/fetch-items', validate, controllers.fetchItems);
router.post('/fetch-counts', validate, controllers.fetchCounts);
router.post('/fetch-item-details', validate, controllers.fetchItemsDetails);
router.post('/fetch-all-pages', validate, controllers.fetchAllPages);
router.post('/fetch-all-items', validate, controllers.fetchAllItems);

export default router;