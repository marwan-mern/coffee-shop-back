import express from 'express';
import {AddBuymeds,GetBuyToday,DeleteBuyToday}  from '../controllers/BuyTodayController.js';


const router = express.Router();


router.post(`/`,AddBuymeds)
router.get(`/`,GetBuyToday)
router.delete(`/`,DeleteBuyToday)






export default router