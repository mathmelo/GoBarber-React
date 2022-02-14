import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      padding: 0 15px;
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      margin: 0 0 10px;
      color: #fff;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    hr {
      border: 0;
      margin-bottom: 10px;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
    }

    button {
      margin: 5px 0 0;
      border: 0;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border-radius: 4px;
      font-size: 16px;
      height: 44px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }
  }

  > button {
    margin: 15px 0 0;
    width: 100%;
    text-align: center;
    border: 0;
    background: #eb5972;
    font-weight: bold;
    color: #fff;
    border-radius: 4px;
    font-size: 16px;
    height: 44px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#EB5972')};
    }
  }
`;
