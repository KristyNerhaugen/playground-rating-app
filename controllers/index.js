const router = require("express").Router();

const apiRoutes = require("./api");
// require home routes once set up
// require dashboard routes once set up

// use home routes once set up
router.use("/api", apiRoutes);
// use dashboard routes once set up

module.exports = router;
