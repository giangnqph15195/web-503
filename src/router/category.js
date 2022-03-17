const { Router } = require('express')
const { list, add, read } = require('../controler/category')


const router = Router()

router.get("/api/categorys", list)
router.post("/api/category", add)
router.get('/api/category/:slug', read)
module.exports = router