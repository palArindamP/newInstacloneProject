const express = require("express")
const mongoose = require("mongoose")
const port = 8080 || process.env.PORT
const path = require("path")
const fileSchema = require("./model/modelSchema")
const fileUpload = require("express-fileupload")
const { v4: uuidv4 } =require("uuid")


const app = express()
app.use(cors())
app.use(fileUpload())
app.use(express.json())

mongoose.connect("mongodb+srv://arindam:arindam@cluster0.n66v0iz.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTropology: true}).then(() =>{
    console.log("Connected")
})  .catch((err) =>{
    console.log(err)
})

app.listen(port, () => {
    console.log(`Server is starting at ${port}`)
})

// post request
app.post("/user", async (req, res) => {
    
    const { fileName } = req.files; 
    const imgName = fileName.name.split("."); 
    const imgExt = imgName[imgName.length - 1];  
    const uploaded_fileName = uuidv4() + "." + imgExt;  
    
    const likes = Math.floor(Math.random() * 100 + 1);
   
    if (['jpg', 'png', 'gif', 'jpeg'].includes(imgExtension)) {

        fileName.mv(path.join(__dirname, "../imageStore", uploaded_fileName), async (err) => {
            try {
                if (err) {
                    res.status(404).send({
                        status: "failed",
                        message: e.message
                    })
                } else {
                    const { author, location, description } = req.body;
                    const data = await collection.create({
                        author,
                        location,
                        description,
                        fileName: uploaded_fileName,
                        likes: likes
                    });
                    res.status(200).json({
                        status: "sucessfull",
                        result: data
                    })
                }
            } catch (err) {
                res.status(400).send({
                    status: "failed",
                    data: err.message
                })
            }
        })
    } else {
        req.status(400).send({
            status: "failed",
            err: "File should be image"
        })
    }
})

// get request
app.get("/user", async (req, res) => {
    
    try {
        const data = await collection.find()
        res.status(200).json({
            status: "sucessfull",
            result: data
        })
    } catch (err) {
        res.status(404).send({
            status: "failed",
            data: err.message
        })
    }
})
app.get("/user/:fileName", async (req, res) => {

    try {
        const imgFilePath = req.params.fileName
        res.status(200).sendFile(path.join(__dirname, "../uploads", imgFilePath))
    } catch (err) {
        res.status(404).send({
            status: "failed",
            data: err.message
        })
    }
})


