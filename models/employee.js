var mongoose = require('mongoose');
var Schema = mongoose.Schema;
EmpSchema = new Schema({
 img:
{ data: Buffer,
  contentType: String },


  name : String,
  fathername: String,
  phonenumber: String,
  email:String
});
module.exports = mongoose.model('studentdetail', EmpSchema);
