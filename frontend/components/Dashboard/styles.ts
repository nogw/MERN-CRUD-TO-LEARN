import styled from 'styled-components';

export const Container = styled.div`
  .categories {
    display: flex;
    width: 650px;
    border-bottom: 2px solid #acb0b2;
    padding: 10px;
    padding-bottom: 8px;

    p {
      color: #919699;
    }

    .nameAndDate {
      margin-right: auto;
      width: 100%;
    }

    .title {
      margin-left: 20px;
      max-width: 100px;
      width: 100%;
    }

    .postOption {
      margin-left: 20px;
      max-width: 200px;
      width: 100%;
    }

    .option {
      margin-left: 16px;
      max-width: 100px;
      width: 100%;
      
      display: flex;
      justify-content: flex-end;
    }
  }

  .post {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 650px;
    border-bottom: 2px solid #edefef;
    transition: 300ms ease all;
    cursor: pointer;

    &:hover {
      background-color: rgba(94,99,102, 0.04);
    }

    .userAndDate { 
      display: flex;
      flex-direction: column;
      width: 100%;
    
      p:first-child {
        font-weight: bold;
        color: #212121;
      }
      
      p:last-child {
        font-weight: 500;
        color: #72a2f6;
      }
    }

    .title {
      margin-left: 20px;
      max-width: 100px;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; 
      -webkit-box-orient: vertical;

      p {
        color: #5e6366;
      }
    }

    .postText {
      margin-left: 20px;
      max-width: 200px;
      width: 100%;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; 
      -webkit-box-orient: vertical;

      p {
        color: #5e6366;
      }
    }

    .buttons {
      margin-left: 16px;
      display: flex;
      margin-top: 3px;
      max-width: 100px;
      width: 100%;
  
      display: flex;
      justify-content: flex-end;

      button {
        height: 20px;
        width: 20px;
        margin: 5px 0px 5px 10px;
      
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        border: none;
        outline: none;
        background-color: transparent;
        
        transition: transform 200ms ease;

        .icon {
          transition: filter 400ms ease;
          font-size: 20px;
        }

        &:hover {
          transform: scale(1.05);

          .icon {
            filter: brightness(1.4)
          }
        }

        &:active {
          transform: scale(0.95);

          .icon {
            filter: brightness(0.9)
          }
        }
      }

      .rejectPost {
        color: #e63946;
      }

      .acceptPost {
        color: #543fd3;
      }
    }
  }
`;
