const router = require("express").Router;

router.get("/");
router.post("/");

router.get("/:id");
router.patch("/:id");
router.delete("/:id");

module.exports = router;
