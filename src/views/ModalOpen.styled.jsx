import { Form, Field } from 'formik';
import styled from '@emotion/styled';

export const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eac9e7;
  padding: 20px;
`;
export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  border: 1px solid #000000;
  border-radius: 5px;
  width: 30%;
  padding: 10px;
`;

export const FieldStyled = styled(Field)`
  margin-right: 10px;
  display: inline-block;
  width: 200px;
  margin-bottom: 15px;
  height: 25px;
  border-radius: 3px;
  border: none;
  width: 95%;
`;

export const TitleInput = styled('p')`
  margin: 0px 0px 5px 0px;
`;
