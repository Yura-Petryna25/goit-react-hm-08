import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import styles from "./ConcactItem.module.css";

export default function ContactItem({ id, name, phone }) {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      <p>
        {name}: {phone}
      </p>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
}
