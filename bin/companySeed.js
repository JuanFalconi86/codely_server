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
        representativePhotoUrl: "https://img-0.journaldunet.com/M0Rry_97U_EnJy_IGrIeoxkRFUY=/1280x/smart/7cfa455788b7461ea1782b0b72e31c8f/ccmcms-jdn/2383369.jpg",
        firstName: "Mark",
        lastName: "zuckerberg",
        representativePosition: "CEO",
        email: "mark@facebook.com",
        password: bcrypt.hashSync("mark", bcrypt.genSaltSync(bcryptSalt)),
        companyLogoUrl:"http://unikeo.net/blog/wp-content/uploads/2014/01/fb.png"
      }),
      new CompanyModel({
        companyName: "YouTube",
        companyIndustry: "News/Media",
        representativePhotoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Susan_Wojcicki_%2829393944130%29_%28cropped%29.jpg",
        firstName: "Susan",
        lastName: " Wojcicki",
        representativePosition: "CEO",
        email: "susan@youtube.com",
        password: bcrypt.hashSync("susan", bcrypt.genSaltSync(bcryptSalt)),
        companyLogoUrl:"https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c545.png"
      }),
      new CompanyModel({
        companyName: "Twitter",
        companyIndustry: "Social Media",
        representativePhotoUrl: "https://variety.com/wp-content/uploads/2016/07/twitter-jack-dorsey-e1533736603829.jpg?w=681&h=383&crop=1",
        firstName: "Jack",
        lastName: "Dorsey",
        representativePosition: "CEO",
        email: "jack@twitter.com",
        password: bcrypt.hashSync("jack", bcrypt.genSaltSync(bcryptSalt)),
        companyLogoUrl:"https://www.cineramageddon.com/wp-content/uploads/2020/06/twitter-logo.png"
      }), 
      new CompanyModel({
        companyName: "Google",
        companyIndustry: "Software",
        representativePhotoUrl: "https://image.cnbcfm.com/api/v1/image/103589049-GettyImages-464955430.jpg?v=1589308333&w=1400&h=950",
        firstName: "Sundar",
        lastName: "Pichai",
        representativePosition: "CEO",
        email: "sundar@google.com",
        password: bcrypt.hashSync("sundar", bcrypt.genSaltSync(bcryptSalt)),
        companyLogoUrl:"https://www.cineramageddon.com/wp-content/uploads/2020/06/twitter-logo.png"
      }), 
      new CompanyModel({
        companyName: "Pinterest",
        companyIndustry: "Social Media",
        representativePhotoUrl: "https://i.insider.com/5bd1d2325f5e9514c244a886?width=1136&format=jpeg",
        firstName: "Ben",
        lastName: "Silbermann",
        representativePosition: "CEO",
        email: "ben@pinterest.com",
        password: bcrypt.hashSync("ben", bcrypt.genSaltSync(bcryptSalt)),
        companyLogoUrl:"https://www.evasionen2cv.com/wp-content/uploads/2016/03/Pinterest-Logo.png"
      }), 
      new CompanyModel({
        companyName: "General Motors",
        companyIndustry: "Automotive",
        representativePhotoUrl: "https://content.fortune.com/wp-content/uploads/2014/12/ap490436847227.jpg",
        firstName: "Mary",
        lastName: "Barra",
        representativePosition: "CEO",
        email: "mary@gm.com",
        password: bcrypt.hashSync("mary", bcrypt.genSaltSync(bcryptSalt)),
        companyLogoUrl:"https://static.dezeen.com/uploads/2021/01/gm-logo-rebrand-electric-vehicles-design_dezeen_2364_col_0-1.gif"
      }), 
      new CompanyModel({
        companyName: "Apple",
        companyIndustry: "Software",
        representativePhotoUrl: "https://mediad.publicbroadcasting.net/p/shared/npr/styles/x_large/nprshared/202001/693768072.jpg",
        firstName: "Tim",
        lastName: "Cook",
        representativePosition: "CEO",
        email: "tim@apple.com",
        password: bcrypt.hashSync("tim", bcrypt.genSaltSync(bcryptSalt)),
        companyLogoUrl:"https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201810271035"
      }), 
      new CompanyModel({
        companyName: "IBM",
        companyIndustry: "Software",
        representativePhotoUrl: "https://images.itnewsinfo.com/lmi/articles/grande/000000070481.jpg",
        firstName: "Arvind",
        lastName: "Krishna",
        representativePosition: "CEO",
        email: "arvind@ibm.com",
        password: bcrypt.hashSync("arvind", bcrypt.genSaltSync(bcryptSalt)),
        companyLogoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1000px-IBM_logo.svg.png"
      }), 
      new CompanyModel({
        companyName: "Amazon",
        companyIndustry: "Software",
        representativePhotoUrl: "https://chiefexecutive.net/wp-content/uploads/2018/09/bezos-final-0404-compressor-e1536084406403.jpg",
        firstName: "Jeff",
        lastName: "Bezos",
        representativePosition: "CEO",
        email: "jeff@amazon.com",
        password: bcrypt.hashSync("jeff", bcrypt.genSaltSync(bcryptSalt)),
        companyLogoUrl:"https://i.pinimg.com/originals/08/5f/d8/085fd8f7819dee3b716da73d3b2de61c.jpg"
      }), 
      new CompanyModel({
        companyName: "Fannie Mae",
        companyIndustry: "Financial Services",
        representativePhotoUrl: "https://nationalmortgageprofessional.com/sites/default/files/Hugh_Frater_Pic.jpg",
        firstName: "Hugh",
        lastName: "R. Frater",
        representativePosition: "CEO",
        email: "hugh@fanniemae.com",
        password: bcrypt.hashSync("hugh", bcrypt.genSaltSync(bcryptSalt)),
        companyLogoUrl:"https://media.glassdoor.com/sqll/247/fannie-mae-squarelogo-1462205683111.png"
      }), 
      new CompanyModel({
        companyName: "HP",
        companyIndustry: "Software",
        representativePhotoUrl: "https://www.crn.com/resources/0254-0d52ff632618-e91f48ab769d-1000/hp-enrique-lores.jpg",
        firstName: "Enrique",
        lastName: "Lores",
        representativePosition: "CEO",
        email: "enrique@hp.com",
        password: bcrypt.hashSync("enrique", bcrypt.genSaltSync(bcryptSalt)),
        companyLogoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1024px-HP_logo_2012.svg.png"
      })
      

]

CompanyModel.create(companies)
.then((dbcompanies)=>{
    console.log(`${companies.length} companies have been created!`, dbcompanies);
})
.catch((error)=>{
    console.log("NEW ERROR", error);
})