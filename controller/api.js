const Data = require("../store/completeData")


const showCategory = (req,res)=>{
    const {cat}=req.params
    
    const categorizedData = Data.filter((item)=>item.cat===cat)
    res.send(categorizedData)
}

const showIndividualBlog = (req,res)=>{
    
}

module.exports = {showCategory}