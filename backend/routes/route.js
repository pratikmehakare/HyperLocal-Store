const express = require("express");
const { addStore, getStore, getProduct, addProduct, getOrder, addOrder, getStoreById, getProductById, getProductsByStoreId } = require("../controllers/hyperController");
const router = express.Router();

router.get("/getStore",getStore)
router.post('/addStore',addStore)
router.get("/store/:id",getStoreById);

router.get("/getProduct",getProduct)
router.post('/addProduct',addProduct)
router.get("/product/:id", getProductById);
router.get("/productbystore/:storeId",getProductsByStoreId)

router.get("/getOrder",getOrder)
router.post('/createOrder',addOrder)

module.exports = router;