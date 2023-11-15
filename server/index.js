const express = require("express");
const cors = require("cors");

const connection = require("./config/db");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const catRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");


const app = express();
app.use(express.json());
app.use(
    cors({
        origin: "*",
    })
);
app.use("/images", express.static(path.join(__dirname, "/images")));


// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "images");
//     },
//     filename: (req, file, cb) => {
//         cb(null, "helloooo!.jpg");
//     },
// });

const storage = multer.diskStorage({
    destination: (req, file, abc) => {
        abc(null, "images");
    },
    filename: (req, file, abc) => {
        const { originalname } = file;
        abc(null, originalname);
        //   cb(null, req.body.name);
    },
});

const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
});

app.get("/", (req, res) => {
    res.send("hello git!")
})

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/posts", postRoute);
app.use("/categories", catRoute);

app.listen(8576, async () => {
    try {
        await connection;
        console.log("Connected to DB");
    } catch (err) {
        console.log(err);
        console.log("Disconnected to DB");
    }
    console.log("Listening on Port 8576");
});
