import express, { Response, Request } from 'express'
import validateRegister from '../validation/validateRegister'
import validateLogin from '../validation/validateLogin'
import jwt from 'jsonwebtoken'
import User from '../models/user.model'

const create = ( req: Request, res: Response ) => {
  const { errors, isValid } = validateRegister(req.body)

  if (!isValid) {
    return res.status(400).json({
      error: errors
    })
  }

  try {
    let user = new User({
      name: req.body.name, 
      email: req.body.email,
      post: req.body.post,
      date: req.body.date,
    })
  
    user.save()
    .then((user: any) => {
      let token = jwt.sign({
        name: user.name
      }, process.env.JWT_SECRET)
  
      return res.status(200).json({
        message: token
      })
    })
    .catch((error) => {
      return res.status(400).json({
        error: error
      })
    })
  } catch (error) {
    return res.status(400).json({
      error: error
    })
  }
}

const getNotAprovedUsers = ( req: Request, res: Response ) => {
  try {
    let user: any = User.find({ accepted: false }).exec()

    if (user.length) {
      return res.status(200).json({
        message: user 
      })
    } else {
      return res.status(400).json({
        error: "0 users"
      })
    }
  } catch (error) {
    return res.status(400).json({
      error: error
    })
  }
}

export default {
  create,
  getNotAprovedUsers
}