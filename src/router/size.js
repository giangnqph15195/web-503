const {Router} = require('express')
const { listsz } = require('../controler/size')

const router = Router()

router.get('/api/size', listsz)

module.exports = router