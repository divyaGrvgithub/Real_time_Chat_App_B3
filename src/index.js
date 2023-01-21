const express = require("express")
const mongoose = require("mongoose")
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.set("strictQuery", true)
mongoose.connect("mongodb+srv://divyamala_:Dt25042000knp@divyamala.0cofsch.mongodb.net/chat App", {
    useNewUrlParser: true
})

    .then(() => console.log("MongoDb is connected"))
    .catch((err => console.log(err)));

app.use("/")

app.listen(process.env.Port || 3000, () => {
    console.log("Express App Running On Port", +(process.env.Port || 3000))
})