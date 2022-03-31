const {Router} = require('express')
const { listcard } = require('../controler/card')

const router = Router()


router.get("/api/card" , listcard)

module.exports = router