import { useState,useRef,useEffect } from "react"
import styles from "./AboutPage.module.scss";

import {Link} from 'react-router-dom'


export default function AboutPage() {
    
return( 
<>
<section className={styles.headerBlockBot}>
  <div className={styles.container}>
    
    {/* Левый блок: Заголовок и кнопка */}
    <div className={styles.main}>
      <h1 className={styles.title}>
        ELEVATING BRANDS <br /> IN THE DIGITAL AGE
      </h1>
      <img src="src\assets\StartAProject.png" alt="" />
    </div>

    {/* Правый блок: Сетка с метриками */}
    <div className={styles.side}>
      <div className={styles.grid}>
        <div className={styles.card}>
          <span className={styles.cardLabel}>CLIENTS</span>
          <span className={styles.cardValue}>200+</span>
        </div>
        <div className={styles.card}>
          <span className={styles.cardLabel}>PROJECTS</span>
          <span className={styles.cardValue}>280+</span>
        </div>
        <div className={styles.card}>
          <span className={styles.cardLabel}>HAPPY CLIENTS</span>
          <span className={styles.cardValue}>100%</span>
        </div>
        <div className={styles.card}>
          <span className={styles.cardLabel}>FOLLOWER</span>
          <span className={styles.cardValue}>420K</span>
        </div>
      </div>
      
      {/* Ссылка "Узнать больше" снизу */}
      <a href="#" className={styles.more}>
        <div className={styles.moreIcon}>
          {/* Место для вашей картинки/иконки стрелки вниз */}
        </div>
        <span className={styles.moreText}>KNOW MORE</span>
      </a>
    </div>

  </div>
</section>

{/*----------------------------------------- пробел ----------------------------------------- */}
                            <section className={styles.Space}></section>
{/*----------------------------------------- пробел ----------------------------------------- */}

    <section className={styles.teamSection}>
      <div className={styles.teamContainer}>
        
        {/* Заголовок */}
        <div className={styles.teamHeader}>
          <h2 className={styles.teamTitle}>
            MEET THE BRILLIANT MINDS BEHIND NEXGEN
          </h2>
          <a href="#" className={styles.teamAllMembersLink}>
            <div className={styles.teamAllMembersIcon}>
              {/*dfgdfg */}
            </div>
            <span className={styles.teamAllMembersText}>ALL MEMBERS</span>
          </a>
        </div>

        {/* команды Navi */}
        <div className={styles.teamGrid}>
          
          {/* Кар 1 */}
          <div className={styles.teamCard}>
            <div className={styles.teamCardInfo}>
              <h3 className={styles.teamCardName}>JOHN SMITH</h3>
              <p className={styles.teamCardRole}>Co-Founder & CEO</p>
            </div>
            <div className={styles.teamImageContainer}>
              <img src="src\assets\87fae8960d3aa4b1cf615ab5d9c08c511d80086c.png" alt="" />
            </div>
<div className={styles.teamSocials}>
  <a href="#" className={styles.teamSocialLink}>
    <img src="src\assets\ButtonFacebook.png" className={styles.teamSocialIcon} />
  </a>
  <a href="#" className={styles.teamSocialLink}>
    <img src="src\assets\ButtonTwt.png" alt="Twitter" className={styles.teamSocialIcon} />
  </a>
  <a href="#" className={styles.teamSocialLink}>
    <img src="src\assets\RWEADFASDAWSD.png" alt="LinkedIn" className={styles.teamSocialIcon} />
  </a>
</div>
          </div>

          {/*2 */}
          <div className={styles.teamCard}>
            <div className={styles.teamCardInfo}>
              <h3 className={styles.teamCardName}>SARAH ADAMS</h3>
              <p className={styles.teamCardRole}>Head of Design</p>
            </div>
            <div className={styles.teamImageContainer}>
              <img src="src\assets\41fe3c52e41109c095c3f163fa6ccbd416dc8fd1.png" alt="" />
            </div>
<div className={styles.teamSocials}>
  <a href="#" className={styles.teamSocialLink}>
    <img src="src\assets\ButtonFacebook.png" className={styles.teamSocialIcon} />
  </a>
  <a href="#" className={styles.teamSocialLink}>
    <img src="src\assets\ButtonTwt.png" alt="Twitter" className={styles.teamSocialIcon} />
  </a>
  <a href="#" className={styles.teamSocialLink}>
    <img src="src\assets\RWEADFASDAWSD.png" alt="LinkedIn" className={styles.teamSocialIcon} />
  </a>
</div>
          </div>

          {/* К 3 */}
          <div className={styles.teamCard}>
            <div className={styles.teamCardInfo}>
              <h3 className={styles.teamCardName}>EMILY JOHNSON</h3>
              <p className={styles.teamCardRole}>Software technician</p>
            </div>
            <div className={styles.teamImageContainer}>
              <img src="src\assets\a93a7ee368fb7d97b880407b75360dcx2c.png" alt="" />
            </div>
<div className={styles.teamSocials}>
  <a href="#" className={styles.teamSocialLink}>
    <img src="src\assets\ButtonFacebook.png" className={styles.teamSocialIcon} />
  </a>
  <a href="#" className={styles.teamSocialLink}>
    <img src="src\assets\ButtonTwt.png" alt="Twitter" className={styles.teamSocialIcon} />
  </a>
  <a href="#" className={styles.teamSocialLink}>
    <img src="src\assets\RWEADFASDAWSD.png" alt="LinkedIn" className={styles.teamSocialIcon} />
  </a>
</div>
          </div>

          {/* Картоcка 4 */}
          <div className={styles.teamCard}>
            <div className={styles.teamCardInfo}>
              <h3 className={styles.teamCardName}>WILLIAM LEE</h3>
              <p className={styles.teamCardRole}>Lead Backend Developer</p>
            </div>
            <div className={styles.teamImageContainer}>
              <img src="src\assets\ea0360ad0d901c91e4f3e9062c5d10485fe1946b.png" alt="" />
            </div>
<div className={styles.teamSocials}>
  <a href="#" className={styles.teamSocialLink}>
    <img src="src\assets\ButtonFacebook.png" className={styles.teamSocialIcon} />
  </a>
  <a href="#" className={styles.teamSocialLink}>
    <img src="src\assets\ButtonTwt.png" alt="Twitter" className={styles.teamSocialIcon} />
  </a>
  <a href="#" className={styles.teamSocialLink}>
    <img src="src\assets\RWEADFASDAWSD.png" alt="LinkedIn" className={styles.teamSocialIcon} />
  </a>
</div>
          </div>

        </div>

      </div>
    </section>




{/*----------------------------------------- пробел ----------------------------------------- */}
                            <section className={styles.Space}></section>
{/*----------------------------------------- пробел ----------------------------------------- */}


{/* Our Achievements */}

    <section className={styles.achieveSection}>
      <div className={styles.achieveContainer}>
        

        <div className={styles.achieveHeader}>
          <h2 className={styles.achieveMainTitle}>OUR ACHIEVEMENTS</h2>
        </div>

        <div className={styles.achieveGrid}>
          
          {/* Ка 1 */}
          <div className={styles.achieveCard}>
            <div className={styles.achieveCardGde}>
              <span className={styles.achieveDate}>September 2023</span>
              <div className={styles.achieveTitleGde}>
                <h3 className={styles.achieveTitle}>GLOBAL RECOGNITION FOR INNOVATION</h3>
              </div>
              <p className={styles.achieveText}>
                In 2023, our digital agency gained global acclaim for innovative solutions, 
                setting new standards in the ever-evolving digital landscape.
              </p>
            </div>
          </div>

          {/*  2 */}
          <div className={styles.achieveCard}>
            <div className={styles.achieveCardGde}>
              <span className={styles.achieveDate}>March 2019</span>
              <div className={styles.achieveTitleGde}>
                <h3 className={styles.achieveTitle}>Industry Leadership Acknowledged</h3>
              </div>
              <p className={styles.achieveText}>
                Recognized as an industry leader in 2019, our agency received prestigious awards, affirming our commitment to excellence and client satisfaction.
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className={styles.achieveCard}>
            <div className={styles.achieveCardGde}>
              <span className={styles.achieveDate}>August 2015</span>
              <div className={styles.achieveTitleGde}>
                <h3 className={styles.achieveTitle}>Expansion into International Markets</h3>
              </div>
              <p className={styles.achieveText}>
                Expanding horizons in 2015, our agency successfully entered international markets, establishing a global presence and serving clients on a broader scale.
              </p>
            </div>
          </div>

          {/* 444 */}
          <div className={styles.achieveCard}>
            <div className={styles.achieveCardGde}>
              <span className={styles.achieveDate}>January 2010</span>
              <div className={styles.achieveTitleGde}>
                <h3 className={styles.achieveTitle}>Pioneering the Digital Frontier</h3>
              </div>
              <p className={styles.achieveText}>
               In 2010, our agency was born, pioneering the digital frontier and establishing core principles that have guided us through a decade of innovation.
              </p>
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
            <h2 className={styles.sectionTitle}>AWARDS & RECOGNITIONS</h2>
        </div>

        {/* Сетка отзывов */}
        <div className={styles.testimonialsGrid}>
            
            {/* Карточка 1 */}
            <article className={styles.testimonialCard}>
                <div className={styles.testimonialCardImg}>
                    <div className={styles.DateBlock}>
                      <p className={styles.DATEtxt}>Date</p>
                      <img src="src\assets\Shape.png" alt="" />
                      <p className={styles.DATEtime}>October 2017</p>
                    </div>   
                <img src="src\assets\GuardIcon.png" alt="Sarah Thompson" className={styles.avatar} />
                </div>
                <div className={styles.CardtxtConteiner}>
                    <p className={styles.TextTop}>DIGITAL EXCELLENCE AWARD</p>
                    <p className={styles.TextBot}>Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions that push the boundaries of creativity and functionality.</p>
                </div>
            </article>

            {/* Карточка 2 */}
            <article className={styles.testimonialCard}>
                <div className={styles.testimonialCardImg}>
                    <div className={styles.DateBlock}>
                      <p className={styles.DATEtxt}>Date</p>
                      <img src="src\assets\Shape.png" alt="" />
                      <p className={styles.DATEtime}>March 2019</p>
                    </div>   
                <img src="src\assets\GuardIcon.png" alt="Sarah Thompson" className={styles.avatar} />
                </div>
                <div className={styles.CardtxtConteiner}>
                    <p className={styles.TextTop}>TOP MOBILE APP DEVELOPMENT AGENCY</p>
                    <p className={styles.TextBot}>Recognized as a top mobile app development agency by industry experts, highlighting our proficiency in delivering seamless and user-centric mobile applications.</p>
                </div>
            </article>

            {/* Карточка 3 */}
            <article className={styles.testimonialCard}>
                <div className={styles.testimonialCardImg}>
                    <div className={styles.DateBlock}>
                      <p className={styles.DATEtxt}>Date</p>
                      <img src="src\assets\Shape.png" alt="" />
                      <p className={styles.DATEtime}>July 2022</p>
                    </div>   
                <img src="src\assets\GuardIcon.png" alt="Sarah Thompson" className={styles.avatar} />
                </div>
                <div className={styles.CardtxtConteiner}>
                    <p className={styles.TextTop}>BEST DIGITAL MARKETING CAMPAIGN</p>
                    <p className={styles.TextBot}>Awarded for an exceptional digital marketing campaign with outstanding results, showcasing our data-driven strategies and targeted marketing efforts that achieved remarkable business growth for our clients.</p>
                </div>
            </article>

            {/* Карточка 4 */}
            <article className={styles.testimonialCard}>
                <div className={styles.testimonialCardImg}>
                    <div className={styles.DateBlock}>
                      <p className={styles.DATEtxt}>Date</p>
                      <img src="src\assets\Shape.png" alt="" />
                      <p className={styles.DATEtime}>November 2024</p>
                    </div>   
                <img src="src\assets\GuardIcon.png" alt="Sarah Thompson" className={styles.avatar} />
                </div>
                <div className={styles.CardtxtConteiner}>
                    <p className={styles.TextTop}>INNOVATIVE TECH STARTUP AWARD</p>
                    <p className={styles.TextBot}>Recognition of our pioneering efforts as a technology startup, acknowledging our commitment to exploring and implementing cutting-edge technologies to drive innovation in the digital space.</p>
                </div>
            </article>
        </div>
    </div>
</section>



</>
)
}
