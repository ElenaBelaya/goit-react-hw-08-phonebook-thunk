// import { createReducer, combineReducers } from '@reduxjs/toolkit';
// import contactsOperations from 'redux/contacts/contactsOperations';
// import filter from 'redux/filter';
// const { getContacts, addContacts, removeContacts } = contactsOperations;
// const items = createReducer([], {
//   [getContacts.fulfilled]: (_, action) => console.log(action.payload),
//   [addContacts.fulfilled]: (_, action) => console.log(action.payload),
//   [removeContacts.fulfilled]: (_, action) => action.payload,
// });

// const isLoading = createReducer(false, {
//   [getContacts.pending]: () => true,
//   [getContacts.fulfilled]: () => false,
//   [getContacts.rejected]: () => false,
//   [addContacts.pending]: () => true,
//   [addContacts.fulfilled]: () => false,
//   [addContacts.rejected]: () => false,
//   [removeContacts.pending]: () => true,
//   [removeContacts.fulfilled]: () => false,
//   [removeContacts.rejected]: () => false,
// });

// const error = createReducer(null, {
//   [getContacts.rejected]: (_, action) => action.payload,
//   [getContacts.pending]: () => null,
//   [addContacts.rejected]: (_, action) => action.payload,
//   [addContacts.pending]: () => null,
//   [removeContacts.rejected]: (_, action) => action.payload,
//   [removeContacts.pending]: () => null,
// });

// const contactsReducers = combineReducers({
//   items,
//   isLoading,
//   filter,
//   error,
// });
// export default contactsReducers;
