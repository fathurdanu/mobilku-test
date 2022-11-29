const multer = require('multer');
// const sharp = require('sharp');
// const imageUploadRoute = require('express').Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './assets/img')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '--' + file.originalname)
    }
});

const upload = multer({
    storage: storage
})



// const imageUploader = multer({
//     storage,
//     fileFilter: filter
// });

// imageUploadRoute.post('/', imageUploader.single('photo'), async (req, res, next) => {
//     const path = `/${req.file.filename}`;
//     await sharp(req.file.buffer).resize(500, 500).toFile(path);
//     next();
//     res.status(401)
// });

module.exports = upload;