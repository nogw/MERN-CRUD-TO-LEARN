import express, { Router } from 'express'
import postController from './controllers/post.controller'

const router = express.Router()

router.route("/post")
  .post(postController.create)

router.route("/post")
  .get(postController.getNotApprovedPosts)

router.route("/post/:slug")
  .get(postController.getPostById)

export default router