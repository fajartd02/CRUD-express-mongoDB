const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/userDB', (err, client) => {
  if (err) throw err

  const db = client.db('userDB')

  db.collection('users').find().toArray((err, result) => {
    if (err) throw err

    console.log(result)
  })
})
