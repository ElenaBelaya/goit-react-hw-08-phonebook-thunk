import styled from '@emotion/styled';

import { Form, Field } from 'formik';

export const FormBox = styled(Form)`
  display: inline-flex;
  flex-direction: column;
  border: 3px solid #ea9999;
  border-radius: 5px;
  padding: 30px;
  margin: 30px 10px;
  text-align: start;
  background-color: #f8dfdf; ;
`;

export const Main = styled.main`
  text-align: center;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
  color: #795151;
`;

export const Input = styled(Field)`
  margin-left: 10px;
  border: none;
  border-radius: 4px;
`;

export const Button = styled.button`
  margin: 15px 0px;
  padding: 4px 0px;
  background-color: #ea9999;
  border: none;
  border-radius: 4px;
  color: #795151;
  font-family: Segoe UI;
  font-size: 16px;
`;
