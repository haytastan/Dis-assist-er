const express = require ('express');
const router = express.Router();
const Fund = require('../models/fund.js');
const multer = require('multer');

var imageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './imageUploads')
    },
    filename: function (req, file, cb) {
        const ext = file.mimetype.split('/')[1];
        cb(null, file.fieldname + '-' + Date.now() + '.' + ext)
    }
});


const imageUpload = multer({ storage : imageStorage});


router.get('/deleteFund/:id',function(req,res,next){
    Fund.findByIdAndDelete({_id:req.params.id}).then(function(resp){
        res.send({status: true, details: details});
    }).catch(next);
});
router.post('/addFund', imageUpload.single('image'), function(req,res,next)  {
    
    var currentTime = Date();
    currentTime = currentTime.toString().slice(4,24);

    var filename = "https://dis-assist-er.centralus.cloudapp.azure.com/surviva/"+ req.file.filename;

    var formData = {
        title: req.body.title,
        description: req.body.description,
        link: req.body.link,
        image: filename,
        time: currentTime
    } 

    Fund.create(formData).then(function(details){
        res.send({status: true, details: details});
    }).catch(function(err){
        res.send(err);
    })
});

router.get('/getFund', function (req, res, next) {
    Fund.find({}).sort({createdAt: -1}).then(function (details) {
        res.send({status: true, details: details});
    }).catch(next);
});


module.exports = router;
