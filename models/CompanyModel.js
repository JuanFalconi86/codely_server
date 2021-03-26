const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    companyName: String,
    companyIndustry: {
      type:String,
      enum: ["Banking", "Software", "Automotive", "Pharma", "Telecom",
        "Metals & Mining", "News/Media", "Social Media", "Real Estate", "Infrastructure & Construction", "FMCG", "Energy", "Financial Services"
    ]
    },
    representativePhotoUrl: {
      type: String,
      default: "https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg"
    },
    representativeFirstName: String,
    representativeLastName: String,
    representativePosition: String,
    representativeEmail: String,
    representativePassword: String,
    companyLogoUrl: {
      type: String,
      default: "https://yoda.youthhubafrica.org/wp-content/uploads/2017/09/hkx40wm1lkzzqy35kptv.png"
    }
  },
  {
    timestamps: true
  }
);

const CompanyModel = mongoose.model("Company", schema);

module.exports = CompanyModel;
