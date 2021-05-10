import express, { Router } from 'express'
import postController from './controllers/post.controller'

const router = express.Router()

router.route("/post")
  .post(postController.create)

router.route("/post")
  .get(postController.getListPosts)

router.route("/post/:slug")
  .get(postController.getPostById)

router.route("/admin/:slug/updatePost")
  .post(postController.updatePost)

router.route("/admin/getNumbers")
  .get(postController.getNumbers)

export default router