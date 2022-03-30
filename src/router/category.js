const { Router } = require('express')
const {add, read, getall, edit, get, removect } = require('../controler/category')


const router = Router()

router.get("/api/categorys", getall)
router.get("/api/categorys/:id", get)
router.post("/api/categorys", add)
router.get('/api/category/:slug', read)
router.put('/api/category/:id/edit', edit)
router.delete('/api/category/:id', removect)


module.exports = router