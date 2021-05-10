import React, { useState } from 'react';
import { Container, ModalBgc, ModalContainer } from './styles';
import { FaTimesCircle, FaCheckCircle, FaTimes } from "react-icons/fa";
import api from '../../services/api';

const Modal = ({ isVisible, setIsVisible, post }) => {
  return (
    <ModalBgc isVisible={isVisible}>
      <ModalContainer>
        <button onClick={() => setIsVisible(!isVisible)}>
          <FaTimes className="icon"/>
        </button>
        <h1>{post.title}</h1>
        <p>{post.post}</p>
      </ModalContainer>
    </ModalBgc>
  )
}

const Dashboard = ({ listNotApprovedPosts, listNumberPosts }) => {
  const [posts, setPosts] = useState(listNotApprovedPosts)
  const [numbers, setNumbers] = useState(listNumberPosts)
  const [optionUpdatePost, setOptionUpdatePost] = useState<any>("await")
  const [isVisible, setIsVisible] = useState(false)
  const [post, setPost] = useState([])

  const getPostsToApprove = async ( opt: string | boolean ) => {
    setOptionUpdatePost(opt)

    await api.get("/post", {
      params: {
        option: opt
      }
    })
    .then((postsResponse: any) => {
      setPosts(postsResponse.data.message )
    })
    .catch((error: any) => {
      console.log(error)
    })
  }

  const updatePost = async ( opt: string | boolean, id: string ) => {
    await api.post(`/admin/${id}/updatePost`, {
      option: opt
    })
    .then(async (post: any) => {
      console.log(post.data.message)
      
      const response = await api.get("/post", {
        params: {
          option: optionUpdatePost
        }
      })
      const numbersResponse = await api.get("/admin/getNumbers")

      setNumbers(numbersResponse.data) 
      setPosts(response.data.message)
    })
    .catch((error: string) => {
      console.log(error)
    })
  }

  return (
    <Container>
      <Modal post={post} setIsVisible={setIsVisible} isVisible={isVisible}/>
      <div className="list">
        <div className="counters">
          <div 
            onClick={() => 
              getPostsToApprove(true)
            } 
            className="item1"
          >
            <h2>
              Approved
            </h2>
            <h1>
              {numbers.approved}
            </h1>
          </div>
          <div 
            onClick={() => 
              getPostsToApprove(false)
            }
            className="item2"
          >
            <h2>
              Reject
            </h2>
            <h1>
              {numbers.reject}
            </h1>
          </div>
          <div 
            onClick={() => 
              getPostsToApprove("await")
            } 
            className="item3"
          >
            <h2>
              Awaiting
            </h2>
            <h1>
              {numbers.awaiting}
            </h1>
          </div>
        </div>
        {
          posts.length > 0 && (
            <>
              <div className="categories">
              <p className="nameAndDate">name and date</p>
              <p className="title">title</p>
              <p className="postOption">post content</p>
              <p className="option">options</p>
              </div>
              <div className="posts">
                {
                  posts.map((post: any) => {
                    return (
                      <div className="post" key={post._id}>
                        <div className="userAndDate" onClick={() => {
                          setIsVisible(!isVisible)
                          setPost(post)
                        }}>
                          <p>
                            {post.name}
                          </p>
                          <p>
                            {post.date}
                          </p>
                        </div>

                        <div className="title" onClick={() => {
                          setIsVisible(!isVisible)
                          setPost(post)
                        }}>
                          <p>
                            {post.title}
                          </p>
                        </div>

                        <div className="postText" onClick={() => {
                          setIsVisible(!isVisible)
                          setPost(post)
                        }}>
                          <p>
                            {post.post}
                          </p>
                        </div>
                        
                        <div className="buttons">
                          <button onClick={() => updatePost(true, post._id)} className="acceptPost">
                            <FaCheckCircle className="icon"/>
                          </button>
                          <button onClick={() => updatePost(false, post._id)} className="rejectPost">
                            <FaTimesCircle className="icon"/>
                          </button>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </>
          )
        }
      </div>
    </Container>
  );
};

export default Dashboard;
