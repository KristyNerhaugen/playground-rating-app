const router = require("express").Router();

const userRoutes = require("./user-routes");
// require post routes once created
// require comment routes once created

router.use("/users", userRoutes);
// use post routes once created
// use comments routes once created

module.exports = router;
