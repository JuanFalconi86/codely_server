const express = require("express");
const router = express.Router();
const CompanyModel = require("../models/CompanyModel")
const AppsModel = require("../models/AppsModel");
const uploader = require("../config/cloudinary");
const protectRoute = require("./../middlewares/protectAuth.js");
const { populate } = require("../models/CompanyModel");


//ROUTE TO GET ONE COMPANY PROFILE
// Route Protection to give access to the company profile only to signed in users

router.get("/company-profile/:id", (req, res, next) => {
  // PAS OUBLIER DE POPULATE
 
  // CompanyModel.findById(req.params.id)
  // .then((dbRes) => {
  //   console.log("HEEEEREEE");
  //   console.log('Im dbres', dbRes);
  //     if(!dbRes) {
  //       next({
  //         message: "There is no app yet",
  //         status: 400,
  //       });
  //     } else {
  //      res.json(dbRes)
  //     }
  //   })
  // AppsModel.findOne({ proprietaryCompany: req.params.id})
  // .then((dbRes) => {
  //   if(!dbRes) {
  //     next({
  //       message: "There is no app yet",
  //       status: 400,
  //     });
  //   } else if (
  //     dbRes.proprietaryCompany.toString() !== 
  //     req.session.currentUser._id.toString()
  //   ) {
  //     next({
  //       message: "Unauthorized access to apps",
  //       status: 403,
  //     });

  //   } else {
  //     AppsModel.findById(req.session.currentUser._id)
  //     .then((apps) => {
  //       res.status(200).json({
  //         message: "Nice app"
  //       });
  //     })
  //     .catch((err) => next(err));
  //   }
  // })
  // .catch((err) => next(err))
  //WORKING CODE:
  // AppsModel.find({proprietaryCompany: req.session.currentUser._id}).populate('proprietaryCompany')
  // .then((dbRes) => {
  //   res.json(dbRes);
  //   console.log(dbRes);
  // } )

  // AppsModel.findById(req.params.id)
  //   .then((companyRes) => {
  //     if(!companyRes) {
  //       console.log("Im DBREScompanyRes", companyRes)
  //       next({
  //         message: "You have no Apps yet. Add one from your profile.",
  //         status: 400,
  //       });
  //     } else if(
  //       companyRes.proprietaryCompany._id.toString() !== req.session.currentUser._id.toString()
  //     ) {
  //       next({
  //         message: "Unaythorized access",
  //         status: 403,
  //       });
  //     } else {
  //       return res.status(200)
  //     }
  //   })
  //   .catch((err) => next(err))
    ///-----------------Working-----------------------
  CompanyModel.findById(req.params.id).populate("apps")
    .then((company) => {
      res.status(200).json(company);
    })
    .catch((error) => {
      console.log(error);
    });
///-----------------Working-----------------------
   
});


// ROUTE TO UPDATE ONE COMPANY PROFILE
// Route Protection to give access to the company profile only to signed in users

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