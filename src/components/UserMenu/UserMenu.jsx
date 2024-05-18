import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selector.js";
import css from './UserMenu.module.css'
import { logout } from "../../redux/auth/operations.js";

export default function UserMenu() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    };
    return (
        <div className={css.wrapper}>
            <p className={css.text}>Welcome,{user.name}!</p>
            <button className={css.btn} type="button" onClick ={handleLogout}>Logout</button>
        </div>
    )
}