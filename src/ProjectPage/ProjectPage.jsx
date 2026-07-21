import { useState,useRef,useEffect } from "react"
import styles from "./ProjectPage.module.scss";

import {Link} from 'react-router-dom'



export default function ProjectPage() {

return( 
<>
<section className={styles.EmpoweringMain}>
    <div className={styles.headerBlockBot}>
                {/* Левая плашка main*/}
                <div className={styles.headerBlockBotLeft}>
                    {/* Три строчки */}
                    <div className={styles.LeftBlockTop}>
                        <div className={styles.DigitalButton}>
                            <div className={styles.MainText}><p className={styles.MainTextP}>Empowering Your  <br></br>Digital Vision</p></div>
                            <button className={styles.img}><img src="src\assets\StartAProject.png" alt=""/></button>
                        </div>
                        <div className={styles.NexGen}>
                            <p className={styles.MiniTxt}>At NexGen, we are committed to empowering your digital vision with innovative solutions tailored to your unique needs. Our team of skilled professionals, coupled with cutting-edge technologies, ensures that we deliver exceptional results that elevate your online presence.</p>
                        </div>
                    </div>
                    {/* Никжний вагон */}
                    <div className={styles.marquee}>
                        <div className={styles.marqueeContent}>
                                                   </div>
                    </div>
                </div>
    
                    {/* Правая плашка Main */}
                <div className={styles.headerBlockBotRight}>
                    <div className={styles.insideBlockBotRight}> 
                        
 </div>
                </div>
            </div>
</section>
</>
)
}

