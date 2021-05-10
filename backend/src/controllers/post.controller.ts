import express, { Response, Request } from 'express'
import validateRegister from '../validation/validateRegister'
import validateLogin from '../validation/validateLogin'
import jwt from 'jsonwebtoken'
import Post from '../models/post.model'

const create = ( req: Request, res: Response ) => {
  const { errors, isValid } = validateRegister(req.body)

  if (!isValid) {
    return res.status(400).json({
      error: errors
    })
  }

  try {
    let post = new Post({
      name: req.body.name, 
      title: req.body.title,
      post: req.body.post,
      date: req.body.date,
    })
  
    post.save()
    .then((post: any) => {
      let token = jwt.sign({
        name: post.name,
        id: post._id
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

const getNotApprovedPosts = async ( req: Request, res: Response ) => {
  try {
    let post: any = await Post.find({ accepted: "await" }).exec()

    if (post) {
      return res.status(200).json({
        message: post 
      })
    } else {
      return res.status(400).json({
        error: "0 posts",
      })
    }
  } catch (error) {
    return res.status(400).json({
      error: error
    })
  }
}

const getPostById = async ( req: Request, res: Response ) => {
  const slug = req.params.slug
  
  try {
    let post: any = await Post.findById(req.params.slug).exec()

    if (post) {
      return res.status(200).json({
        message: post,
      })
    } else {
      return res.status(400).json({
        error: "post not exists",
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
  getNotApprovedPosts,
  getPostById
}