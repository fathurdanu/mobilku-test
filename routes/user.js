const userRoutes = require('express').Router();
const UserController = require('../controllers/User')
const upload = require('../middlewares/multer');
const path = require('path');
const sharp = require('sharp');
const fs = require('fs');

userRoutes.get('/', async (req, res) => {
    const response = await UserController.getAllUsers(req, res);
    res.status(200).json(response)
})

userRoutes.get('/:id', async (req, res) => {
    const response = await UserController.getUserById(req, res);
    res.status(200).json(response)
})

userRoutes.post('/', upload.single('image'), async (req, res) => {
    await sharp(req.file.path).resize(500, 500).toFile('./assets/img/resized-' + req.file.filename);
    fs.unlinkSync(req.file.path);
    const response = await UserController.register(req, res);
    res.status(200).json({ response })
})

userRoutes.put('/:id', async (req, res) => {
    const response = await UserController.update(req, res);
    res.status(200).json(response)
})

module.exports = userRoutes;