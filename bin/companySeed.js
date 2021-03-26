const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const bcrypt = require("bcrypt");
const CompanyModel = require("../models/CompanyModel")
const bcryptSalt = 10;

require("../config/dbConnection")

let companies =[
    new CompanyModel({
        companyName: "Facebook",
        companyIndustry: "Social Media",
        representativePhotoUrl: "https://img.fifa.com/image/upload/t_s2/las4u8sddp1qdtxll9d9.jpg",
        firstName: "Simo",
        lastName: "Castex",
        representativePosition: "Head of Communication",
        email: "simo@simo.com",
        password: bcrypt.hashSync("simo", bcrypt.genSaltSync(bcryptSalt)),
        companyLogoUrl:"https://epinalinfos.fr/wp-content/uploads/2020/09/jean-castex.jpg"
      }),
      new CompanyModel({
        companyName: "YouTube",
        companyIndustry: "News/Media",
        representativePhotoUrl: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F4%2F4a%2FLENIN_MORENO.jpg&imgrefurl=https%3A%2F%2Ffr.m.wikipedia.org%2Fwiki%2FFichier%3ALENIN_MORENO.jpg&tbnid=A352E-fBhm0VwM&vet=12ahUKEwj_mob_883vAhUXw4UKHaZFDYIQMygAegUIARC-AQ..i&docid=vPVCjyvxVKSALM&w=2529&h=3543&q=Len%C3%ADn%20Moreno&hl=en&ved=2ahUKEwj_mob_883vAhUXw4UKHaZFDYIQMygAegUIARC-AQ",
        firstName: "Juan",
        lastName: "de Guatemala",
        representativePosition: "Head of IT",
        email: "juan@juan.com",
        password: bcrypt.hashSync("juan", bcrypt.genSaltSync(bcryptSalt)),
        companyLogoUrl:"https://www.geeky-gadgets.com/wp-content/uploads/2013/08/youtube-logo-new.jpg"
      }),
      new CompanyModel({
        companyName: "Twitter",
        companyIndustry: "Social Media",
        representativePhotoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/97/Denis_Sassou_Nguesso_2014.jpg",
        firstName: "Matthieu",
        lastName: "Brazzaville",
        representativePosition: "Head of HR",
        email: "matt@matt.com",
        password: bcrypt.hashSync("matt", bcrypt.genSaltSync(bcryptSalt)),
        companyLogoUrl:"https://www.cineramageddon.com/wp-content/uploads/2020/06/twitter-logo.png"
      })

]

CompanyModel.create(companies)
.then((dbcompanies)=>{
    console.log(`${companies.length} companies have been created!`, dbcompanies);
})
.catch((error)=>{
    console.log("NEW ERROR", error);
})