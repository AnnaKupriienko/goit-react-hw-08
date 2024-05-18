import css from "./Contact.module.css"
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
export default function Contact({ contact }) {
const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(contact.id));
    return (
        <div className={css.container}>
                <p className={css.text}><IoMdContact className={css.icon} />{contact.name}</p>
                <p className={css.text}><FaPhoneAlt className={css.icon} />{contact.number}</p>
            <button className={css.btnDelete} onClick={handleDelete}>Delete</button>
            </div>
            
    );
}