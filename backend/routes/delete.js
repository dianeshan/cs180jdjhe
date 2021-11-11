const router = require('express').Router();
const JSONDATA = require('../data.js');
let RecalculateFeatureTime = require("./featuretime.js").RecalculateFeatureTime;
let RecalculateFeature1 =  require("./feature1.js").RecalculateFeature1;
let RecalculateFeatureRepeats = require('./featurerepeats.js').RecalculateFeatureRepeats;
let RecalculateFeatureVPC = require("./featureVPC.js").RecalculateFeatureVPC;

// this route does the deleting
router.route('/summonsNum=:sumNum').get((req, res) => {
  const sumNum = req.params.sumNum;
  console.log('\nDelete function:');
  console.log('Wants to delete ' + sumNum);

  const index = JSONDATA.findIndex((x) => x['Summons Number'] == sumNum);

  if (index != -1) {
    console.log('index = ' + index);
    JSONDATA.splice(index, 1);
    console.log('After removal length:', JSONDATA.length);
    res.send(sumNum + ' has been deleted');
  } else {
    console.log('Summons Number does not exist');
    res.send(sumNum + ' does not exist');
  }

  RecalculateFeatureTime = 1;
  RecalculateFeature1 = 1;
  RecalculateFeatureRepeats = 1;
  RecalculateFeatureVPC = 1;

  console.log('Delete function ends.\n');
});

module.exports = router;
