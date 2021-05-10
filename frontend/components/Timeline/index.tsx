import React from 'react';
import { Container } from './styles';

function Timeline({ posts }) {
  return (
    <Container>
      {
        posts.map((post: any) => {
          return <div className="post">
            <div className="header">
              <div className="icon">
                {post.name.substring(0, 2)}
              </div>
              <div className="texts">
                <p>{post.name}</p>
                <p>{post.date}</p>
              </div>
            </div>
            <div className="text">
              <p>{post.post}</p>
            </div>
          </div>
        })
      }
    </Container>
  );
};

export default Timeline;
