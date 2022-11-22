import express from 'express';
import { getmeds , ResetSingleProduct , BuyProduct ,AddToStock ,updateAddedToday ,updateAddedTodayFalse , Addmeds ,Deletemeds ,getSearch , BuyMixProduct,AddToStockAfterRemove}  from '../controllers/productsController.js';


const router = express.Router();

router.get(`/`,getmeds)
router.get(`/search?:searchItem`,getSearch)
router.post(`/`,Addmeds)
router.delete(`/:NameofDeletedItem`,Deletemeds)
router.patch(`/:id/reset`,ResetSingleProduct)
router.patch(`/:id/`,BuyProduct)
router.patch(`/:id/Mix`,BuyMixProduct)
router.patch(`/:id/AddToStock`,AddToStock)
router.patch(`/:id/AddToStockAfterRemove`,AddToStockAfterRemove)
router.patch(`/:id/updateAddedToday`,updateAddedToday)
router.patch(`/:id/updateAddedTodayFalse`,updateAddedTodayFalse)





export default router