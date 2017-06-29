var mongoose = require("mongoose");

var memberSchema = mongoose.Schema({
    first_name : {
        type : String,
        required : true
    },
    last_name : {
        type : String,
        required : true
    },
    gender :{
        type : String,
        required : true
    },
    birth_day : {
        type : Date
    },
    education : {
        type : String
    },
    created_at : {
        type : Date,
        "default" : Date.now()
    }
})


mongoose.model('Mem', memberSchema);