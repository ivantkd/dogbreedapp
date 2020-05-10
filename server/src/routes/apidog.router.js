const express = require('express');
const apidogRouter = express.Router();
const apidog = require('../models/apidog.model'); // post model

/* Get all Posts */
apidogRouter.get('/', (req, res, next) => {
  apidog.find({} , function(err, result){
        if(err){
            res.status(400).send({
                'success': false,
                'error': err.message
            });
        }
        res.status(200).send({
            'success': true,
            'data': result
        });
    });
});

/* Get Single Post */
apidogRouter.get("/:post_id", (req, res, next) => {
  apidog.findById(req.params.post_id, function (err, result) {
        if(err){
             res.status(400).send({
               success: false,
               error: err.message
             });
        }
        res.status(200).send({
            success: true,
            data: result
        });
     });
});

/*
apidogRouter.post("/", async (request, response, next) => {
    try {
        console.log(request.body);
        const post = new Post(request.body);
        const result = await post.save();
        response.send(result);
        //response.json(result);
    } catch (error) {
        //console.log(error)
        response.status(500).send(error);
        next(error);
    }
});
*/

/* Add Single Post */
apidogRouter.post("/", (req, res, next) => {
  let newPost = {
    breed: req.body.breed,
    description: req.body.description,
    wikiLink: req.body.wikiLink
  };
  apidog.create(newPost, function(err, result) {
    if(err){
        res.status(400).send({
          success: false,
          error: err.message
        });
    }
      res.status(201).send({
        success: true,
        data: result,
        message: "Post created successfully"
      });
  });
});

/* Edit Single Post */
apidogRouter.patch("/:post_id", (req, res, next) => {
  let fieldsToUpdate = req.body;
  apidog.findByIdAndUpdate(req.params.post_id,{ $set: fieldsToUpdate }, { new: true },  function (err, result) {
      if(err){
          res.status(400).send({
             success: false,
            error: err.message
            });
      }
      res.status(200).send({
        success: true,
        data: result,
        message: "Post updated successfully"
        });
  });
});

/* Delete Single Post */
apidogRouter.delete("/:post_id", (req, res, next) => {
  apidog.findByIdAndDelete(req.params.post_id, function(err, result){
      if(err){
        res.status(400).send({
          success: false,
          error: err.message
        });
      }
    res.status(200).send({
      success: true,
      data: result,
      message: "Post deleted successfully"
    });
  });
});

module.exports = apidogRouter;