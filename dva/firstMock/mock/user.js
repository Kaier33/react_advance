import Mock from 'mockjs';

module.exports = {
  'GET /api/user': (req,res)=>{res.status(200).json({'data': Mock.mock(
    {
       // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'str|1-3': "❤",
        email: "@email"
        }]
    }    
  )})},
  'GET /api/users/1': { id: 1 },
   // Support for custom functions, the API is the same as express@4
  'POST /api/users/create': (req, res) => { res.end('hello world'); },
}