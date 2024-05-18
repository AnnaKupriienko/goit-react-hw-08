import { useSelector } from "react-redux";
import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"
import { selectFilteredContacts } from "../../redux/contactsSlice";


export default function ContactList() {
    const contacts = useSelector(selectFilteredContacts);
    return (
        <ul>
                {contacts.map(contact =>
                    <li className={css.list} key={contact.id}>
                        <Contact contact={contact} />
                    </li>  )
         }
            </ul>
            )}