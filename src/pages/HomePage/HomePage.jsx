import { GoTasklist } from "react-icons/go";
import css from './HomePage.module.css'
export default function HomePage() {
    return (
        <div className={css.wrap}>
            <h1 className={css.title} >Contacts book welcome page <GoTasklist /> </h1>            
        </div>
    )
}
