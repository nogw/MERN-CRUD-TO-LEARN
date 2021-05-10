import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 22px;

  .post {
    margin-bottom: 22px;

    .header {
      display: flex;
      align-items: center;
      border: 1px solid #e1e1e1;
      border-bottom: none;
      padding: 20px;

      .icon {
        background-color: #367bf5;
        height: 60px;
        border-radius: 50%;
        width: 60px;

        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
        color: #fff;

        margin-right: 12px;
      }

      .texts {
        display: flex;
        flex-direction: column;

        p {
          font-size: 20px;
          margin-bottom: 2px;
          margin-top: 2px;
        }

        p:first-child {
          font-weight: bold;
        }
      }
    }

    .text {
      max-width: 500px;
      width: 100%;
      
      font-size: 20px;

      display: flex;
      align-items: center;
      border: 1px solid #e1e1e1;
      padding: 20px;
    }
  }
`;
