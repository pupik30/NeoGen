import { useState,useRef,useEffect } from "react"
import styles from "./MainPage.module.scss";

import {Link} from 'react-router-dom'



export default function MainPage() {
      const services = [
    { id: 1, text: 'Digital Marketing' },
    { id: 2, text: 'Website Design' },
    { id: 3, text: 'Branding' },
    { id: 4, text: 'Website Development' },
    { id: 5, text: 'Mobile App Development' },
    { id: 6, text: 'Digital Marketing' },
    { id: 7, text: 'Website Design' },
    { id: 8, text: 'Branding' },
    { id: 9, text: 'Website Development' },
    { id: 10, text: 'Mobile App Development' }
  ];
    return( 
    <>
    <main className={styles.MainPage}>
         {/* Блок main нижний */}
            <div className={styles.headerBlockBot}>
                {/* Левая плашка main*/}
                        <div className={styles.headerBlockBotLeft}>
                            {/* Три строчки */}
                            <div className={styles.LeftBlockTop}>
                                <div className={styles.DigitalButton}>
                                    <div className={styles.MainText}><p>DIGITAL SOLUTION <br></br> THAT DRIVE SUCCSESS</p></div>
                                    <button className={styles.img}><img src="src\assets\StartAProject.png" alt=""/></button>
                                </div>
                                <div className={styles.NexGen}>
                                    <p className={styles.MiniTxt}>At NexGen, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape.</p>
                                </div>

                            </div>
                            {/* Никжний вагон */}
                                <div className={styles.marquee}>
                                    <div className={styles.marqueeContent}>
                                        {[...services, ...services, ...services].map((service, idx) => (
                                        <span key={idx} className={styles.marqueeItem}>
                                            {service.text}
                                        </span>
                                        ))}
                                    </div>
                                </div>
                        </div>

                        {/* Правая плашка Main */}
                    <div className={styles.headerBlockBotRight}>
                        
                
           
                <div className={styles.burburheader}>
                    <div className={styles.imgcontainer}>
                        <img src="src\assets\Button.png" alt="" />
                    </div>
                      
                    <div className={styles.headercontainer2}>
                        <div>
                            <p>EPSTAIN REAL ESLAND</p>
                            <p>Web Development.</p>
                        </div> 
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.InfoMenu}>
            <div className={styles.InfoBlock}><p className={styles.InfoBlockTop}>Clients</p><p className={styles.InfoBlockBot}>200+</p></div>
            <div className={styles.InfoBlock}><p className={styles.InfoBlockTop}>Project</p><p className={styles.InfoBlockBot}>280+</p></div>
            <div className={styles.InfoBlock}><p className={styles.InfoBlockTop}>Happy Clients</p><p className={styles.InfoBlockBot}>100%</p></div>
            <div className={styles.InfoBlock}><p className={styles.InfoBlockTop}>Follower</p><p className={styles.InfoBlockBot}>420K</p></div>
            <div className={styles.InfoBlock}><p className={styles.InfoBlockTop}>Years Of Experience</p><p className={styles.InfoBlockBot}>10+</p></div>
            <div className={styles.InfoBlock}><p className={styles.InfoBlockTop}><img src="src\assets\Icon Container.png" alt="" />KNOW MORE</p></div>
        </div>
    
    <section className={styles.Space}></section>



    <section className={styles.ReasonsChoose}> 
        <div className={styles.BorderMenu}>

            <div className={styles.InfoBlockText}>
                <p className={styles.InfoBlockTextP}>Reasons to Choose NexGen for Your Digital Journey</p>
            </div>
            {/* Одын */}
            <div className={styles.BotDivRow}>
                <div className={styles.ReasonsBotfour}>
                    <div className={styles.ConteinerFour}>
                        <p className={styles.ConteinerFourMainT}>Expertise in Cutting-Edge Technologies</p>
                        <p className={styles.ConteinerFourMiniT}>NexGen ensures your projects are powered by state-of-the-art technologies, guaranteeing innovation and future-proof solutions.</p>
                        <div className={styles.ConteinerBotDiv}><img src="src\assets\Icon Container.png" alt="" />
                            <div className={styles.ConteinerBotDivText}><p>Learn More</p></div>
                        </div>
                    </div>
                </div>
                {/* Два */}
                <div className={styles.ReasonsBotfour}>
                    <div className={styles.ConteinerFour}>
                        <p className={styles.ConteinerFourMainT}>Expertise in Cutting-Edge Technologies</p>
                        <p className={styles.ConteinerFourMiniT}>NexGen demonstrates a consistent ability to meet and exceed client expectations, providing reliable and effective web solutions tailored to diverse needs.</p>
                        <div className={styles.ConteinerBotDiv}><img src="src\assets\Icon Container.png" alt="" />
                            <div className={styles.ConteinerBotDivText}><p>Learn More</p></div>
                        </div>
                    </div>
                </div>
                {/* Три */}
                <div className={styles.ReasonsBotfour}>
                    <div className={styles.ConteinerFour}>
                        <p className={styles.ConteinerFourMainT}>Client-Centric Approach</p>
                        <p className={styles.ConteinerFourMiniT}>At NexGen, we prioritize understanding our clients' unique requirements, fostering transparent communication throughout the development process.</p>
                        <div className={styles.ConteinerBotDiv}><img src="src\assets\Icon Container.png" alt="" />
                            <div className={styles.ConteinerBotDivText}><p>Learn More</p></div>
                        </div>
                    </div>
                </div>
                {/* Чатыре */}
                <div className={styles.ReasonsBotfour}>
                    <div className={styles.ConteinerFour}>
                        <p className={styles.ConteinerFourMainT}>Dedicated Team of Professionals</p>
                        <p className={styles.ConteinerFourMiniT}>Our professionals bring a wealth of expertise to the table, ensuring the delivery of top-notch, scalable, and secure web solutions for your business.</p>
                        <div className={styles.ConteinerBotDiv}><img src="src\assets\Icon Container.png" alt="" />
                            <div className={styles.ConteinerBotDivText}><p>Learn More</p></div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>

{/*----------------------------------------- пробел ----------------------------------------- */}
                            <section className={styles.Space}></section>
{/*----------------------------------------- пробел ----------------------------------------- */}

    <section className={styles.ReasonsChoose2}> 



        <div className={styles.BorderMenu2}>
            <div className={styles.InfoBlockText2}>
                <div className={styles.Text522}>
                <p className={styles.InfoBlockTextP2}>OUR SERVICES</p>
                </div>
            </div>
            <div className={styles.BotDivRow2}>
                <div className={styles.ReasonsBotfour2}>
                    <div className={styles.ConteinerFour2}>
                        <div className={styles.imgcontainer2}><img src="src\assets\Webhack1.png"></img>     </div>
                        <p className={styles.ConteinerFourMiniT2}>Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting.</p>
                            <div className={styles.ConteinerBotDivText2}><p>STARTS FROM $1,800</p></div>
                    </div>
                </div>
                <div className={styles.ReasonsBotfour2}>
                    <div className={styles.ConteinerFour2}>
                        <div className={styles.imgcontainer2}><img src="src\assets\MobileHack2.png"></img>           </div>
                        <p className={styles.ConteinerFourMiniT2}>With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go.</p>
                            <div className={styles.ConteinerBotDivText2}><p>STARTS FROM $1,800</p></div>
                    </div>         
                </div>
                                <div className={styles.ReasonsBotfour2}>
                    <div className={styles.ConteinerFour2}>
                        <div className={styles.imgcontainer2}><img src="src\assets\WebHack3.png"></img></div>
                        <p className={styles.ConteinerFourMiniT2}>Our Web Development service is focused on turning your website into a powerful digital asset. We utilize the latest technologies and industry best practices to build websites.</p>
                            <div className={styles.ConteinerBotDivText2}><p>STARTS FROM $1,800</p></div>
                    </div>                    
                </div>
                                <div className={styles.ReasonsBotfour2}>
                    <div className={styles.ConteinerFour2}>
                        <div className={styles.imgcontainer2}><img src="src\assets\DigitalHack.png"></img> </div>
                        <p className={styles.ConteinerFourMiniT2}>In the digital age, marketing is a critical aspect of your business's success. Our Digital Marketing service employs data-driven strategies to enhance your brand's visibility</p>
                            <div className={styles.ConteinerBotDivText2}><p>STARTS FROM $1,800</p></div>
                        </div>
                </div>

            </div>

        </div>
    </section>
     

{/*----------------------------------------- пробел ----------------------------------------- */}
                            <section className={styles.Space}></section>
{/*----------------------------------------- пробел ----------------------------------------- */}
<section className={styles.OurWorks}>
    <div className={styles.OurWorksBlock}><div className={styles.OurWorksBlockTxt}><p className={styles.InfoBlockTextP}>OUR WORKS</p><img src="src\assets\Container (6).png" alt="" /></div></div>

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
                <p className={styles.WhiteTxt}>Technologies Used</p>
                <div className={styles.Card_OurWork_Teg}>
                    <div className={styles.Div_Card_Center_Oval}>React Native</div>
                    <div className={styles.Div_Card_Center_Oval}>Firebase</div>
                    <div className={styles.Div_Card_Center_Oval}>Redux</div>
                    <div className={styles.Div_Card_Center_Oval}>REST API</div>
                    <div className={styles.Div_Card_Center_Oval}>MongoDB</div>
                </div>  
            </div></div>
            <div className={styles.Card_OurWork_Tri_Center}><p className={styles.WhiteTxt}>Team Members</p>
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
                <p className={styles.WhiteTxt}>Technologies Used</p>
                <div className={styles.Card_OurWork_Teg}>
                    <div className={styles.Div_Card_Center_Oval}>WordPress</div>
                    <div className={styles.Div_Card_Center_Oval}>PHP</div>
                    <div className={styles.Div_Card_Center_Oval}>HTML5</div>
                    <div className={styles.Div_Card_Center_Oval}>CSS3</div>
                    <div className={styles.Div_Card_Center_Oval}>JavaScript</div>
                </div>  
            </div></div>
            <div className={styles.Card_OurWork_Tri_Center}><p className={styles.WhiteTxt}>Team Members</p>
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


{/*----------------------------------------- пробел ----------------------------------------- */}
                            <section className={styles.Space}></section>
{/*----------------------------------------- пробел ----------------------------------------- */}


<section className={styles.Testimonials}>
  <div className={styles.Testimonials_Container}>
    
    {/*  секции */}
    <div className={styles.Testimonials_Header}>
      <h2 className={styles.Testimonials_Title}>Testimonials</h2>
      <button className={styles.AllTestimonials_Btn}>
        <img src="src\assets\Container (9).png" alt="" />
      </button>
    </div>

    {/*  отзыв */}
    <div className={styles.Testimonials_Grid}>
      
      {/*  1 */}
      <div className={styles.Card_Testimonial}>
        <div className={styles.Card_Testimonial_Body}>
          <h3 className={styles.Card_Testimonial_Heading}>NEXGEN TURNED OUR BUSINESS AROUND!</h3>
          <p className={styles.Card_Testimonial_Txt}>
            Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!
          </p>
        </div>
        <div className={styles.Card_Testimonial_Footer}>
          <div className={styles.Card_Testimonial_User}>
            <img src="src\assets\Image (10).png" alt="" className={styles.Card_Testimonial_Avatar} />
            <div className={styles.Card_Testimonial_Meta}>
              <span className={styles.Card_Testimonial_Name}>Sarah Thompson</span>
              <span className={styles.Card_Testimonial_Role}>CEO of BlueBloom</span>
            </div>
          </div>
          <button className={styles.Card_Testimonial_Btn}>↗</button>
        </div>
      </div>

      {/*  2 */}
      <div className={styles.Card_Testimonial}>
        <div className={styles.Card_Testimonial_Body}>
          <h3 className={styles.Card_Testimonial_Heading}>NEXGEN TURNED OUR BUSINESS AROUND!</h3>
          <p className={styles.Card_Testimonial_Txt}>
            Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!
          </p>
        </div>
        <div className={styles.Card_Testimonial_Footer}>
          <div className={styles.Card_Testimonial_User}>
            <img src="src\assets\Image (12).png" alt="" className={styles.Card_Testimonial_Avatar} />
            <div className={styles.Card_Testimonial_Meta}>
              <span className={styles.Card_Testimonial_Name}>Wade Warren</span>
              <span className={styles.Card_Testimonial_Role}>Art Director</span>
            </div>
          </div>
          <button className={styles.Card_Testimonial_Btn}>↗</button>
        </div>
      </div>

      {/*  3 */}
      <div className={styles.Card_Testimonial}>
        <div className={styles.Card_Testimonial_Body}>
          <h3 className={styles.Card_Testimonial_Heading}>WORKING WITH NEXGEN WAS A PLEASURE.</h3>
          <p className={styles.Card_Testimonial_Txt}>
            Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.
          </p>
        </div>
        <div className={styles.Card_Testimonial_Footer}>
          <div className={styles.Card_Testimonial_User}>
            <img src="src\assets\Image (13).png" alt="" className={styles.Card_Testimonial_Avatar} />
            <div className={styles.Card_Testimonial_Meta}>
              <span className={styles.Card_Testimonial_Name}>Lisa Williams</span>
              <span className={styles.Card_Testimonial_Role}>CEO of HealthTech</span>
            </div>
          </div>
          <button className={styles.Card_Testimonial_Btn}>↗</button>
        </div>
      </div>

      {/* Карточка 4 */}
      <div className={styles.Card_Testimonial}>
        <div className={styles.Card_Testimonial_Body}>
          <h3 className={styles.Card_Testimonial_Heading}>NEXGEN'S WEB DESIGN TEAM BROUGHT OUR VISION TO LIFE.</h3>
          <p className={styles.Card_Testimonial_Txt}>
            Their responsive design ensures our website looks stunning on all devices, contributing to increased user engagement.
          </p>
        </div>
        <div className={styles.Card_Testimonial_Footer}>
          <div className={styles.Card_Testimonial_User}>
            <img src="src\assets\Image (14).png" alt="" className={styles.Card_Testimonial_Avatar} />
            <div className={styles.Card_Testimonial_Meta}>
              <span className={styles.Card_Testimonial_Name}>Jennifer Lee</span>
              <span className={styles.Card_Testimonial_Role}>COO of Foodie Haven</span>
            </div>
          </div>
          <button className={styles.Card_Testimonial_Btn}>↗</button>
        </div>
      </div>

    </div>
  </div>
</section>

{/*----------------------------------------- пробел ----------------------------------------- */}
                            <section className={styles.Space}></section>
{/*----------------------------------------- пробел ----------------------------------------- */}

</main> 
    

</>
)
}
