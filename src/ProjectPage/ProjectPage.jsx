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
                <div className={styles.UzbecObmanshik}>
                    <div className={styles.headerBlockBotRight}>
                        <div className={styles.insideBlockBotRight}> 
                            
                        </div>  
                    </div>
                </div>
            </div>
</section>
{/*----------------------------------------- пробел ----------------------------------------- */}
                            <section className={styles.Space}></section>
{/*----------------------------------------- пробел ----------------------------------------- */}
<section className={styles.testimonialsSection}>
    <div className={styles.TESTIMONIALS}>

        <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>KEY FEATURES OF OUR PROJECTS</h2>
        </div>

        {/* Сетка отзывов */}
        <div className={styles.testimonialsGrid}>
            
            {/* Карточка 1 */}
            <article className={styles.testimonialCard}>
                <div className={styles.testimonialCardImg}>
                <img src="src\assets\Icon Container Cube.png" alt="Sarah Thompson" className={styles.avatar} />
                </div>
                <div className={styles.CardtxtConteiner}>
                    <p className={styles.TextTop}>Strategic Planning</p>
                    <p className={styles.TextBot}>Every project begins with thorough research and strategic planning to ensure a holistic understanding of our clients' objectives.</p>
                </div>
            </article>

            {/* Карточка 2 */}
                       <article className={styles.testimonialCard}>
                <div className={styles.testimonialCardImg}>
                <img src="src\assets\Icon Container Cube.png" alt="Sarah Thompson" className={styles.avatar} />
                </div>
                <div className={styles.CardtxtConteiner}>
                    <p className={styles.TextTop}>Customized Solutions</p>
                    <p className={styles.TextBot}>We believe in tailoring our services to suit each project's unique requirements, resulting in solutions.</p>
                </div>
            </article>

            {/* Карточка 3 */}
                       <article className={styles.testimonialCard}>
                <div className={styles.testimonialCardImg}>
                <img src="src\assets\Icon Container Cube.png" alt="Sarah Thompson" className={styles.avatar} />
                </div>
                <div className={styles.CardtxtConteiner}>
                    <p className={styles.TextTop}>User-Centric Approach</p>
                    <p className={styles.TextBot}>Our projects are designed with the end-user in mind, prioritizing seamless user experiences and intuitive interfaces.</p>
                </div>
            </article>

            {/* Карточка 4 */}
                      <article className={styles.testimonialCard}>
                <div className={styles.testimonialCardImg}>
                <img src="src\assets\Icon Container Cube.png" alt="Sarah Thompson" className={styles.avatar} />
                </div>
                <div className={styles.CardtxtConteiner}>
                    <p className={styles.TextTop}>Timely Delivery</p>
                    <p className={styles.TextBot}>We adhere to strict timelines and project schedules to ensure timely delivery without compromising on quality.</p>
                </div>
            </article>
        </div>
    </div>
</section>


</>
)
}

