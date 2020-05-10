const mongoose = require('mongoose');
const apidogSchema = new mongoose.Schema({
   breed: {
       type: String,
       required: true
   },
   description: {
       type: String,
       required: true
   },
   wikiLink: {
       type: String,
       required: true
   }
});

const apidog = mongoose.model("apidog", apidogSchema);
module.exports = apidog;