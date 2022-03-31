const {Router} = require('express');
const { UserById } = require('../controler/checkUser');
const { getAll, get, create, remove, update } = require('../controler/product');
const { Auth, requireSignin } = require('../midawer/checkaut');

const router = Router()


const kiemtra = (req, res, next) => {
    const nhansac = true;
    if(nhansac){
        next();
    }else{
    res.redirect('/');
 }
}


router.get("/api/products",kiemtra, getAll)
router.get("/api/products/:id", get)
router.post("/api/products", create)
router.delete("/api/products/:id", kiemtra, remove)
router.put("/api/products/:id", kiemtra, update)

router.param('userId', UserById)

module.exports = router