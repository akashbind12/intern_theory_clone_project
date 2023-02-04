const express = require("express")
const app = express();
const cors = require("cors");
require('dotenv').config()
app.use(express.json());


const internshipController = require("./src/controllers/internship.controller");
const jobController = require("./src/controllers/job.controller");
const classroomController = require("./src/controllers/classroom.controller")
const onlineController = require("./src/controllers/online.controller")


app.use(cors());


app.get("/",(req,res)=>{
    return res.status(200).json("Hello world")
})


app.use("/internship", internshipController);
app.use("/job", jobController);
app.use('/classroom', classroomController)
app.use('/online', onlineController)

const connect=require("./src/configs/db")

const port=process.env.PORT || 5000
app.listen(port,async()=>{
    try {
        await connect();
        console.log(`Listening on port ${port}`)
    } catch (error) {
        console.log({"error":error.message})
    }
});

module.exports = app;

