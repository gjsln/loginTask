const express = require('express');
const router = express.Router();

// @route GET /
// @desc Tests user route
// @access Public 

router.get('/', (req, res) => res.json({
    msg: "Users Works"
}));

module.exports = router;