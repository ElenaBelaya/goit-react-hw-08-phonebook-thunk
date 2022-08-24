import styled from '@emotion/styled';

export const FormBox = styled.form`
  display: inline-flex;
  flex-direction: column;
  border: 3px solid #b4c1f2;
  border-radius: 5px;
  padding: 30px;
  margin: 30px 10px;
  text-align: start;
  background-color: #d3edff; ;
`;

export const Main = styled.main`
  text-align: center;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
  color: #444f79;
  letter-spacing: normal;
`;

export const Input = styled.input`
  margin-left: 20px;
  border: none;
  border-radius: 4px;
`;

export const Button = styled.button`
  margin: 15px 0px;
  padding: 4px 0px;
  background-color: #b4c1f2;
  border: none;
  border-radius: 4px;
  color: #444f79;
  font-family: Segoe UI;
  font-size: 16px;
`;
