
import { useSelector, useDispatch } from "react-redux";
import { ContactList } from "ContactsList/ContactsList";
import { ContactForm } from "ContactForm/ContactForm";
import { Filter } from "Filter/Filter";
import { Container } from 'App.styled'
import { deleteContact, setFilter } from "./Redux/contactsSlice";

export const App = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();


  // useEffect(() => {
  //   const savedContacts = localStorage.getItem('contacts-list');
  //   if (savedContacts !== null) {
  //     dispatch(addContact(JSON.parse(savedContacts)));
  //   }
  // }, [dispatch]);

  // useEffect(() => {
  //   localStorage.setItem(`contacts-list`, JSON.stringify(contacts));
  // }, [contacts]);

  const deleteContactElement = (elementId) => {
    dispatch(deleteContact(elementId));
  }



  const handleFilterChange = (newFilter) => {
    dispatch(setFilter(newFilter));
  }

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter filterName={filter} toSearch={handleFilterChange} />
      <ContactList toDelete={deleteContactElement} />
    </Container>
  )
}





