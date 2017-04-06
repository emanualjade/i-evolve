const express = require('express');
const basicController = require('./controllers/basicController');
const userController = require('./controllers/userController');
const postController = require('./controllers/postController');
const commentController = require('./controllers/commentController');

const routes = express();

// Basic Routes
routes.get('/', basicController.get);

// User routes
routes.post('/signup', userController.post);

// Post routes
routes.post('/post', postController.post);
routes.get('/posts', postController.getAll);

// Comment routes
routes.post('/comment', commentController.post);

module.exports = routes;
