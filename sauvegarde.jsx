//companySEED

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

//AppSEED

require("dotenv").config();
require('./../config/dbConnection');

const { Mongoose } = require("mongoose");
const AppsModel = require("./../models/AppsModel")

const apps = [
    

{
    appName: "Instagram",
    appLogo: "https://res.cloudinary.com/djogypr9r/image/upload/v1616764900/ig-logo_c5pat9.webp",
    appDescription: "Instagram is an American photo and video sharing social networking service owned by Facebook, created by Kevin Systrom and Mike Krieger and originally launched on iOS in October 2010.",
    appCategory: "Social Media",
    proprietaryCompany: "6064f812d68b837716ee8d9e",
    technology:["6064e3093bbd986a133a9fc9", "6064e3093bbd986a133a9fcb", "6064e3093bbd986a133a9fe4", "6064e3093bbd986a133a9fdb", "6064e3093bbd986a133a9fd2", "6064e3093bbd986a133a9fdc", "6064e3093bbd986a133a9fdd", "6064e3093bbd986a133a9fde", "6064e3093bbd986a133a9fcd", "6064e3093bbd986a133a9fd9", "6064e3093bbd986a133a9fdf", "6064e3093bbd986a133a9fe2", "6064e3093bbd986a133a9fe0"]

},
{
    appName: "Facebook",
    appLogo: "http://unikeo.net/blog/wp-content/uploads/2014/01/fb.png",
    appDescription: "Facebook is an American online social media and social networking service founded by Mark Zuckerberg and based in Menlo Park, California.",
    appCategory: "Social Media",
    proprietaryCompany: "6064f812d68b837716ee8d9e",
    technology:["6064e3093bbd986a133a9fc9", "6064e3093bbd986a133a9fcb", "6064e3093bbd986a133a9fe4", "6064e3093bbd986a133a9fdb", "6064e3093bbd986a133a9fd2", "6064e3093bbd986a133a9fdc", "6064e3093bbd986a133a9fdd", "6064e3093bbd986a133a9fde", "6064e3093bbd986a133a9fcd", "6064e3093bbd986a133a9fd9", "6064e3093bbd986a133a9fdf", "6064e3093bbd986a133a9fe2", "6064e3093bbd986a133a9fe0"]

},

{
    appName: "Twitter",
    appLogo: "https://www.cineramageddon.com/wp-content/uploads/2020/06/twitter-logo.png",
    appDescription: "Twitter is an American microblogging and social networking service on which users post and interact with messages known as tweets." ,
    appCategory: "Social Media",
    proprietaryCompany: "6064f812d68b837716ee8da0",
    technology:["6064e3093bbd986a133a9fc9","6064e3093bbd986a133a9fcd", "6064e3093bbd986a133a9fe3", "6064e3093bbd986a133a9fe4", "6064e3093bbd986a133a9fce", "6064e3093bbd986a133a9fe2"]


},

{
    appName: "YouTube",
    appLogo: "https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c545.png",
    appDescription: "YouTube is an American online video-sharing platform headquartered in San Bruno, California.",
    appCategory: "News/Media",
    proprietaryCompany: "6064f812d68b837716ee8d9f",
    technology:["6064e3093bbd986a133a9fc9", "6064e3093bbd986a133a9fd0", "6064e3093bbd986a133a9fcd", "6064e3093bbd986a133a9fcb", "6064e3093bbd986a133a9fe4", "6064e3093bbd986a133a9fd4", "6064e3093bbd986a133a9fd8", "6064e3093bbd986a133a9fd9", "6064e3093bbd986a133a9fda"]

},

{
    appName: "Google",
    appLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png",
    appDescription: "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.",
    appCategory: "Search",
    proprietaryCompany: "6064f812d68b837716ee8da1",
    technology:["6064e3093bbd986a133a9fc9", "6064e3093bbd986a133a9fd7","6064e3093bbd986a133a9fd0" , "6064e3093bbd986a133a9fcd","6064e3093bbd986a133a9fcb" ,"6064e3093bbd986a133a9fe4" , "6064e3093bbd986a133a9fd4","6064e3093bbd986a133a9fd8" , "6064e3093bbd986a133a9fd9"]

},
{
    appName: "Pinterest",
    appLogo: "https://www.evasionen2cv.com/wp-content/uploads/2016/03/Pinterest-Logo.png",
    appDescription: "Pinterest is an American image sharing and social media service designed to enable saving and discovery of information on the internet using images and, on a smaller scale, animated GIFs and videos, in the form of pinboards.",
    appCategory: "Social Media",
    proprietaryCompany: "6064f812d68b837716ee8da2",
    technology:["6064e3093bbd986a133a9fc9", "6064e3093bbd986a133a9fcb", "6064e3093bbd986a133a9fde", "6064e3093bbd986a133a9fe2", "6064e3093bbd986a133a9fe1"]

},
{
    appName: "General Motors",
    appLogo: "https://static.dezeen.com/uploads/2021/01/gm-logo-rebrand-electric-vehicles-design_dezeen_2364_col_0-1.gif",
    appDescription: "General Motors Company (GM) is an American multinational corporation headquartered in Detroit that designs, manufactures, markets, and distributes vehicles and vehicle parts, and sells financial services, with global headquarters in Detroit's Renaissance Center.",
    appCategory: "Business",
    proprietaryCompany: "6064f812d68b837716ee8da3",
    technology:["6064e3093bbd986a133a9fcd", "6064e3093bbd986a133a9fd1", "6064e3093bbd986a133a9fc9"]

},
{
    appName: "Apple",
    appLogo: "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201810271035",
    appDescription: "Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services.",
    appCategory: "Productivity",
    proprietaryCompany: "6064f812d68b837716ee8da4",
    technology:["6064e3093bbd986a133a9fcd", "6064e3093bbd986a133a9fcb", "6064e3093bbd986a133a9fe4", "6064e3093bbd986a133a9fcc", "6064e3093bbd986a133a9fce", "6064e3093bbd986a133a9fd2"]

},
{
    appName: "IBM",
    appLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1000px-IBM_logo.svg.png",
    appDescription: "International Business Machines Corporation (IBM) is an American multinational technology company headquartered in Armonk, New York, with operations in over 170 countries.",
    appCategory: "Productivity",
    proprietaryCompany: "6064f812d68b837716ee8da5",
    technology:["6064e3093bbd986a133a9fe4", "6064e3093bbd986a133a9fd3", "6064e3093bbd986a133a9fcf"]

},
{
    appName: "Amazon",
    appLogo: "https://i.pinimg.com/originals/08/5f/d8/085fd8f7819dee3b716da73d3b2de61c.jpg",
    appDescription: "Amazon.com, Inc. is an American multinational technology company based in Seattle, Washington, which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    appCategory: "Shopping",
    proprietaryCompany: "6064f813d68b837716ee8da6",
    technology:["6064e3093bbd986a133a9fe4", "6064e3093bbd986a133a9fc9", "6064e3093bbd986a133a9fcd", "6064e3093bbd986a133a9fce", "6064e3093bbd986a133a9fcf"]

},
{
    appName: "Fannie Mae",
    appLogo: "https://media.glassdoor.com/sqll/247/fannie-mae-squarelogo-1462205683111.png",
    appDescription: "The Federal National Mortgage Association (FNMA), commonly known as Fannie Mae, is a United States government-sponsored enterprise (GSE) and, since 1968, a publicly traded company.",
    appCategory: "Business",
    proprietaryCompany: "6064f813d68b837716ee8da7",
    technology:["6064e3093bbd986a133a9fe4", "6064e3093bbd986a133a9fcb", "6064e3093bbd986a133a9fce"]

},
{
    appName: "HP",
    appLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1024px-HP_logo_2012.svg.png",
    appDescription: "The Hewlett-Packard Company, commonly shortened to Hewlett-Packard or HP, was an American multinational information technology company headquartered in Palo Alto, California, that developed and provided a wide variety of hardware components, as well as software and related services to consumers, small and medium-sized businesses (SMBs) and large enterprises, including customers in the government, health and education sectors.",
    appCategory: "Utilities",
    proprietaryCompany: "6064f813d68b837716ee8da8",
    technology:["6064e3093bbd986a133a9fd0", "6064e3093bbd986a133a9fcd", "6064e3093bbd986a133a9fcb"]

}

];

const oneApp = [
  {
    appName: "SimoApp",
    appLogo:
      "https://res.cloudinary.com/djogypr9r/image/upload/v1616765562/quora_n18d7f.png",
    appDescription: "Juan App Description",
    appCategory: "Search",
    technology: ["605deb5914db1951c4a970df", "605deb5914db1951c4a970e1"],
    proprietaryCompany: "605deabcecdb5d52065fd20b",
    appCategory: "News/Media"
  }
];



AppsModel.create(apps)
    .then((dbRes) => {
        console.log(dbRes);
    })
    .catch((error) => {
        console.log(error);
    });

    // mongoose.connection.close();


// technologySEED

require("dotenv").config();
require("../config/dbConnection");
const TechnologyModel = require("../models/TechnologyModel")

const someTechnologies = [
  {
    name: "Javascript",
    category: "Front-End",
    logo:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
  },
  {
    name: "MongoDB",
    category: "Database",
    logo:
      "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-mongodb/events/mon.png",
  },
  {
    name: "Python",
    category: "Back-End",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png",
  },
  {
    name: "Perl",
    category: "Back-End",
    logo:
    "https://cdn.worldvectorlogo.com/logos/perl-programming-language.svg",
  },
  {
    name: "C++",
    category: "Back-End",
    logo:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
  },
  {
    name: "Ruby",
    category: "Back-End",
    logo:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1024px-Ruby_logo.svg.png",
  },
  {
    name: "Swift",
    category: "Back-End",
    logo:
    "https://images.squarespace-cdn.com/content/558def25e4b0fc259f066636/1533762221470-KIKXY2VN1CIA6IUA3O03/Swift_logo.png?content-type=image%2Fpng",
  },
  {
    name: "C",
    category: "Back-End",
    logo:
    "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
  },
  {
    name: "C#",
    category: "Back-End",
    logo:
    "https://camo.githubusercontent.com/8d56e87edf99e89bfc457cd62462e0b7aae19e6b197b1df5c542d474d8d76f81/68747470733a2f2f646576656c6f7065722e6665646f726170726f6a6563742e6f72672f7374617469632f6c6f676f2f6373686172702e706e67",
  },
  {
    name: "PHP",
    category: "Back-End",
    logo:
    "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/256_Php_logo-512.png",
  },
  {
    name: "Groovy",
    category: "Back-End",
    logo:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Groovy-logo.svg/1200px-Groovy-logo.svg.png",
  },
  {
    name: "Go",
    category: "Back-End",
    logo:
    "https://sdtimes.com/wp-content/uploads/2018/02/golang.sh_-490x490.png",
  },
  {
    name: "R",
    category: "Back-End",
    logo:
    "https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/69/formation-langage-r.png",
  },
  {
    name: "Objectif-C",
    category: "Back-End",
    logo:
    "https://apprecs.org/ios/images/app-icons/256/c2/486204866.jpg",
  },
  {
    name: "Typescript",
    category: "Back-End",
    logo:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
  },
  {
    name: "Bigtable",
    category: "Back-End",
    logo:
    "https://dbdb.io/media/logos/Cloud_Bigtable.png",
  },
  {
    name: "MariaDB",
    category: "Back-End",
    logo:
    "https://res.cloudinary.com/dsldnzayz/image/upload/v1617210828/mariadb_ukn8g8.png",
  },
  {
    name: "Vitess",
    category: "Back-End",
    logo:
    "https://www.gstatic.com/opensource/project-images/vitess/logo.svg",
  },
  {
    name: "Askell",
    category: "Back-End",
    logo:
    "https://cdn.worldvectorlogo.com/logos/haskell.svg",
  },
  {
    name: "Hack",
    category: "Back-End",
    logo:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Hack_%28programming_language%29_logo.svg/1200px-Hack_%28programming_language%29_logo.svg.png",
  },
  {
    name: "XHP",
    category: "Back-End",
    logo:
    "https://res.cloudinary.com/dsldnzayz/image/upload/v1617208772/xhp_kwygpx.png",
  },
  {
    name: "Erlang",
    category: "Back-End",
    logo:
    "https://res.cloudinary.com/dsldnzayz/image/upload/v1617208897/erlang_oj6umy.png",
  },
  {
    name: "Hbase",
    category: "Back-End",
    logo:
    "https://res.cloudinary.com/dsldnzayz/image/upload/v1617211011/hbase-logo_u0dmlx.png",
  },
  {
    name: "Cassandra",
    category: "Back-End",
    logo:
    "https://res.cloudinary.com/dsldnzayz/image/upload/v1617209559/1280px-Cassandra_logo.svg_xysrsu.png",
  },
  {
    name: "Reddis",
    category: "Back-End",
    logo:
    "https://res.cloudinary.com/dsldnzayz/image/upload/v1617209056/reddis_oif8z2.png",
  },
  {
    name: "MySQL",
    category: "Back-End",
    logo:
    "https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png",
  },
  {
    name: "Scala",
    category: "Back-End",
    logo:
    "https://www.scala-lang.org/resources/img/frontpage/scala-spiral.png",
  },
  {
    name: "Java",
    category: "Back-End",
    logo:
    "https://www.blockachain.gr/wp-content/uploads/2018/03/java-coffee-cup-logo.png",
  }
];

TechnologyModel.create(someTechnologies)
.then((technology)=>{
    console.log("New Technology added to the DB", technology);
})
.catch((error)=>{
    console.log(error);
})

;