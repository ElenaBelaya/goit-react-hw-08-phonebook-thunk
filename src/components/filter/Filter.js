import { Label, FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter';
import { selectFilter } from 'redux/contacts/contactsSelector';

const Filter = () => {
  const dispartch = useDispatch();
  const value = useSelector(selectFilter);
  const onFilterContacts = event => {
    console.log(event.currentTarget.value);
    dispartch(setFilter(event.currentTarget.value));
  };
  return (
    <Label>
      Find contacts by name
      <FilterInput
        type="text"
        value={value}
        onChange={onFilterContacts}
      ></FilterInput>
    </Label>
  );
};

export default Filter;
