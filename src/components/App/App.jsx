import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Route , Routes} from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from '../Layout/Layout';
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefresh } from "../../redux/auth/selector";
import RestrictedRoute from '../RestrictedRoute'
import PrivateRoute from "../PrivateRoute";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage/RegistrationPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"));

export default function App() { 
    const dispatch = useDispatch();
    const refresh = useSelector(selectIsRefresh);

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);
   
    return (
        <div>
            <Layout>
                {refresh ? (<p>Refreshing...</p>) : (
                     <Suspense>
            <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/register" element={<RestrictedRoute component={<RegistrationPage/>} redirectTo="/" />}/>
        <Route path="/login" element={<RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />}/>
        <Route  path="/contacts" element={<PrivateRoute component={<ContactsPage/>} redirectTo="/login"/>} />
        </Routes>
        </Suspense>
        )}
         </Layout>
        </div>
    );
}
