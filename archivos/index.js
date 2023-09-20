import express from "express";
import multer from "multer";
import { dirname, extname, join } from "path";
import { fileURLToPath } from "url";
const PORT = process.env.PORT || 4000;
console.log(PORT);

const app = express();
const CURRENT_DIR = dirname(fileURLToPath(import.meta.url));
const MIMETYPES = ["image/jpeg", "image/png"];

const upload = multer({
    storage: multer.diskStorage({
        destination: join(CURRENT_DIR, "./files"),
        filename: (req, file, cb) => {
            const fileExtension = extname(file.originalname);
            const fileName = file.originalname.split(fileExtension)[0];

            cb(null, `${fileName}-${Date.now()}${fileExtension}`);
        },
    }),
    fileFilter: (req, file, cb) => {
        if (MIMETYPES.includes(file.mimetype)) cb(null, true);
        else cb(new Error(`Only ${MIMETYPES.join(" ")} mimetypes are allowed`));
    },
    limits: {
        fieldSize: 10000000,
    },
});
app.use(express.json());

app.post("/api/upload", upload.single("file"), (req, res) => {
    console.log(req.file);
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Estamos supuestamente arriba 👀`);
});
