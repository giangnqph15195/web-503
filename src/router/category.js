const { Router } = require('express')
const {add, read, getall, edit, get } = require('../controler/category')


const router = Router()

router.get("/api/categorys", getall)
router.get("/api/category/:id", get)

router.post("/api/categorys", add)
router.get('/api/category/:slug', read)
router.put('/api/category/:id/edit', edit)

module.exports = router