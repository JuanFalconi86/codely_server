const express = require("express");
const router = express.Router();
const CompanyModel = require("../models/CompanyModel")
const AppsModel = require("../models/AppsModel");
const uploader = require("../config/cloudinary");

//ROUTE TO GET ONE COMPANY PROFILE

router.get("/company-profile/:id", (req, res, next) => {
  // PAS OUBLIER DE POPULATE
  CompanyModel.findById(req.params.id)
    .then((company) => {
      res.status(200).json(company);
    })
    .catch((error) => {
      console.log(error);
    });
});


// ROUTE TO UPDATE ONE COMPANY PROFILE

router.patch(
  "/company-profile/:id",
  uploader.single("picture"),
  (req, res, next) => {
    // PAS OUBLIER DE POPULATE
    CompanyModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((updatedCompany) => {
        res.status(200).json(updatedCompany);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);






module.exports = router;