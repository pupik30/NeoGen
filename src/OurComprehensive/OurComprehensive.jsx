import { useState,useRef,useEffect } from "react"
import styles from "./OurComprehensive.module.scss";

import {Link} from 'react-router-dom'




export default function OurComprehensive() {
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
    <section className={styles.OurComprehensive}>
        <div className={styles.headerBlockBot}>
            {/* Левая плашка main*/}
            <div className={styles.headerBlockBotLeft}>
                {/* Три строчки */}
                <div className={styles.LeftBlockTop}>
                    <div className={styles.DigitalButton}>
                        <div className={styles.MainText}><p className={styles.MainTextP}>OUR COMPREHENSIVE  <br></br>DIGITAL SOLUTION</p></div>
                        <button className={styles.img}><img src="src\assets\StartAProject.png" alt=""/></button>
                    </div>
                    <div className={styles.NexGen}>
                        <p className={styles.MiniTxt}>At NexGen, we offer a comprehensive suite of digital solutions designed to propel your business to new heights in the digital realm. With a team of skilled professionals, cutting-edge technologies, and a passion for innovation</p>
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
                <div className={styles.insideBlockBotRight}> 
                    
                    <div className={styles.viewAll}>
                        <div className={styles.viewAllCircle}>↗</div>
                        <span>VIEW BLOG</span>
                    </div>
                    <button className={styles.ButOpaciti}>WEB DEVELOPMENT.</button>
                </div>
            </div>
        </div>
    </section>
    {/*----------------------------------------- пробел ----------------------------------------- */}
                                <section className={styles.Space}></section>
    {/*----------------------------------------- пробел ----------------------------------------- */}



    {/* OURSERV */}
    <section className={styles.ReasonsChoose2}> 
    

            <div className={styles.BorderMenu2}>
                <div className={styles.InfoBlockText2}>
                    <div className={styles.Text522}>
                    <p className={styles.InfoBlockTextP2}>OUR SERVICES</p>
                    </div>
                </div>
                <div className={styles.BotDivRow2}>



            {/* 2 сразу */}
                    {/* карточка слева */}
                    <div className={styles.ReasonsBotfour2}>
                        <div className={styles.insideDivOurServ}>
{/* 1 */}
                            <div className={styles.TopOurServCard}>
                                <div className={styles.TopOurServCardLEFT}>
                                    <div className={styles.ImageBorder}><img src="src\assets\Icon Container Cube.png" alt="" /></div>
                                    <p>WEB DISIGN</p>
                                </div>
                                <div className={styles.TopOurServCardRIGHT}>
                                    <div className={styles.ImageBorderCurcle}><img src="src\assets\Icon Conteiner Cucle.png" alt="" /></div>
                                    <p>BOOK A CALL</p>
                                </div>  
                            </div>
{/* 2 */}
                             <div className={styles.MidOurServCard}>

                                <p>Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting.</p>
                                <div className={styles.StartPrice}> Starts From $1,500</div>
                             </div>
                        </div>
                    </div>


                    <div className={styles.ReasonsBotfour2}>
                        <div className={styles.insideDivOurServRight}>
                            {/* 1 */}
                            <div className={styles.TopOurServCard}>
                                <div className={styles.TopOurServCardLEFT}>
                                    <p>WEB DESIGN PROJECT</p>
                                </div>
                                <div className={styles.TopOurServCardRIGHT}>
                                    <div className={styles.ImageBorder}><img src="src\assets\Icon Container.png" alt="" /></div>
                                    <p>VEIW ALL</p>
                                </div>  
                            </div>
{/* 2 */}
                             <div className={styles.RightCardBottom}>
                                <div className={styles.RightCardBottomImg}></div>
                                <div className={styles.LeftCardBottomImg}></div>
                             </div>
                        </div>
                    </div>



{/* 2 сразу   2*/}
    {/* карточка слева */}
    <div className={styles.ReasonsBotfour2}>
        <div className={styles.insideDivOurServ}>
{/* 1 */}
            <div className={styles.TopOurServCard}>
                <div className={styles.TopOurServCardLEFT}>
                    <div className={styles.ImageBorder}><img src="src\assets\Cobteiner42.png" alt="" /></div>
                    <p>MOBILE APP DEVELOPMENT</p>
                </div>
                <div className={styles.TopOurServCardRIGHT}>
                    <div className={styles.ImageBorderCurcle}><img src="src\assets\Icon Conteiner Cucle.png" alt="" /></div>
                    <p>BOOK A CALL</p>
                </div>  
            </div>
{/* 2 */}
                <div className={styles.MidOurServCard}>

                <p>With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go.</p>
                <div className={styles.StartPrice}>Starts From $2,500</div>
                </div>
        </div>
    </div>
    <div className={styles.ReasonsBotfour2}>
        <div className={styles.insideDivOurServRight}>
            {/* 1 */}
            <div className={styles.TopOurServCard}>
                <div className={styles.TopOurServCardLEFT}>
                    <p>MOBILE APP DEVELOPMENT PROJECTS</p>
                </div>
                <div className={styles.TopOurServCardRIGHT}>
                    <div className={styles.ImageBorderCurcle}><img src="src\assets\Icon Container.png" alt="" /></div>
                    <p>VEIW ALL</p>
                </div>  
            </div>
{/* 2 */}
                <div className={styles.RightCardBottom}>
                <div className={styles.RightCardBottomImg2}></div>
                <div className={styles.LeftCardBottomImg2}></div>
                </div>
        </div>
    </div>


                {/* 2 сразу */}
    {/* карточка слева */}
    <div className={styles.ReasonsBotfour2}>
        <div className={styles.insideDivOurServ}>
{/* 1 */}
            <div className={styles.TopOurServCard}>
                <div className={styles.TopOurServCardLEFT}>
                    <div className={styles.ImageBorder}><img src="src\assets\rrrrrrrrrrrr.png" alt="" /></div>
                    <p>WEB DEVELOPMENT</p>
                </div>
                <div className={styles.TopOurServCardRIGHT}>
                    <div className={styles.ImageBorderCurcle}><img src="src\assets\Icon Conteiner Cucle.png" alt="" /></div>
                    <p>BOOK A CALL</p>
                </div>  
            </div>
{/* 2 */}
                <div className={styles.MidOurServCard}>

                <p>Our Web Development service is focused on turning your website into a powerful digital asset. We utilize the latest technologies and industry best practices to build websites.</p>
                <div className={styles.StartPrice}> Starts From $1,800</div>
                </div>
        </div>
    </div>


                    <div className={styles.ReasonsBotfour2}>
                        <div className={styles.insideDivOurServRight}>
                            {/* 1 */}
                            <div className={styles.TopOurServCard}>
                                <div className={styles.TopOurServCardLEFT}>
                                    <p>WEB DEVELOPMENT PROJECTS</p>
                                </div>
                                <div className={styles.TopOurServCardRIGHT}>
                                    <div className={styles.ImageBorder}><img src="src\assets\Icon Container.png" alt="" /></div>
                                    <p>VEIW ALL</p>
                                </div>  
                            </div>
{/* 2 */}
                             <div className={styles.RightCardBottom}>
                                <div className={styles.RightCardBottomImg3}></div>
                                <div className={styles.LeftCardBottomImg3}></div>
                             </div>
                        </div>
                    </div>


                                {/* 2 сразу */}
                    {/* карточка слева */}
                    <div className={styles.ReasonsBotfour2}>
                        <div className={styles.insideDivOurServ}>
{/* 1 */}
                            <div className={styles.TopOurServCard}>
                                <div className={styles.TopOurServCardLEFT}>
                                    <div className={styles.ImageBorder}><img src="src\assets\312eqwqw123.png" alt="" /></div>
                                    <p>DIGITAL MARKETING</p>
                                </div>
                                <div className={styles.TopOurServCardRIGHT}>
                                    <div className={styles.ImageBorderCurcle}><img src="src\assets\Icon Conteiner Cucle.png" alt="" /></div>
                                    <p>BOOK A CALL</p>
                                </div>  
                            </div>
{/* 2 */}
                             <div className={styles.MidOurServCard}>

                                <p>In the digital age, marketing is a critical aspect of your business's success. Our Digital Marketing service employs data-driven strategies to enhance your brand's visibility</p>
                                <div className={styles.StartPrice}> Starts From $1,200</div>
                             </div>
                        </div>
                    </div>


                    <div className={styles.ReasonsBotfour2}>
                        <div className={styles.insideDivOurServRight}>
                            {/* 1 */}
                            <div className={styles.TopOurServCard}>
                                <div className={styles.TopOurServCardLEFT}>
                                    <p>WEB DESIGN PROJECT</p>
                                </div>
                                <div className={styles.TopOurServCardRIGHT}>
                                    <div className={styles.ImageBorder}><img src="src\assets\Icon Container.png" alt="" /></div>
                                    <p>VEIW ALL</p>
                                </div>  
                            </div>
{/* 2 */}
                             <div className={styles.RightCardBottom}>
                                <div className={styles.RightCardBottomImg}><img src="" alt="" /></div>
                                <div className={styles.LeftCardBottomImg}><img src="" alt="" /></div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    {/*----------------------------------------- пробел ----------------------------------------- */}
    <section className={styles.Space}></section>
    {/*----------------------------------------- пробел ----------------------------------------- */}

{/* //Success Stories */}

<section className={styles.SuccessStoriesMain}>
    <div className={styles.Headline}>
        <div className={styles.HeadlineGde}>

            <p>Success Stories</p>
            <div className={styles.ViewAl3link}>
                <div className={styles.ImageBorder}><img src="src\assets\Icon Container.png" alt="" /></div>
                <p>VEIW ALL</p>
            </div> 
        </div> 
    </div>

    <div className={styles.BorderMenu2}>
        <div className={styles.ReasonsBotfour2}>

            <div className={styles.headerRow}>
                <div className={styles.logoAndTitle}>

                        <img src="src\assets\Icon Container12312312.png" alt="Klothink Logo" className={styles.logoIcon} />

                    <h3 className={styles.title}>KLOTHINK</h3>
                </div>
                
                <a href="https://youtu.be/dQw4w9WgXcQ?si=apEqhwzCN60m2E-r" target="_blank" rel="noopener noreferrer" className={styles.visitBtn}>
                    <span className={styles.arrowIcon}>↗</span>
                    <span className={styles.btnText}>VISIT WEBSITE</span>
                </a>
            </div>

            {/* Нижняя строка: Теги / Категории */}
            <div className={styles.tagsRow}>
                <div className={styles.tagItem}>
                    <span className={styles.tagLabel}>Industry</span>
                    <span className={styles.tagValue}>E-commerce</span>
                </div>
                <div className={styles.tagItem}>
                    <span className={styles.tagLabel}>Service Utilized</span>
                    <span className={styles.tagValue}>Design & Development</span>
                </div>
            </div>
        </div>

        <div className={styles.Region}>
            <div className={styles.RegionBonusBtn}>
                <div className={styles.BacklGrayChallengeBtn}>
                    Challenge
                </div>
                <div className={styles.BacklGraySolutionBtn}>
                    Solution    
                </div>
                <div className={styles.BacklGrayResultsBtn}>
                    Results
                </div>
            </div>

            <div className={styles.BacklGray}>
                <div className={styles.BacklGrayText}>
                    <div className={styles.BacklGrayTextTop}>
                            Solution
                    </div>  
                    <div className={styles.BacklGrayTextBot}>
                    Our team conducted a thorough analysis of their target audience and business objectives. We designed a modern and intuitive website with seamless navigation and a mobile-responsive layout. Additionally, we integrated an efficient checkout process and optimized the site for search engines.
                    </div>                   
                </div>
            </div>
        </div>
    </div>

    <div className={styles.BorderMenu2}>
        <div className={styles.ReasonsBotfour2}>

            <div className={styles.headerRow}>
                <div className={styles.logoAndTitle}>

                        <img src="src\assets\Icon Container12312312.png" alt="Klothink Logo" className={styles.logoIcon} />

                    <h3 className={styles.title}>Fitness Tracker App</h3>
                </div>
                
                <a href="https://youtu.be/dQw4w9WgXcQ?si=apEqhwzCN60m2E-r" target="_blank" rel="noopener noreferrer" className={styles.visitBtn}>
                    <span className={styles.arrowIcon}>↗</span>
                    <span className={styles.btnText}>VISIT WEBSITE</span>
                </a>
            </div>

            {/* Нижняя строка: Теги / Категории */}
            <div className={styles.tagsRow}>
                <div className={styles.tagItem}>
                    <span className={styles.tagLabel}>Industry</span>
                    <span className={styles.tagValue}>Health & Fitness</span>
                </div>
                <div className={styles.tagItem}>
                    <span className={styles.tagLabel}>Service Utilized</span>
                    <span className={styles.tagValue}>Mobile App Development</span>
                </div>
            </div>
        </div>

        <div className={styles.Region}>
            <div className={styles.RegionBonusBtn}>
                <div className={styles.BacklGrayChallengeBtn}>
                    Challenge
                </div>
                <div className={styles.BacklGraySolutionBtn}>
                    Solution    
                </div>
                <div className={styles.BacklGrayResultsBtn}>
                    Results
                </div>
            </div>

            <div className={styles.BacklGray}>
                <div className={styles.BacklGrayText}>
                    <div className={styles.BacklGrayTextTop}>
                            Solution
                    </div>  
                    <div className={styles.BacklGrayTextBot}>
Leveraging our expertise in app development, we built an interactive mobile app with user-friendly features. The app allowed users to set personalized fitness goals, track their progress, and share achievements on social media platforms. Real-time data synchronization enabled users to access their data on multiple devices.                    </div>                   
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
        {/* Шапка секции */}
        <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>TESTIMONIALS</h2>
            <a href="#all" className={styles.allLink}>
            <span className={styles.arrowIcon}>↗</span>
            <span className={styles.linkText}>ALL TESTIMONIALS</span>
            </a>
        </div>

        {/* Сетка отзывов */}
        <div className={styles.testimonialsGrid}>
            
            {/* Карточка 1 */}
            <article className={styles.testimonialCard}>
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>NEXGEN TURNED OUR BUSINESS AROUND!</h3>
                <p className={styles.cardText}>
                Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!
                </p>
            </div>
            <div className={styles.cardFooter}>
                <div className={styles.authorInfo}>
                <img src="src\assets\file_0000000068b881f4b691cc348a06a467.png" alt="Sarah Thompson" className={styles.avatar} />
                <div className={styles.authorMeta}>
                    <span className={styles.authorName}>Sarah Thompson</span>
                    <span className={styles.authorRole}>CEO of BlueBloom</span>
                </div>
                </div>
                <button className={styles.actionBtn} aria-label="Read more">↗</button>
            </div>
            </article>

            {/* Карточка 2 */}
            <article className={styles.testimonialCard}>
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>NEXGEN TURNED OUR BUSINESS AROUND!</h3>
                <p className={styles.cardText}>
                Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!
                </p>
            </div>
            <div className={styles.cardFooter}>
                <div className={styles.authorInfo}>
                <img src="src\assets\file_0000000068b881f4b691cc348a06a467.png" alt="Wade Warren" className={styles.avatar} />
                <div className={styles.authorMeta}>
                    <span className={styles.authorName}>Dart Vaider</span>
                    <span className={styles.authorRole}>Umny chelovec v ochkah</span>
                </div>
                </div>
                <button className={styles.actionBtn} aria-label="Read more">↗</button>
            </div>
            </article>

            {/* Карточка 3 */}
            <article className={styles.testimonialCard}>
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>WORKING WITH NEXGEN WAS A PLEASURE.</h3>
                <p className={styles.cardText}>
                Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.
                </p>
            </div>
            <div className={styles.cardFooter}>
                <div className={styles.authorInfo}>
                <img src="src\assets\file_0000000068b881f4b691cc348a06a467.png" alt="Lisa Williams" className={styles.avatar} />
                <div className={styles.authorMeta}>
                    <span className={styles.authorName}>Marshal Shudkov</span>
                    <span className={styles.authorRole}>Glava soveckoy Arii</span>
                </div>
                </div>
                <button className={styles.actionBtn} aria-label="Read more">↗</button>
            </div>
            </article>

            {/* Карточка 4 */}
            <article className={styles.testimonialCard}>
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>NEXGEN'S WEB DESIGN TEAM BROUGHT OUR VISION TO LIFE.</h3>
                <p className={styles.cardText}>
                Their responsive design ensures our website looks stunning on all devices, contributing to increased user engagement.
                </p>
            </div>
            <div className={styles.cardFooter}>
                <div className={styles.authorInfo}>
                <img src="src\assets\file_0000000068b881f4b691cc348a06a467.png" alt="Jennifer Lee" className={styles.avatar} />
                <div className={styles.authorMeta}>
                    <span className={styles.authorName}>Jennifer Lee</span>
                    <span className={styles.authorRole}>COO of Foodie Haven</span>
                </div>
                </div>
                <button className={styles.actionBtn} aria-label="Read more">↗</button>
            </div>
            </article>
    </div>
        </div>
</section>
    {/*----------------------------------------- пробел ----------------------------------------- */}
    <section className={styles.Space}></section>
    {/*----------------------------------------- пробел ----------------------------------------- */}


</>
)
}