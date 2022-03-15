const {Router} = require('express');
const { getAll, get, create, remove } = require('../controler/product');

const router = Router()


const kiemtra = (req, res, next) => {
    const nhansac = true;
    if(nhansac){
        next();
    }else{
    res.redirect('/');
 }
}

router.get("/", kiemtra , (req,res)=>{
    res.send("<h1>Home Page</h1>")
})
router.get("/api/products",kiemtra, getAll)
router.get("/api/products/:id", get)
router.post("/api/product",kiemtra, create)
router.delete("/api/product/:id", kiemtra, remove)
router.put("/api/product/:id", kiemtra, (req,res)=>{
    const newPd = Products.map(item => item.id === + req.params.id ? req.body : item)
    res.json(newPd)
})

module.exports = router