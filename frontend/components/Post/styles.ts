import styled from 'styled-components';

export const Container = styled.div`
  .awaitApproved {
    display: flex;
    align-items: center;

    h1 {
      font-family: monospace;
      font-size: 20px;

      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      
      width: 140px;
    }
    
    .icon {
      margin-right: 12px;      
      font-size: 42.5px;
      color: #543fd3;
    }
  }

  .Approved {
    background-color: #f7f9fa;
    box-shadow: 0px -2px 6px 0px rgba(0,0,0, 0.02);
    border-radius: 6px;
    padding: 20px 26px 26px 26px;
    min-width: 350px;
    max-width: 430px;
    
    h1 {
      font-size: 26px;
    }

    .infos {
      margin-top: 5px;
      display: flex;

      p {
        font-size: 18px;
      }

      .bar {
        height: 20px;
        width: 1px;
        background-color: #000;
        margin: 2px 14px 0px 14px
      }
    }

    h3 {
      font-weight: 400;
      margin-top: 15px;
      font-size: 18px;
    }
  }

  .Refused {
    display: flex;
    align-items: center;

    h1 {
      font-family: monospace;
      font-size: 20px;

      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      
      width: 140px;
    }
    
    .icon {
      margin-right: 12px;      
      font-size: 42.5px;
      color: #e63946;
    }
  }
`;
