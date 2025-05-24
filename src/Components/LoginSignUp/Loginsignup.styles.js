// Loginsignup.styles.js
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f3f4f6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginSignupBox = styled.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 400px;
`;

export const Title = styled.h1`
  margin-bottom: 24px;
  text-align: center;
  color: #333;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 10px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
  margin-left: 10px;
  font-size: 1rem;
`;

export const SubmitButton = styled.button`
  background: #2563eb;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background: #1d4ed8;
  }
`;

export const Toggle = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  color: #2563eb;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
