//import { useEffect } from 'react';
import ContactForm from './contactForm';
import ContactList from './contactList';
import Section from './section';
import { Container } from './section/Section.styled';
import Filter from './filter';
//import { useSelector } from 'react-redux';

//const KEY = 'contacts';

export const App = () => {
  //  const contacts = useSelector(state => state.contacts.items);

  //  useEffect(() => {
  //    window.localStorage.setItem(KEY, JSON.stringify(contacts));
  //  }, [contacts]);

  return (
    <Container>
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        <ContactList />
      </Section>
    </Container>
  );
};
