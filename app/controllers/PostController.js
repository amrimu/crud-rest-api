const mongoose = require('mongoose');
const Posts = mongoose.model('posts');

// function for base route on "/"
exports.baseRoute = async (req,res) => {
  res.send('Server Running');
}

// function to get posts on route "/getPosts"
exports.getPosts = async (req, res) => {
  const posts = await Posts.find();
  res.json(posts);
}

// function to create a post
exports.createPost = async (req, res) => {
  // use mongodb's save functionality
  await new Posts(req.body).save((err, data) => {
    if (err) {
      res.status(500).json({
        message:
        "Something went wrong, please try again later."
      });
    } else {
      res.status(200).json({
        message: "Post Created",
        data,
      });
    }
  });
};

// function to get a single post
exports.getSinglePost = async (req, res) => {
  let postID = req.params.id;
  // use mongodb's fingById() functionality
  await Posts.findById({ _id: postID }, (err, data) => {
    if (err) {
      res.status(500).json({
        message:
        "Something went wrong, please try again later."
      });
    } else {
      console.log(data);
      res.status(200).json({
        message: "Post found",
        data,
      });
    }
  })
}

// function to update a single post
exports.updatePost = async (req, res) => {
  let postID = req.params.id;
  // use mongodb's fingByIdAndUpdate() functionality
  await Posts.findByIdAndUpdate({ _id: postID }, {$set : req.body}, (err, data) => {
    if (err) {
      res.status(500).json({
        message:
        "Something went wrong, please try again later."
      });
    } else {
      res.status(200).json({
        message: "Post updated",
        data,
      });
    }
  })
}

// function to delete a post from the DB
exports.deletePost = async (req, res) => {
  let postID = req.params.id;
  // use mongodb's deleteOne() functionality
  await Posts.deleteOne({ _id: postID }, (err, data) => {
    if (err) {
      res.status(500).json({
        message:
        "Something went wrong, please try again later."
      });
    } else {
      res.status(200).json({
        message: "Post deleted",
      });
    }
  })
}
