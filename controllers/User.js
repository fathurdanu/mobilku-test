
const { User } = require('../models')
const baseUrl = process.env.URL || "localhost:3000";

class UserController {
    static async getAllUsers(req, res) {
        try {
            let users = await User.findAll()
            res.status(200).json(users)
        } catch (err) {
            res.status(400).json({ message: err.message })
        }
    }

    static async register(req, res) {
        try {
            const filename = `${baseUrl}/images/resized-${req.file.filename}`;
            const { nama, tanggalLahir, usia, whatsapp, asalKota, pendidikanTerakhir } = req.body
            let result = await User.create({
                nama, tanggalLahir, usia, whatsapp, asalKota, pendidikanTerakhir, image: filename
            })
            res.status(201).json(result)
        } catch (err) {
            res.status(400).json({ message: err.message })
        }
    }

    static async update(req, res) {
        try {
            const id = +req.params.id;
            const { nama, tanggalLahir, usia, whatsapp, asalKota, pendidikanTerakhir } = req.body

            let result = await User.update({
                nama, tanggalLahir, usia, whatsapp, asalKota, pendidikanTerakhir,
            },
                {
                    where: { id },
                })
            res.status(201).json(result)
        } catch (err) {
            res.status(400).json({ message: err.message })
        }
    }
    static async getUserById(req, res) {
        try {
            const id = +req.params.id
            let result = await User.findOne({
                where: { id },
            })
            res.status(200).json(result)
        } catch (err) {
            res.status(400).json({ message: err.message })
        }
    }
}

module.exports = UserController