var express = require('express');
var router = express.Router();


var characters = [
  {name:"La Knight Boy",imageUrl: "https://i.pinimg.com/236x/ff/bb/5f/ffbb5fee3f5590d51dd3cbe0418c85a5--character-concept-art-character-design.jpg",
  clas:"Knight",bio:"He will be an adventuer. Until he takes an arrow to the knee"}
];


/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile('dndMain.html', { root: 'public' });
});



router.get('/characterCreator', function(req, res) {
    
    console.log("Inside get character creator");
    return res.redirect('/dndCreator.html');
  //res.sendFile('dndCreator.html', { root: 'public' });
});




router.get('/characters', function(req, res) {
  console.log("In Character getting");
  res.send(characters);
});




router.post('/characters', function(req, res) {
    console.log("In Characters Post");
    console.log(req.body);
    characters.push(req.body);
    res.end('{"success" : "Updated Successfully", "status" : 200}');
}); 






module.exports = router;
