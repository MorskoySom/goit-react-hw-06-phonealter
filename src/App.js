import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { ContactList } from "ContactsList/ContactsList";
import { ContactForm } from "ContactForm/ContactForm";
import { Filter } from "Filter/Filter";
import { Container } from 'App.styled'
import { addContact, deleteContact, setFilter } from "./Redux/contactsSlice";

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();


  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts-list');
    if (savedContacts !== null) {
      dispatch(addContact(JSON.parse(savedContacts)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem(`contacts-list`, JSON.stringify(contacts));
  }, [contacts]);

  const checkIfContactExists = (name, number) => {
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );
    return existingContact;
  }

  const deleteContactElement = (elementId) => {
    dispatch(deleteContact(elementId));
  }

  const handleAddContact = (newContact) => {
    const { name, number } = newContact;

    if (checkIfContactExists(name, number)) {
      alert(`Contact with name ${name} or number ${number} already exists!`);
      return;
    }

    dispatch(addContact({ ...newContact, id: nanoid() }));
  }

  const handleFilterChange = (newFilter) => {
    dispatch(setFilter(newFilter));
  }

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm toAdd={handleAddContact} />
      <h2>Contacts</h2>
      <Filter filterName={filter} toSearch={handleFilterChange} />
      <ContactList toDelete={deleteContactElement} />
    </Container>
  )
}





