import { useState,useRef,useEffect } from "react"
import styles from "./CareersPage.module.scss";

import {Link} from 'react-router-dom'



export default function CareersPage() {

return( 
<>
<section className={styles.headerBlockBot}>
  <div className={styles.container}>
    
    {/* Левый блок */}
    <div className={styles.main}>
      <h1 className={styles.title}>
        Unlock Your Potential <br /> in the Digital World
      </h1>
      <img src="src\assets\StartAProject.png" alt="" />
    </div>

    {/* Пра блок */}
    <div className={styles.side}>
        <div className={styles.sidegde}>
            <h2>AT NEXGEN</h2>
            <p>
                We believe in fostering a dynamic and collaborative work environment that empowers our team members to excel in their respective fields. Join us to be part of a passionate and innovative team dedicated to crafting exceptional digital solutions for clients across the globe. We are committed to nurturing talent, encouraging professional growth, and creating a workplace where creativity thrives.
            </p>
        

            
        {/* Ссылка "Узнать больше" снизу */}
        <a href="#" className={styles.more}>
            <div className={styles.moreIcon}>
            <img src="src\assets\eqweqwdq.png" alt="" />
            </div>
            <span className={styles.moreText}>KNOW MORE</span>
        </a>
      </div>
    </div>


  </div>
</section>

{/*----------------------------------------- пробел ----------------------------------------- */}
                            <section className={styles.Space}></section>
{/*----------------------------------------- пробел ----------------------------------------- */}



</>
)
}