const { showCategory } = require('../controller/api')
const Data = require('../store/completeData')

const route = require('express').Router()

route.get('/all-data',(req,res)=>{
    res.send(Data)
})

route.get('/blog/:cat', showCategory)


module.exports = route