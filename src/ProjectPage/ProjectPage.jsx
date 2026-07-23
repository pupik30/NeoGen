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


{/*----------------------------------------- пробел ----------------------------------------- */}
                            <section className={styles.Space}></section>
{/*----------------------------------------- пробел ----------------------------------------- */}



<section className={styles.OurWorks}>
    <div className={styles.OurWorksBlock}>
        <div className={styles.OurWorksBlockTxt}>
            <p className={styles.InfoBlockTextP}>PROJECTS SHOWCASE</p>
            <div className={styles.BlockBtn}>
                <button className={styles.BlockBtn1}>Web Design</button>
                <button className={styles.BlockBtn2}>Web Development</button>
                <button className={styles.BlockBtn3}>Marketing</button>
            </div>
        </div>
    </div>

    <div className={styles.BorderMenu}>
                <div className={styles.Card_OurWork_One}>
            <div className={styles.Div_Card}>

                <img src="src\assets\ZenithHack.png" alt="" />
                <div className={styles.Div_Card_Center}>
                    <div className={styles.Div_Card_Center_Oval}>
                        <p className={styles.GreyTxt}>Category</p><img className={styles.ImgDott} src="src\assets\Shape.png" alt="" /> <p className={styles.WhiteTxt}>Mobile App Development</p>
                    </div> 
                    <div className={styles.Div_Card_Center_Oval}>
                        <p className={styles.GreyTxt}>Time Taken</p><img className={styles.ImgDott} src="src\assets\Shape.png" alt="" /> <p className={styles.WhiteTxt}>6 months</p>
                    </div> 
                </div>
                <p className={styles.GreyTxt}>An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance, and virtual workout classes.</p>
            </div>
        </div>

        <div className={styles.Card_OurWork_Two}><img src="src\assets\OurWorkImgOne.png" alt="" /></div>
        <div className={styles.Card_OurWork_Tri}>
            <div className={styles.Card_OurWork_Tri_Up}><div className={styles.Div_Card}>
                <p className={styles.WhiteTxt}>TECHNOLOGIES USED</p>
                <div className={styles.Card_OurWork_Teg}>
                    <div className={styles.Div_Card_Center_Oval}>React Native</div>
                    <div className={styles.Div_Card_Center_Oval}>Firebase</div>
                    <div className={styles.Div_Card_Center_Oval}>Redux</div>
                    <div className={styles.Div_Card_Center_Oval}>REST API</div>
                    <div className={styles.Div_Card_Center_Oval}>MongoDB</div>
                </div>  
            </div></div>
            <div className={styles.Card_OurWork_Tri_Center}><p className={styles.WhiteTxt}>TEAM MEMBERS</p>
                <div className={styles.ConteinerRow}>
                    <img src="src\assets\Image (2).png" alt="" />
                    <img src="src\assets\Image (3).png" alt="" />
                    <img src="src\assets\Image (8).png" alt="" />
                    <img src="src\assets\Image (4).png" alt="" />
                    <img src="src\assets\Image (5).png" alt="" />
                </div>
            </div>
            <button className={styles.Card_OurWork_Tri_Bot}><p>BOOK A CALL</p></button>
        </div>
    </div>


{/* //Ъыеъъоеъоъеъо */}

    <div className={styles.BorderMenu}>
            <div className={styles.Card_OurWork_One}>
        <div className={styles.Div_Card}>

            <img src="src\assets\Container (8).png" alt="" />
            <div className={styles.Div_Card_Center}>
                <div className={styles.Div_Card_Center_Oval}>
                    <p className={styles.GreyTxt}>Category</p><img className={styles.ImgDott} src="src\assets\Shape.png" alt="" /> <p className={styles.WhiteTxt}>Web Design & Development</p>
                </div> 
                <div className={styles.Div_Card_Center_Oval}>
                    <p className={styles.GreyTxt}>Time Taken</p><img className={styles.ImgDott} src="src\assets\Shape.png" alt="" /> <p className={styles.WhiteTxt}>6 months</p>
                </div> 
            </div>
            <p className={styles.GreyTxt}>A complete overhaul of a corporate website to enhance its brand identity and user experience.</p>
        </div>
    </div>

    <div className={styles.Card_OurWork_Two}><img src="src\assets\Image (9).png" alt="" /></div>
        <div className={styles.Card_OurWork_Tri}>
            <div className={styles.Card_OurWork_Tri_Up}><div className={styles.Div_Card}>
                <p className={styles.WhiteTxt}>TECHNOLOGIES USED</p>
                <div className={styles.Card_OurWork_Teg}>
                    <div className={styles.Div_Card_Center_Oval}>WordPress</div>
                    <div className={styles.Div_Card_Center_Oval}>PHP</div>
                    <div className={styles.Div_Card_Center_Oval}>HTML5</div>
                    <div className={styles.Div_Card_Center_Oval}>CSS3</div>
                    <div className={styles.Div_Card_Center_Oval}>JavaScript</div>
                </div>  
            </div></div>
            <div className={styles.Card_OurWork_Tri_Center}><p className={styles.WhiteTxt}>TEAM MEMBERS</p>
                <div className={styles.ConteinerRow}>
                    <img src="src\assets\Image (2).png" alt="" />
                    <img src="src\assets\Image (3).png" alt="" />
                    <img src="src\assets\Image (8).png" alt="" />
                    <img src="src\assets\Image (4).png" alt="" />
                    <img src="src\assets\Image (5).png" alt="" />
                </div>
            </div>
            <button className={styles.Card_OurWork_Tri_Bot}><p>BOOK A CALL</p></button>
        </div>
    </div>
</section>
</>
)
}

