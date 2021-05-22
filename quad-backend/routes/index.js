var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

/* GET home page. */
router.get('/', function(req, res, next) {
  fetch('https://api.wazirx.com/api/v2/tickers')
  .then(resp => resp.json())
  .then(json => {
    console.log(json);
    const result = [];
    for (const key in json) {
      if (Object.hasOwnProperty.call(json, key)) {
        const data = json[key];
        const { name, last,buy,sell,volume, base_unit } = data;
        result.push({name,last,buy,sell,volume,base_unit});
      }
    }
    res.render('index', { result });
  })
  .catch(err=>{console.log(err)});
});

router.get('/data', function(req,res, next) {
  fetch('https://api.wazirx.com/api/v2/tickers')
  .then(resp => resp.json())
  .then(json => {
    console.log(json);
    const result = [];
    for (const key in json) {
      if (Object.hasOwnProperty.call(json, key)) {
        const data = json[key];
        const { name, last,buy,sell,volume, base_unit } = data;
        result.push({name,last,buy,sell,volume,base_unit});
      }
    }
    res.send(result);
  })
  .catch(err=>{console.log(err)});
});

module.exports = router;
