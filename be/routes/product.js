const express = require("express");
const {
  postProduct,
  getAllProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  test,
} = require("../controllers/product");
const router = express.Router();

router.route("/test").get(test);
router.route("/").post(postProduct).get(getAllProduct);
router
  .route("/:id")
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

module.exports = router;
