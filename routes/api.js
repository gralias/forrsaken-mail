/**
 * Created by Hongcai Deng on 2015/12/28.
 * Modified by Gralias on 2020/06/13
 */

'use strict';

let express = require('express');
let router = express.Router();

router.get('/', function(req, res) {
  res.end();
});

module.exports = router;