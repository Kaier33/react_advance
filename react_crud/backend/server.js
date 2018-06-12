import express from 'express';
import mongodb from 'mongodb';

const app = express();
const dbUrl = "mongodb://localhost";

mongodb.MongoClient.connect(dbUrl, (err, client) => {
    if (err) throw err;

    const db = client.db('crud');

    app.get('/api/games', (req, res) => {
        db.collection('games').find({}).toArray((err, games) => {
            res.json({ games });
        });
    });
    app.listen(8585, () => { console.log('server is running on localhost:8585') });
})