import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name.toLowerCase());
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul className={styles.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          {name}: {number}
          <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
