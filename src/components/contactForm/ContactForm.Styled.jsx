import { Form, Field } from 'formik';
import styled from '@emotion/styled';

// import { indigo, deepPurple } from '@mui/material/colors';

// const primary = indigo[500];
// const secondary = deepPurple[500];

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  border: 1px solid #000000;
  border-radius: 3px;
  padding: 10px;
  width: 80%;
`;

export const FieldStyled = styled(Field)`
  display: inline-block;
  margin-bottom: 15px;
  width: 95%;
  height: 25px;
  border-radius: 3px;
  border: none;
`;

export const TitleInput = styled('p')`
  margin: 0px 0px 5px 0px;
  color: #666479;
`;
