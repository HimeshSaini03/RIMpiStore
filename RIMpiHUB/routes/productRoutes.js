const express = require("express");
const {
    getProducts,
    getLandingProducts,  
    addProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/productController");

const { protect, admin } = require("../middleware/AUTHMIDDLEWARE");
const router = express.Router();
router.get("/landing", getLandingProducts); 
router.get("/", protect, getProducts);

router.post("/", protect, admin, addProduct);
router.put("/:id", protect, admin, updateProduct);
router.delete("/:id", protect, admin, deleteProduct);

module.exports = router;
