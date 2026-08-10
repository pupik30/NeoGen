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

    <section className={styles.vacanciesSection}>
      <div className={styles.containerNex}>
        <h2 className={styles.titleNex}>JOIN OUR TEAM AT NEXGEN</h2>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.titleWrapper}>
                <span className={styles.icon}></span>
                <h3 className={styles.cardTitle}>WEB DESIGNER</h3>
              </div>
              <button className={styles.detailsBtn} aria-label="View details">
                VIEW DETAILS <span className={styles.arrow}>↗</span>
              </button>
            </div>

            <div className={styles.metaGrid}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Salary</span>
                <span className={styles.metaValue}>$45,000 - $60,000 per year</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Experience</span>
                <span className={styles.metaValue}>1+ year</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Deadline</span>
                <span className={styles.metaValue}>30/09/2025</span>
              </div>
            </div>

            <div className={styles.skillsSection}>
              <h4 className={styles.skillsTitle}>SKILLS</h4>
              <p className={styles.skillsText}>
                Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.
              </p>
            </div>

            <button className={styles.applyBtn}>APPLY NOW</button>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.titleWrapper}>
                <span className={styles.icon}></span>
                <h3 className={styles.cardTitle}>MOBILE APP DEVELOPER</h3>
              </div>
              <button className={styles.detailsBtn} aria-label="View details">
                VIEW DETAILS <span className={styles.arrow}>↗</span>
              </button>
            </div>

            <div className={styles.metaGrid}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Salary</span>
                <span className={styles.metaValue}>$55,000 - $75,000 per year</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Experience</span>
                <span className={styles.metaValue}>2+ years</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Deadline</span>
                <span className={styles.metaValue}>15/10/2025</span>
              </div>
            </div>

            <div className={styles.skillsSection}>
              <h4 className={styles.skillsTitle}>SKILLS</h4>
              <p className={styles.skillsText}>
                Proficiency in iOS or Android development (Swift, Kotlin), knowledge of mobile app design patterns, experience with mobile testing and debugging.
              </p>
            </div>

            <button className={styles.applyBtn}>APPLY NOW</button>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.titleWrapper}>
                <span className={styles.icon}></span>
                <h3 className={styles.cardTitle}>DIGITAL MARKETING SPECIALIST</h3>
              </div>
              <button className={styles.detailsBtn} aria-label="View details">
                VIEW DETAILS <span className={styles.arrow}>↗</span>
              </button>
            </div>

            <div className={styles.metaGrid}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Salary</span>
                <span className={styles.metaValue}>$50,000 - $65,000 per year</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Experience</span>
                <span className={styles.metaValue}>3+ years</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Deadline</span>
                <span className={styles.metaValue}>20/11/2025</span>
              </div>
            </div>

            <div className={styles.skillsSection}>
              <h4 className={styles.skillsTitle}>SKILLS</h4>
              <p className={styles.skillsText}>
                Proficiency in SEO, SEM, and social media marketing, experience with analytics tools (Google Analytics, etc.), content marketing expertise.
              </p>
            </div>

            <button className={styles.applyBtn}>APPLY NOW</button>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.titleWrapper}>
                <span className={styles.icon}></span>
                <h3 className={styles.cardTitle}>PROJECT MANAGER</h3>
              </div>
              <button className={styles.detailsBtn} aria-label="View details">
                VIEW DETAILS <span className={styles.arrow}>↗</span>
              </button>
            </div>

            <div className={styles.metaGrid}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Salary</span>
                <span className={styles.metaValue}>$60,000 - $80,000 per year</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Experience</span>
                <span className={styles.metaValue}>5+ years</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Deadline</span>
                <span className={styles.metaValue}>05/12/2025</span>
              </div>
            </div>

            <div className={styles.skillsSection}>
              <h4 className={styles.skillsTitle}>SKILLS</h4>
              <p className={styles.skillsText}>
                Strong organizational and communication skills, ability to manage project timelines and resources, experience in Agile project management methodologies.
              </p>
            </div>

            <button className={styles.applyBtn}>APPLY NOW</button>
          </div>
        </div>
      </div>
    </section>

</>
)
}