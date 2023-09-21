const express = require('express');
const router = new express.Router();
const postController = require('../../controllers/post');
const userController = require('../../controllers/user');
const loginController = require('../../controllers/login');
const authMiddleware = require('../../middleware/authMiddleware');

router.post('/user',userController.store)
router.post('/login',loginController.login)

router.all('*', authMiddleware.isAuth);
router.get('/posts',postController.index)
router.put('/posts/:id',postController.update)
router.post('/posts',postController.store)
router.delete('/posts/:id',postController.delete)

module.exports = router;