const router = require("express").Router();
const productServices = require("./product.services");

router.get("/", productServices.getAllProducts);
router.post("/", productServices.createProduct);

router.get("/:id", productServices.getProductById);
router.patch("/:id", productServices.patchProduct);
router.delete("/:id", productServices.deleteProduct);
router.put("/:id", productServices.putProduct);

module.exports = router;
