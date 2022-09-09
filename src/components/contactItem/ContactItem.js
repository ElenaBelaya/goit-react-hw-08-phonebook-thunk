//import { DeleteButton } from './ContactItem.Styled';
import Notiflix from 'notiflix';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
//import Icon from '@material-ui/core/Icon';
import contactsOperations from 'redux/contacts/contactsOperations';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const ContactItem = contact => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id, name, number } = contact.contact;
  const { removeContacts } = contactsOperations;

  const onDeleteContact = id => {
    dispatch(removeContacts(id));
    Notiflix.Notify.success('Сontact removed from list');
  };

  return (
    <>
      <b>{name}:</b> {number}
      <Button
        size="small"
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </Button>
      <Button
        size="small"
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
        onClick={() =>
          navigate(`/contacts/${id}`, {
            state: { id: id, name: name, number: number },
          })
        }
      >
        Edit
      </Button>
    </>
  );
};

export default ContactItem;
