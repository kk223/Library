const express = require('express');
const router = express.Router();
const books= require('./books.entity');

/*
 * What this API do: It'll pass the user detail and fetch the database in order to decide whether the user exist or not and
 *                   on the basis of that preform the desired action
 */

 router.post('/:addbooks',function(req,res){
     let bookname= req.params.addbooks;
     let book = new books({bookname:bookname})
     console.log("book value",bookname);
     book.save(function(err,data){
       if (err){
       res.status(500).send('Failed to complete operation....!')
     }else{
       res.status(200).send({res:'succesfully added'});
     }
     });
 });
// this function is to delete books from favorite list in our database
router.get('/viewbooks', function(req, res) {
  console.log("inside route to get favorite books")
        books.find({},function(err,data) {
          if (err){
          res.status(500).send({error: 'Failed to complete operation...!'});
            }
          else{
            console.log("data",data)
            res.status(200).send(data);
          }
        });
});
// this function is to delete books from favorite list in our database
router.delete('/:bookname',function(req,res){
      console.log("inside rote to delete from favorite list")
    let bookname = req.params.bookname;
    books.deleteOne({bookname:bookname},function(err,data){
      if(err){
        res.status(500).send({err:'Failed to complete operation...!'});
      }
      else{
        res.status(200).send('done')
      }
    });
});

module.exports = router;
