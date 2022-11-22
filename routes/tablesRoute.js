import express from 'express';
import { getTables , AddOrderToTable}  from '../controllers/tablesController.js';

const router = express.Router();


router.get(`/`,getTables)
router.patch(`/:TableNumber`,AddOrderToTable)





export default router