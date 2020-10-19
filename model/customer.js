var db = require('mongoose') ;
var schema =  db.Schema;
customerSchema = new schema({
    name: 
    {
        type : String ,
        min:10,
        max:100,
    },
    phone :
    {
        type: String,
        min:10,
        max:100,
    },
    email: 
    {
        type : String,
        min : 10,
        max : 100,
    },
    avatr : 
    {
        type : String,
      
    },

})
exports = db.model('customer', customerSchema) ;