//@Mohammed. Requiring mongoose and defining the Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appsSchema = new Schema({
    appName: String,
    appLogo: {
        type: String,
        default: "https://res.cloudinary.com/djogypr9r/image/upload/v1616695400/app-default_s975ja.jpg"
    },
    appDescription: String,
    technology: {
        type: [Schema.Types.ObjectId],
        ref: "Technology"
    },
    proprietaryCompany: {
        type: Schema.Types.ObjectId,
        ref: "Company"
    },
    appCategory: {
        type: String,
        enum: ["Books", "Medical", "Business", "Music", "Coding",
        "Learning", "News/Media", "Social Media", "Entertainment",
        "Phtography/Video", "Productivity", "Food/Drinks", "Search",
        "Gaming", "Design/Graphics", "Shopping", "Health/Fitness",
        "Lifestyle", "Sport", "Kids", "Utilities"
    ]
    }
})

const AppsModel = mongoose.model("Apps", appsSchema);
module.exports = AppsModel;