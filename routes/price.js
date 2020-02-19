var express = require('express');
var router = express.Router();

var prices = {"p0001": 1000, "p0002": 2500, "p0003": 3000};
/* GET home page. */
router.get('/:productId', function(req, res, next) {
    
    var productId = req.params["productId"];
    console.log(productId);
    res.status(200).send(''+prices[productId]);
});

module.exports = router;
