import {
  ContactListStyle,
  ContactListItemStyle,
  DeleteButton,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectLoadingStatus,
} from 'Redux/Contacts/selectors';

import { deleteContacts } from '../../Redux/Contacts/operations';
import { nanoid } from 'nanoid';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const isLoading = useSelector(selectLoadingStatus);
  const error = useSelector(selectError);

  const filterToLowerCase = filter.toLocaleLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toString().toLowerCase().includes(filterToLowerCase)
  );

  return (
    <>
      {isLoading && <Loader />}
      {isLoading ? (
        <h3>Loading contacts</h3>
      ) : (
        <ContactListStyle>
          {error && <h3>{error}</h3>}

          {filteredContacts.length >= 1 ? (
            filteredContacts.map(({ id, name, number }) => (
              <ContactListItemStyle key={nanoid()}>
                {name}: {number}
                <DeleteButton
                  type="button"
                  onClick={() => dispatch(deleteContacts(id))}
                >
                  Delete
                </DeleteButton>
              </ContactListItemStyle>
            ))
          ) : (
            <h3>No contacts yet</h3>
          )}
        </ContactListStyle>
      )}
    </>
  );
};
