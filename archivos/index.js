require("dotenv").config();
const express = require("express");
const multer = require("multer");
const PORT = process.env.PORT;
console.log(PORT);

const app = express();
app.use(express.json());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + "-" + uniqueSuffix + ".zip");
    },
});

const upload = multer({ storage: storage });

app.post("/zip", upload.single("zip"), (req, res) => {
    const body = req.body;
    const zip = req.file;
    console.log(zip);
    res.json(body);
});

app.listen(PORT, () => {
    console.log(`Estamos supuestamente arriba 👀`);
});
