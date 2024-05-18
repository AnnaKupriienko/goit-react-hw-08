import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from "../../components/ContactForm/ContactForm";
import Loader from "../../components/Loader/Loader"
import Error from "../../components/Error/Error"
import css from './ContactsPage.module.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations"
import {selectLoading,selectError} from "../../redux/contacts/selectors"


export default function ContactsPage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);
    const error = useSelector(selectError);
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    return (
        <div>
            <h1 className={css.title}>Phonebook</h1>
            {isLoading && <Loader />}
            {error && <Error/>}
            <ContactForm />
            <SearchBox />
            <ContactList />
        </div>
    )
}