const express = require("express");
const router = express.Router();
const AppsModel = require("../models/AppsModel");
const TechnologyModel = require("../models/TechnologyModel");
const CompanyModel = require("./../models/CompanyModel");
const uploader = require("../config/cloudinary");
const protectRoute = require("./../middlewares/protectAuth.js");
// ROUTE TO DISPLAY ALL THE APPLICATIONS:
router.get("/applications", (req, res, next) => {
  // PAS OUBLIER DE POPULATE
  AppsModel.find()
    .populate("proprietaryCompany")
    .then((application) => {
      res.status(200).json(application);
    })
    .catch((error) => {
      console.log(error);
    });
});
// ROUTE TO FIND A SINGLE APPLICATION BY ID:
router.get("/applications/:id", (req, res, next) => {
  // PAS OUBLIER DE POPULATE
  AppsModel.findById(req.params.id)
    .populate("technology")
    .then((application) => {
      res.status(200).json(application);
    })
    .catch((error) => {
      console.log(error);
    });
});
// ROUTE TO CREATE A NEW APPLICATION:
// D'abord, on récupère les informations des technologies pour les mettre dans le formulaire
// Route Protection to prevent non-signed in users from accessing the App Creation Form
router.get("/application/create", protectRoute, (req, res, next) => {
  TechnologyModel.find()
    .then((technologies) => {
      res.json(technologies);
    })
    .catch((error) => {
      console.log(error);
    });
});
// ensuite, on fait la requête pour créer la nouvelle application, tenant aussi compte des technologies existantes
// Route Protection to prevent non-signed in users from accessing the App Creation Form
router.post(
  "/application/create",
  uploader.single("appLogo"),
  (req, res, next) => {
    // PAS OUBLIER LE IS LOGGED IN
    let appLogo = req.file.path;
    const newApp = { ...req.body, appLogo };
    AppsModel.create(newApp)
      .then((createdApp) => {
        console.log(`createdApp ::>>`, createdApp);
        console.log(`I'm the session =>`, req.session.currentUser);
        CompanyModel.findByIdAndUpdate(req.session.currentUser, {
          $push: { apps: createdApp._id },
        })
          .then((dbRes) => {
            console.log(dbRes);
          })
          .catch((error) => {
            console.log(error);
          });
        res.status(200).json(createdApp);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
// ROUTE POUR UPDATER UNE APPLICATION
// Route protection using protectAuth middleware to prevent non-signed in users from accessing the Apps Id and App form Update
router.patch(
  "/applications/:id",
  uploader.single("appLogo"),
  (req, res, next) => {
    // let appLogo = req.file.path
    AppsModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((updatedApp) => {
        res.status(200).json(updatedApp);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
// ROUTE POUR DELETE UNE APPLICATION
router.delete("/applications/:id", (req, res, next) => {
  AppsModel.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({ message: "app deleted" });
    })
    .catch((error) => {
      console.log(error);
    });
});
module.exports = router;