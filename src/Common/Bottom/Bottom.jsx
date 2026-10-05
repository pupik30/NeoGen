import { useState } from "react";
import classes from './Bottom.module.scss';
import { Photo } from "../../file";
import { Link } from 'react-router-dom';

// ГОВНО ДЛЯ СЛАЙДЕТВ
const services = [
  { id: 1, text: 'Follow Us on Social Media' },
  { id: 2, text: 'Follow Us on Social Media' },
  { id: 3, text: 'Follow Us on Social Media' },
  { id: 4, text: 'Follow Us on Social Media' },
  { id: 5, text: 'Follow Us on Social Media' },
  { id: 6, text: 'Follow Us on Social Media' },
  { id: 7, text: 'Follow Us on Social Media' },
  { id: 8, text: 'Follow Us on Social Media' },
  { id: 9, text: 'Follow Us on Social Media' },
  { id: 10, text: 'Follow Us on Social Media' },
  { id: 11, text: 'Follow Us on Social Media' },
];

export default function Bottom() {
  const [activeFaq, setActiveFaq] = useState(0);

  const faqItems = [
    {
      title: "How long does it take to complete a web development project?",
      text: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards."
    },
    {
      title: "Can you handle large-scale mobile app development projects?",
      text: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards."
    },
    {
      title: "Can you integrate third-party APIs into our mobile app?",
      text: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards."
    },
    {
      title: "How do you ensure cross-platform compatibility for mobile apps?",
      text: "SVOSVOSVOSVSOVOSOSVOSOSOSOOVOVSOOSOVSOVSOVSOVOSOSOSVOSOSOOVSOVs."
    },
    {
      title: "What is your approach to user experience (UX) design?",
      text: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards."
    }
  ];

return (
<>
  <footer className={classes.footer}>
    <div className={classes.footerBody}>

<div className={classes.testimonialsSection}>
    <div className={classes.TESTIMONIALS}>
        {/* Шапка секции */}
        <div className={classes.sectionHeader}>
            <h2 className={classes.sectionTitle}>TESTIMONIALS</h2>
            <a href="#all" className={classes.allLink}>
                <span className={classes.arrowIcon}>↗</span>
                <span className={classes.linkText}>ALL TESTIMONIALS</span>
            </a>
        </div>

        {/* Сетка отзывов */}
        <div className={classes.testimonialsGrid}>
            
            {/* Карточка 1 */}
            <article className={classes.testimonialCard}>
                <div className={classes.cardContent}>
                    <h3 className={classes.cardTitle}>NEXGEN TURNED OUR BUSINESS AROUND!</h3>
                    <p className={classes.cardText}>
                        Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!
                    </p>
                </div>
                <div className={classes.cardFooter}>
                    <div className={classes.authorInfo}>
                        <img src="src\assets\file_0000000068b881f4b691cc348a06a467.png" alt="Sarah Thompson" className={classes.avatar} />
                        <div className={classes.authorMeta}>
                            <span className={classes.authorName}>Sarah Thompson</span>
                            <span className={classes.authorRole}>CEO of BlueBloom</span>
                        </div>
                    </div>
                    <button className={classes.actionBtn} aria-label="Read more">↗</button>
                </div>
            </article>

            {/* Карточка 2 */}
            <article className={classes.testimonialCard}>
                <div className={classes.cardContent}>
                    <h3 className={classes.cardTitle}>NEXGEN TURNED OUR BUSINESS AROUND!</h3>
                    <p className={classes.cardText}>
                        Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!
                    </p>
                </div>
                <div className={classes.cardFooter}>
                    <div className={classes.authorInfo}>
                        <img src="src\assets\file_0000000068b881f4b691cc348a06a467.png" alt="Wade Warren" className={classes.avatar} />
                        <div className={classes.authorMeta}>
                            <span className={classes.authorName}>Dart Vaider</span>
                            <span className={classes.authorRole}>Umny chelovec v ochkah</span>
                        </div>
                    </div>
                    <button className={classes.actionBtn} aria-label="Read more">↗</button>
                </div>
            </article>

            {/* Карточка 3 */}
            <article className={classes.testimonialCard}>
                <div className={classes.cardContent}>
                    <h3 className={classes.cardTitle}>WORKING WITH NEXGEN WAS A PLEASURE.</h3>
                    <p className={classes.cardText}>
                        Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.
                    </p>
                </div>
                <div className={classes.cardFooter}>
                    <div className={classes.authorInfo}>
                        <img src="src\assets\file_0000000068b881f4b691cc348a06a467.png" alt="Lisa Williams" className={classes.avatar} />
                        <div className={classes.authorMeta}>
                            <span className={classes.authorName}>Marshal Shudkov</span>
                            <span className={classes.authorRole}>Glava soveckoy Arii</span>
                        </div>
                    </div>
                    <button className={classes.actionBtn} aria-label="Read more">↗</button>
                </div>
            </article>

            {/* Карточка 4 */}
            <article className={classes.testimonialCard}>
                <div className={classes.cardContent}>
                    <h3 className={classes.cardTitle}>NEXGEN'S WEB DESIGN TEAM BROUGHT OUR VISION TO LIFE.</h3>
                    <p className={classes.cardText}>
                        Their responsive design ensures our website looks stunning on all devices, contributing to increased user engagement.
                    </p>
                </div>
                <div className={classes.cardFooter}>
                    <div className={classes.authorInfo}>
                        <img src="src\assets\file_0000000068b881f4b691cc348a06a467.png" alt="Jennifer Lee" className={classes.avatar} />
                        <div className={classes.authorMeta}>
                            <span className={classes.authorName}>Jennifer Lee</span>
                            <span className={classes.authorRole}>COO of Foodie Haven</span>
                        </div>
                    </div>
                    <button className={classes.actionBtn} aria-label="Read more">↗</button>
                </div>
            </article>
        </div>
    </div>
</div>

    {/*----------------------------------------- пробел ----------------------------------------- */}
    <section className={classes.Space}></section>
    {/*----------------------------------------- пробел ----------------------------------------- */}





      <div className={classes.faqHeader}>
        <h2>FREQUENTLY ASKED QUESTIONS</h2>
        <div className={classes.viewAll}>
          <div className={classes.viewAllCircle}>↗</div>
          <span>VIEW ALL</span>
        </div>
      </div>

      <div className={classes.faqContent}>
        <div className={classes.faqLeft}>
          {faqItems.map((item, index) => (
            <div className={classes.faqCard} key={index}>
              <div
                className={classes.faqQuestion}
                onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
              >
                <p>{item.title}</p>
                <div className={classes.faqIcon}>
                  {activeFaq === index ? "−" : "+"}
                </div>
              </div>
              {activeFaq === index && (
                <div className={classes.faqAnswer}>
                  <p>{item.text}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={classes.faqRight}>
          <h3>ASK YOUR QUESTION</h3>
          <div className={classes.inputGroup}>
            <label>NAME</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className={classes.inputGroup}>
            <label>EMAIL</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className={classes.inputGroup}>
            <label>YOUR QUESTION</label>
            <textarea placeholder="Enter Your Question Here ....." />
          </div>
          <button className={classes.sendBtn}>
            SEND YOUR MESSAGE
          </button>
        </div>
      </div>

        <div className={classes.referensBody}>
            <div className={classes.HeaderTransformBody}>
              <div className={classes.HeaderTransform}>
                <div className={classes.HeaderTransformLeft}>
                  <p className={classes.TransformMain}>Ready to Transform Your Digital Presence?</p>
                  <p className={classes.TransformMini}>Take the first step towards digital success with 
                    NexGen by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business.</p>
                </div>
                <div className={classes.HeaderTransformRight}>
                  <button className={classes.TransformButton}>Get in touch ↗</button>
                </div>
              </div>
            </div>

            {/* СЛАЙДЕР?  */}
            <div className={classes.marquee}>
              <div className={classes.marqueeContent}>
                {[...services, ...services, ...services].map((service, idx) => (
                  <span key={idx} className={classes.marqueeItem}>
                    {service.text}
                  </span>
                ))}
              </div>
            </div>
          </div> 
            <div className={classes.SocMediaBottomBody}>
                            {/* ЛЕВАЯ */}
                <div className={classes.socialGrid}>
                    <div className={classes.socialCard}>
                    <div className={classes.cardTop}>
                        <span className={classes.icon}><img src="src\assets\Icon.png" alt="" /></span>
                        <span className={classes.arrow}>↗</span>
                    </div>
                    <h3>INSTAGRAM</h3>
                    <p>Share visually appealing snippets of our latest web projects.</p>
                    </div>

                    <div className={classes.socialCard}>
                    <div className={classes.cardTop}>
                        <span className={classes.icon}><img src="src\assets\Capa 2.png" alt="" /></span>
                        <span className={classes.arrow}>↗</span>
                    </div>
                    <h3>TWITTER</h3>
                    <p>Tweet about interesting coding challenges you've overcome.</p>
                    </div>

                    <div className={classes.socialCard}>
                    <div className={classes.cardTop}>
                        <span className={classes.icon}><img src="src\assets\Vector.png" alt="" /></span>
                        <span className={classes.arrow}>↗</span>
                    </div>
                    <h3>DRIBBBLE</h3>
                    <p>Showcase design elements of our web projects.</p>
                    </div>

                    <div className={classes.socialCard}>
                    <div className={classes.cardTop}>
                        <span className={classes.icon}><img src="src\assets\Group.png" alt="" /></span>
                        <span className={classes.arrow}>↗</span>
                    </div>
                    <h3>BEHANCE</h3>
                    <p>Create detailed presentations for our projects.</p>
                    </div>
                </div>

                {/* ПРАВАЯ */}
                <div className={classes.contentColumn}>
                    {/* нав */}
                    <div className={classes.linksGrid}>
                    <div className={classes.linkGroup}>
                        <h4>Home</h4>
                        <a href="#">Why Us</a>
                        <a href="#">About Us</a>
                        <a href="#">Testimonials</a>
                        <a href="#">FAQ's</a>
                    </div>
                    <div className={classes.linkGroup}>
                        <h4>Services</h4>
                        <a href="#">Web Development</a>
                        <a href="#">App Development</a>
                        <a href="#">Web Design</a>
                        <a href="#">Digital Marketing</a>
                    </div>
                    <div className={classes.linkGroup}>
                        <h4>Projects</h4>
                        <a href="#">Klothink</a>
                        <a href="#">Zenith</a>
                        <a href="#">Novus</a>
                        <a href="#">Apex</a>
                    </div>
                    <div className={classes.linkGroup}>
                        <h4>Blogs</h4>
                        <a href="#">Business</a>
                        <a href="#">Design <span className={classes.badge}>Soon</span></a>
                        <a href="#">Development <span className={classes.badge}>Soon</span></a>
                    </div>
                    </div>

  
                    <div className={classes.newsletterBox}>
                    <div className={classes.newsletterText}>
                        <span>NEWSLETTER</span>
                        <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
                    </div>
                    <div className={classes.inputWrapper}>
                        <input type="email" placeholder="Enter your email" />
                        <button className={classes.sendArrow}>↗</button>
                    </div>
                    </div>

                    <div className={classes.copyrightRow}>
                    <span>© 2024 NextGen. All rights reserved.</span>
                    <div className={classes.legalLinks}>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>{/* Нижний фут конец*/}

        
      </footer>
    </>
  );
}
