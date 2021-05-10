import React, { useState } from 'react';
import { Container } from './styles';
import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";

const Dashboard = ({ listNotApprovedPosts }) => {
  const [posts, setPosts] = useState(listNotApprovedPosts)

  return (
    <Container>
      <div className="list">
        <div className="categories">
          <p className="nameAndDate">name and date</p>
          <p className="title">title</p>
          <p className="postOption">post content</p>
          <p className="option">options</p>
        </div>
        {
          posts.map((post: any) => {
            return (
              <div className="post">
                <div className="userAndDate">
                  <p>
                    {post.name}
                  </p>
                  <p>
                    {post.date}
                  </p>
                </div>

                <div className="title">
                  <p>
                    {post.title}
                  </p>
                </div>

                <div className="postText">
                  <p>
                    {post.post}
                  </p>
                </div>
                
                <div className="buttons">
                  <button className="acceptPost">
                    <FaCheckCircle className="icon"/>
                  </button>
                  <button className="rejectPost">
                    <FaTimesCircle className="icon"/>
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </Container>
  );
};

export default Dashboard;
