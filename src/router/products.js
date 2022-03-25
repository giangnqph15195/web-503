const {Router} = require('express');
const { getAll, get, create, remove, update } = require('../controler/product');
const { requiredSingin, Auth } = require('../midawer/checkaut');

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
router.post("/api/product",requiredSingin,Auth, create)
router.delete("/api/product/:id", kiemtra, remove)
router.put("/api/product/:id", kiemtra, update)

module.exports = router