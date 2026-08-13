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
            {/* //1 */}
            <div className={styles.cardHeader}>
              <div className={styles.titleWrapper}>
                <span className={styles.icon}><img src="src\assets\Icon Container (1).png" alt="" /></span>
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
{/* //2? */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.titleWrapper}>
                <span className={styles.icon}><img src="src\assets\Cobteiner42.png" alt="" /></span>
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
{/* 3 */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.titleWrapper}>
                <span className={styles.icon}><img src="src\assets\312eqwqw123.png" alt="" /></span>
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
{/* 4 */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.titleWrapper}>
                <span className={styles.icon}><img src="src\assets\Icon Container (4).png" alt="" /></span>
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




{/*----------------------------------------- пробел ----------------------------------------- */}
                            <section className={styles.Space}></section>
{/*----------------------------------------- пробел ----------------------------------------- */}


<section className={styles.applySection}>
  <div className={styles.containerNex}>
    <h2 className={styles.titleNexTwo}>HOW TO APPLY</h2>
    
    <div className={styles.applyGrid}>
      {/* 1 */}
      <div className={styles.applyCard}>
        <div className={styles.stepNumber}>Step 01</div>
        <h3 className={styles.stepTitle}>EXPLORE JOB LISTINGS</h3>
        <p className={styles.stepText}>
          Visit our website's "Careers" page to explore the current job listings. Review the various roles available and select the position that aligns with your skills, experience, and career aspirations.
        </p>
        <button className={styles.knowMoreBtn} aria-label="Know more about exploring job listings">
          <span className={styles.arrowDown}><img src="src\assets\ArrowDownButton.png" alt="" /></span> KNOW MORE
        </button>
      </div>

      {/*  02 */}
      <div className={styles.applyCard}>
        <div className={styles.stepNumber}>Step 02</div>
        <h3 className={styles.stepTitle}>REVIEW JOB DESCRIPTION</h3>
        <p className={styles.stepText}>
          Click on the desired job title to view the detailed job description. Take your time to read through the responsibilities, requirements, and qualifications to ensure you have a clear understanding of the role.
        </p>
        <button className={styles.knowMoreBtn} aria-label="Know more about reviewing job descriptions">
          <span className={styles.arrowDown}><img src="src\assets\ArrowDownButton.png" alt="" /></span> KNOW MORE
        </button>
      </div>

      {/*  03 */}
      <div className={styles.applyCard}>
        <div className={styles.stepNumber}>Step 03</div>
        <h3 className={styles.stepTitle}>PREPARE YOUR APPLICATION</h3>
        <p className={styles.stepText}>
          Before applying, ensure you have the following ready
        </p>
        <button className={styles.knowMoreBtn} aria-label="Know more about preparing your application">
          <span className={styles.arrowDown}><img src="src\assets\ArrowDownButton.png" alt="" /></span> KNOW MORE
        </button>
      </div>

      {/*  4 */}
      <div className={styles.applyCard}>
        <div className={styles.stepNumber}>Step 04</div>
        <h3 className={styles.stepTitle}>COMPLETE THE APPLICATION</h3>
        <p className={styles.stepText}>
          Click the "Apply Now" button on the job listing page to access our online application form. Fill in your personal information, contact details, and the position you are applying for.
        </p>
        <button className={styles.knowMoreBtn} aria-label="Know more about completing the application">
          <span className={styles.arrowDown}><img src="src\assets\ArrowDownButton.png" alt="" /></span> KNOW MORE
        </button>
      </div>

      {/* 5 */}
      <div className={styles.applyCard}>
        <div className={styles.stepNumber}>Step 05</div>
        <h3 className={styles.stepTitle}>UPLOAD YOUR DOCUMENTS</h3>
        <p className={styles.stepText}>
          Attach your resume, cover letter, and portfolio (if applicable) in their respective fields on the application form.
        </p>
        <button className={styles.knowMoreBtn} aria-label="Know more about uploading your documents">
          <span className={styles.arrowDown}><img src="src\assets\ArrowDownButton.png" alt="" /></span> KNOW MORE
        </button>
      </div>

      {/*  6 */}
      <div className={styles.applyCard}>
        <div className={styles.stepNumber}>Step 06</div>
        <h3 className={styles.stepTitle}>SUBMIT YOUR APPLICATION</h3>
        <p className={styles.stepText}>
          Double-check all the information you provided to ensure accuracy and completeness. Once you are satisfied with your application, click the "Submit" button to send it to our HR team.
        </p>
        <button className={styles.knowMoreBtn} aria-label="Know more about submitting your application">
          <span className={styles.arrowDown}><img src="src\assets\ArrowDownButton.png" alt="" /></span> KNOW MORE
        </button>
      </div>

      {/* 7 */}
      <div className={styles.applyCard}>
        <div className={styles.stepNumber}>Step 07</div>
        <h3 className={styles.stepTitle}>APPLICATION REVIEW</h3>
        <p className={styles.stepText}>
          After the application deadline, our HR team will carefully review all applications. Shortlisted candidates will be contacted for further evaluation, which may include interviews and assessments.
        </p>
        <button className={styles.knowMoreBtn} aria-label="Know more about application review">
          <span className={styles.arrowDown}><img src="src\assets\ArrowDownButton.png" alt="" /></span> KNOW MORE
        </button>
      </div>

      {/*88 */}
      <div className={styles.applyCard}>
        <div className={styles.stepNumber}>Step 08</div>
        <h3 className={styles.stepTitle}>INTERVIEW PROCESS</h3>
        <p className={styles.stepText}>
          If you are selected for an interview, we will reach out to schedule a suitable date and time. Interviews may be conducted in-person or virtually, depending on the position and your location.
        </p>
        <button className={styles.knowMoreBtn} aria-label="Know more about interview process">
          <span className={styles.arrowDown}><img src="src\assets\ArrowDownButton.png" alt="" /></span> KNOW MORE
        </button>
      </div>
    </div>
  </div>
</section>


</>
)
}