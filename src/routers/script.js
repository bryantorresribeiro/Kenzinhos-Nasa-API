const router = require("express").Router();
const controllers = require("../controllers/script")

router.get("/", controllers.welcome)
router.get("/nasa/day", controllers.day)
router.get("/nasa/search/:value", controllers.nasaSearch)
router.get("/nasa/:initialDate/:finalDate", controllers.nasaImg)
router.get("/RamdomMars", controllers.marsRamdomImg)
router.get("/SearchMars/:initialDate", controllers.marsImg)


module.exports = router;