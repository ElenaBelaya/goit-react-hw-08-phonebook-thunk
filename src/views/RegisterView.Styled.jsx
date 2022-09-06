import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormBox = styled(Form)`
  display: inline-flex;
  flex-direction: column;
  border: 3px solid #b4c1f2;
  border-radius: 5px;
  padding: 30px;
  margin: 30px 10px;
  text-align: start;
  background-color: #d3edff;
  width: 50%;
`;

export const Main = styled.main`
  text-align: center;
  background-color: #c1d5ee;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
  color: #444f79;
  letter-spacing: normal;
`;

export const Input = styled(Field)`
  margin-left: 20px;
  border: none;
  border-radius: 4px;
  height: 25px;
  width: 80%;
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
