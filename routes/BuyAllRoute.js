import express from 'express';
import {AddBuyAllmeds}  from '../controllers/BuyAllController.js';

const router = express.Router();


router.post(`/`,AddBuyAllmeds)







export default router