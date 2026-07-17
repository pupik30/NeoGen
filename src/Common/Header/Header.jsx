import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return(
    <>
           <header>
               <div className={styles.headerBlockTop}>
                   <div className={styles.headerJC}>
                        <div className={styles.logoPhoto}>
                           <img src='src\assets\Logo.png' alt="" />
                        </div>
                       <nav className={styles.nav}>
                               <NavLink to={"MainPage"}  className={({ isActive }) => (isActive ? `${styles.active} ${styles.activee}` : "")}>Home</NavLink>
                               <NavLink to={"OurComprehensive"} className={({isActive}) => (isActive ? `${styles.active} ${styles.active}`: "")}>Services</NavLink>
                               <NavLink to={'OurComprehensive'} className={({isActive}) => (isActive ? "active":"")}>Pojects</NavLink>
                               <NavLink to={'/'} className={({isActive}) => (isActive ? "active":"")}>About</NavLink>
                               <NavLink to={'/'} className={({isActive}) => (isActive ? "active":"")}>Careers</NavLink>
                               <NavLink to={'/'} className={({isActive}) => (isActive ? "active":"")}>Blogs</NavLink>
                           <button className={styles.ConectUs}>Contact Ass</button>
                       </nav> 
                   </div>
               </div>
        </header>
        </>
    )
}
