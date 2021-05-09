import styled from 'styled-components';

export const Container = styled.div`
  .input {
    display: flex;
    flex-direction: column;
    margin-bottom: 26px;
    position: relative;

    label {
      padding: 0px 4px;
      font-weight: 600;
      font-size: 13px;
      position: absolute;
      top: -16px;
      color: #000;
      transition: all 400ms ease;
    }

    input, textarea {
      border: 2px solid #767676;
      padding: 10px 8px 12px;
      border-radius: 4px;
      font-weight: 600;
      margin: 4px;
      min-width: 300px;
      outline: none;
      font-size: 16px;
      font-family: inherit;
      transition: all 400ms ease;

      &:focus {
        border: 2px solid #543fd3;
      
        & + label {
          color: #543fd3
        }
      }
    }

    textarea {
      resize: none;
      padding: 8px 8px;
      height: 140px;
    }
  }

  button {
    min-width: 300px;
    padding: 14px 8px;
    cursor: pointer;
    margin: 4px;
    background-color: #543fd3;
    color: #fff;
    font-size: 13px;
    font-weight: 600;
    border-radius: 4px;
    letter-spacing: 1px;
    border: none;
  }
`;
