const router = require("express").Router();

const userRoutes = require("./user-routes");
const postRoutes = require("./post-routes");
// require comment routes once created

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
// use comments routes once created

module.exports = router;
