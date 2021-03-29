const express = require("express");
const router = express.Router();
const TechnologyModel = require("../models/TechnologyModel");
const protectRoute = require('./../middlewares/protectRoutes')

router.get("/technologies", protectRoute, (req, res, next) => {
  
  TechnologyModel.find()
    .then((technology) => {
      res.status(200).json(technology);
    })
    .catch((error) => {
      console.log(error);
    });
});




module.exports = router;