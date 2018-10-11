const jsondata = [
    {
        "userName":"Kiaer",
    },
    {
        "gender": "male",
    },
    {
        "age": 50,
    }
]

import mock from 'mockjs';
const mockData = []

module.exports = {
    'GET /api/article': (req,res)=>{res.status(200).json(jsondata[0])},
    'GET /api/article/1': { id: 1 },
     // Support for custom functions, the API is the same as express@4
    'POST /api/article/create': (req, res) => { res.end('hello world2'); },
}