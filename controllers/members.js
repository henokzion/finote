var mongoose = require("mongoose");

var Mem = mongoose.model("Mem");

var getMembers = (req, res)=>{
    Mem
        .find()
        .exec((err, mems) =>{
            if(err){
                res.render("error", {message : err});
                return;
            }

            res.render("member/list", {user : req.user , mems });
        });
    
}

var getMember = (req, res)=> {
    Mem
        .findById(req.params.memid)
        .exec((err, mem)=>{
            if(err){
                res.render("error", {message : err});
                return;
            }

            res.render("member/single", {user : req.user , mem });
        })
}

var createMember = (req, res) =>{
    console.log(req.body.member);
    Mem
        .create({
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            gender : req.body.gender,
            birth_day : new Date(req.body.year, req.body.month, req.body.day),
            education : req.body.education
        },
        (err)=>{
            if(err){
                res.render("error", {message : err});
                return;
            }
            res.redirect("/mems");    
        })
}

var newForm = (req, res) =>{
    res.render("member/new" ,  {user : req.user })
}

module.exports = {
    getMembers,
    createMember,
    newForm,
    getMember
}