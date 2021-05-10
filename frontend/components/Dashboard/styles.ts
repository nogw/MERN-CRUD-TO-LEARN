import styled from 'styled-components';

interface IModalProps {
  isVisible: boolean
}

export const ModalBgc = styled.div<IModalProps>`
  background-color: transparent;
  position: fixed;
  
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  
  height: 100vh;
  width: 100vw;
  
  opacity: 0;

  pointer-events: none;
  transition: all 300ms ease;

  ${({ isVisible }: any) => isVisible && `
    pointer-events: all;
    opacity: 1;
    background-color: rgba(0,0,0,0.3);
  `}
`;

export const ModalContainer = styled.div`
  background-color: #f7f9fa;
  border-radius: 12px;
  position: relative;

  padding: 20px;

  max-height: 300px; 
  width: 400px; 

  h1 {
    font-size: 20px;
    margin-bottom: 20px;
  }

  p {
    overflow: auto;
    max-height: 200px; 
    
    ::-webkit-scrollbar {
      width: 7px;
      height: 7px;
    }
    ::-webkit-scrollbar-thumb {
      background: #919699;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover{
      background: #919699;
    }
    ::-webkit-scrollbar-track{
      background: #ffffff;
      border-radius: 10px;
      box-shadow: inset 7px 10px 12px #f0f0f0;
    }
  }

  button {
    background-color: transparent;
    border: none;
    position: absolute;
    top: 22px;
    right: 22px;
    cursor: pointer;
    outline: none;

    height: 20px;
    width: 20px;

    .icon {
      font-size: 20px;
    }
  }
`;

export const Container = styled.div`
  .counters {
    display: grid;
    grid-template-columns: repeat(3, calc(630px / 3));
    grid-column-gap: 10px;
    height: calc(650px / 4);
    margin-bottom: 20px;

    .item1, .item2, .item3 {
      background-color: #f7f9fa;
      border-radius: 10px;
      padding: 20px;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      transition: background 300ms ease;
      transition: transform 150ms ease;
      cursor: pointer;

      &:hover {
        background-color: #f3f3f3;
        transform: scale(1.03);
      }

      &:active {
        transform: scale(0.97);
      }

      h2 {
        color: #202020;
        font-size: 20px;
        margin-bottom: auto;
        -webkit-touch-callout: none; 
        -webkit-user-select: none; 
        -khtml-user-select: none; 
        -moz-user-select: none; 
        -ms-user-select: none; 
        user-select: none;
      }

      h1 {
        font-size: 45px;
        -webkit-touch-callout: none; 
        -webkit-user-select: none; 
        -khtml-user-select: none; 
        -moz-user-select: none; 
        -ms-user-select: none; 
        user-select: none;
      }
    }

    .item1 {
      h1 {
        color: #2fa84f;
      }
    }

    .item2 {
      h1 {
        color: #ea3d2f;
      }
    }

    .item3 {
      h1 {
        color: #367bf5;
      }
    }
  }

  .categories {
    display: flex;
    width: 650px;
    border-bottom: 1px solid #acb0b2;
    padding: 10px;
    padding-bottom: 8px;

    p {
      color: #919699;
      font-size: 16px;
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

  .posts {
    max-height: 288px;
    overflow: auto;
    
    ::-webkit-scrollbar {
      width: 7px;
      height: 7px;
    }
    ::-webkit-scrollbar-thumb {
      background: #919699;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover{
      background: #919699;
    }
    ::-webkit-scrollbar-track{
      background: #ffffff;
      border-radius: 10px;
      box-shadow: inset 7px 10px 12px #f0f0f0;
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

    p {
      font-size: 16px;
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
        color: #367bf5;
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
        color: #367bf5;
      }
    }
  }
`;
