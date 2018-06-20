import express from 'express';
import bodyParser from 'body-parser';

import users from './routes/users';
let app = express();

app.use(bodyParser.json())  // 解析client传过来的参数

app.get('/', (req, res) => {
    res.send("hello ww =.= ")
})

app.use('/api/users', users);

app.use((req, res) => {
    res.status(404).json({
        errors: {
            global: 'Still working on it. Please try again later than when we implement it'
        }
    })
})

app.listen(6060, () => { console.log("Runing on localhost:6060") })