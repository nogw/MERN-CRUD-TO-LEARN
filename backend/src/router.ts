import express, { Router } from 'express'
import userController from './controllers/user.controller'

const router = express.Router()

router.route("/user")
  .post(userController.create)

router.route("/user")
  .get(userController.getNotAprovedUsers)

export default router