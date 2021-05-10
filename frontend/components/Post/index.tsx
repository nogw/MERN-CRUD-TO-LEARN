import React from 'react';
import { Container } from './styles';
import { FaClock, FaTimesCircle } from "react-icons/fa";

function Post({ data }) {
  return (
    <Container>
      {
        data.accepted === "await" && (
          <div className="awaitApproved">
            <FaClock className="icon"/>
            <h1>your post is under review</h1>
          </div>
        )
      }
      {
        data.accepted === true && (
          <div className="Approved">
            <h1>{data.title}</h1>
            <div className="infos">
              <p>
                {data.date} 
              </p>
              <div className="bar"/>
              <p>
                {data.name} 
              </p>
            </div>
            <h3>
              {data.post}
            </h3>
          </div>
        )
      }
      {
        !data.accepted && (
          <div className="Refused">
            <FaTimesCircle className="icon"/>
            <h1>your post was declined</h1>
          </div>
        )
      }
    </Container>
  );
};

export default Post;
