const express = require("express");
const { ObjectId } = require("mongodb");
const router = express.Router();
const connection = require('./connections');

router.get('/', (req, res) => {
    res.send("Hello gan!");
});

router.get('/users', async (req, res) => {
    try {
        const db = connection.db('userDB');
        const users = await db.collection('users').find().toArray();
        res.send({ data: users });
    } catch (err) {
        res.send({ message: err.message || 'internal server error' });
    }
});

router.post('/users', async (req, res) => {
    try {
        const { name, age } = req.body;
        const db = connection.db('userDB');
        const users = await db.collection('users').insertOne({
            name,
            age
        });
        res.send({message: "Data berhasil di tambahkan"});
    } catch (err) {
        res.send({ message: err.message || 'internal server error' });
    }
});

router.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age } = req.body;
        const db = connection.db('userDB');
        const users = await db.collection('users').updateOne({ _id: ObjectId(id) }, {
            $set: {
                name,
                age
            }
        });

        if(users.modifiedCount === 1) {
            res.send({message: "Berhasil ditambahkan"});
        } else {
            res.send({message: "Gagal menambahkan"});
        }
    } catch (err) {
        res.send({ message: err.message || 'internal server error' });
    }
});

router.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const db = connection.db('userDB');
        const users = await db.collection('users').deleteOne({ _id: ObjectId(id) });
        if(users.deletedCount === 1) {
            res.send({message: "Berhasil menghapus"});
        } else {
            res.send({message: "Gagal menghapus"});
        }
    } catch (err) {
        res.send({ message: err.message || 'internal server error' });
    }
});

module.exports = router;