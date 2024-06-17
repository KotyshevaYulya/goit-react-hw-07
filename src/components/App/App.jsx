import css from "./App.module.css"
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../CotactForm/ContactForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps"
import { loading, error } from "../../redux/contactsSlice";


export default function App() {
    const dispatch = useDispatch();
    const isLoading = useSelector(loading);
    const isError = useSelector(error);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    
    return ( 
        <div className={css.container}>
            <h1>Phonebook</h1>
            <ContactForm/>
            <SearchBox />
            {isLoading && <p>Loading ...</p>}
            {isError && <p>Is Error!</p>}
            < ContactList/>
        </div>
)
};
