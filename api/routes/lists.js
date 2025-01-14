const router= require('express').Router();
const List = require('../Models/List');
const verify = require('../verifyToken');

//CREATE
router.post('/',verify, async (req, res) => {
    if( req.user.isAdmin==true){
      const newList = new List(req.body);
        try {
            const savedList = await newList.save();
            res.status(200).json(savedList);
        } catch (err) {
            res.status(500).json(err);
        }
      
    }else{
        res.status(403).json("You are not allowed!");
    }
});

//DELETE

router.delete('/:id',verify, async (req, res) => {
    if( req.user.isAdmin==true){
        try {
           await List.findByIdAndDelete(req.params.id);
            res.status(200).json("List has been deleted...");
        } catch (err) {
            res.status(500).json(err);
        } 
    }else{
        res.status(403).json("You are not allowed!");
    }
});

//GET

router.get('/',verify, async (req, res) => {
  typeQuery = req.query.type;
  genreQuery = req.query.genre;
  let list = [];
  try {
    if(typeQuery){
      if(genreQuery){
        list = await List.aggregate([
          {$sample: {size: 10}},
          {$match: {type: typeQuery, genre: genreQuery}}
        ]);
      } else {
        list = await List.aggregate([
          {$sample: {size: 10}},
          {$match: {type: typeQuery}}
        ]);
      }
    } else {
      list = await List.aggregate([{$sample: {size: 10}}]);
    }
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json(err);
  }
}
);

//getby id

router.get('/find/:id',verify, async (req, res) => {

  try {
    const list= await List.findById(req.params.id);
      res.status(200).json(list);
  } catch (err) {
      res.status(500).json(err);
  } 
});

//update

router.put('/:id',verify, async (req, res) => {
  if( req.user.isAdmin==true){
      try {
          const updatedList= await List.findByIdAndUpdate(req.params.id, {
              $set: req.body
          }, {new: true});
          res.status(200).json(updatedList);
      } catch (err) {
          res.status(500).json(err);
      }
    
  }else{
      res.status(403).json("You are not allowed!");
  }
});

module.exports = router;




