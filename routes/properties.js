var express = require('express');
var router = express.Router();

/* GET properties page. */
router.get('/', function(req, res, next) {
  res.render('properties', { title: 'Properties' });
});

// Start Pagination
var itemsPerPage = 100;

// GET list of properties from DB, return JSON
router.get('/list', function(req, res) {
    var db = req.db;
    var collection = db.get('properties');
    collection.find({},{ limit : itemsPerPage },
        function(e,docs){
        res.json(docs);      
    });
});

router.get('/list/:page', function(req, res) {
    var page = req.params.page;
    var start = (page - 1) * itemsPerPage;
    var end = page * itemsPerPage;

    var db = req.db;
    var collection = db.get('properties');
    collection.find({},{ limit : itemsPerPage, skip : start },
        function(e,docs){
        res.json(docs);
});
});

 // POST to properties
 /*
router.post('/adduser', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});
*/

 // DELETE to delete properties
/*
router.delete('/deleteuser/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    var userToDelete = req.params.id;
    collection.remove({ '_id' : userToDelete }, function(err) {
        res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
    });
});
*/

module.exports = router;