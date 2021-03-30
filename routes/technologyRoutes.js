const express = require("express");
const router = express.Router();
const TechnologyModel = require("../models/TechnologyModel");
<<<<<<< HEAD


router.get("/technologies",  (req, res, next) => {
=======
// const protectRoute = require('./../middlewares/protectRoutes')

router.get("/technologies", (req, res, next) => {
>>>>>>> 1eb741bed9adfd59ba4acf15729c8adda047a2b8
  
  TechnologyModel.find()
    .then((technology) => {
      res.status(200).json(technology);
    })
    .catch((error) => {
      console.log(error);
    });
});




module.exports = router;