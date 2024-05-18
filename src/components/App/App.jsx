import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations"
import { Route , Routes} from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from '../Layout';
import RestrictedRoute from "./RestrictedRoute";
import PrivateRoute from "./PrivateRoute";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage/RegistrationPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"));


export default function App() { 
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
   
    return (
        <div>
            <Layout>
             <Suspense>
            <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/register" element={<RestrictedRoute component={<RegistrationPage/>} redirectTo="/" />}/>
        <Route path="/login" element={<RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />}/>
        <Route  path="/contacts" element={<PrivateRoute component={<ContactsPage/>} redirectTo="/login"/>} />
        </Routes>
        </Suspense>
         </Layout>
        </div>
    );
}
