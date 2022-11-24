const express = require('express')
const router = express.Router() // to create different routes
// import the controller function
const postController = require('../controllers/PostController')

// use
router.get('/', postController.baseRoute)

// create
router.post('/posts', postController.createPost)

// read all
router.get('/posts', postController.getPosts)

// read one
router.get('/posts/:id', postController.getSinglePost)

// update
router.put('/posts/:id/', postController.updatePost)

// delete
router.delete('/posts/:id', postController.deletePost)

module.exports = router
