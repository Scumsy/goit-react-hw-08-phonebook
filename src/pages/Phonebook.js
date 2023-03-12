import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm.jsx';
import { ContactList } from 'components/ContactList/ContactList.jsx';
import { Filter } from 'components/Filter/Filter.jsx';

import { fetchContacts } from '../Redux/Contacts/operations';

export default function Phonebook() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />

      <Filter />
      <ContactList />
    </div>
  );
}
