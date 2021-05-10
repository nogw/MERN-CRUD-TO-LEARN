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

const getListPosts = async ( req: Request, res: Response ) => {
  try {
    const { option } = req.query
    
    let opc
    if (option === "true") {
      opc = true
    } else if ( option === "false" ) {
      opc = false
    } else if ( option === "await" ) {
      opc = "await"
    }

    let post: any = await Post.find({ accepted: opc }).exec()

    console.log(opc)
    console.log(typeof(opc))

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

const updatePost = async ( req: Request, res: Response ) => {
  const slug = req.params.slug
  
  try {
    let post: any = await Post.findOneAndUpdate(
      { _id: slug }, 
      { accepted: req.body.option }, 
      { new: true, useFindAndModify: false },
    ).exec()

    if (post) {
      return res.status(200).json({
        message: post
      })
    } else {
      return res.status(400).json({
        error: "error when accepting post"
      })
    }
  } catch (error) {
    return res.status(400).json({
      error: error
    })
  }
}

const getNumbers = async ( req: Request, res: Response ) => {
  try {
    let approved: any = await Post.find({ accepted: true }).exec()
    let reject: any = await Post.find({ accepted: false }).exec()
    let awaiting: any = await Post.find({ accepted: "await" }).exec()

    if (approved && reject && awaiting) {
      return res.status(200).json({
        approved: approved.length,
        reject: reject.length,
        awaiting: awaiting.length
      })
    } else {
      return res.status(400).json({
        error: "an error occured"
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
  getListPosts,
  getPostById,
  updatePost,
  getNumbers
}