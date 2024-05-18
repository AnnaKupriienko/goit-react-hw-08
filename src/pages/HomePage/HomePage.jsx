import { GoTasklist } from "react-icons/go";
import css from './HomePage.module.css'
export default function HomePage() {
    return (
        <div>
            <h1 className={css.title} >Task manager welcome page <GoTasklist /> </h1>            
        </div>
    )
}
