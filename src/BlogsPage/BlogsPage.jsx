import { useState,useRef,useEffect } from "react"
import styles from "./BlogsPage.module.scss";

import {Link} from 'react-router-dom'



export default function BlogsPage() {

return( 
<>
<section  className={styles.BlogsBigCase}>

    <div className={styles.Border}>

        <div className={styles.OurWorksBlock}>
            <div className={styles.OurWorksBlockTxt}>
                <p className={styles.InfoBlockTextP}>Our Blogs</p>
                <div className={styles.BlockBtn}>
                    <button className={styles.BlockBtn1}>Buisnes</button>
                    <button className={styles.BlockBtn2}>Disign</button>
                    <button className={styles.BlockBtn3}>Development</button>
                </div>
            </div>
        </div>
        
        </div>
</section>

<section className={styles.BlogsBigCaseLink}>
  <div className={styles.BlogsBigCaseLink__wrapper}>
    
    {/* Левая часть: Изображения / Коллаж гаджетов */}
    <div className={styles.BlogsBigCaseLink__media}>
      <img src="src\assets\Image (52).png"
    
        className={styles.BlogsBigCaseLink__image} 
      />
    </div>


    {/* Правая часть: Текстовый контент */}
    <div className={styles.BlogsBigCaseLink__content}>
      
      {/* Заголовок */}
      <h2 className={styles.BlogsBigCaseLink__title}>
        WEB DESIGN TRENDS SHAPING 2024
      </h2>

      {/* Мета-данные (Категория, Время, Автор) */}
      <div className={styles.BlogsBigCaseLink__meta}>
        <span className={styles.BlogsBigCaseLink__metaItem}>
          Category • <strong className={styles.BlogsBigCaseLink__metaValue}>Design</strong>
        </span>
        <span className={styles.BlogsBigCaseLink__metaItem}>
          Read Time • <strong className={styles.BlogsBigCaseLink__metaValue}>6 Mins</strong>
        </span>
        <span className={styles.BlogsBigCaseLink__metaItem}>
          Author • <strong className={styles.BlogsBigCaseLink__metaValue}>Laura Turner</strong>
        </span>
      </div>

      {/* Описание */}
      <p className={styles.BlogsBigCaseLink__description}>
        Stay ahead of the design curve with insights into the latest web design trends. 
        From immersive user experiences to bold color choices, explore the design elements 
        that will dominate the digital landscape in 2023 and beyond.
      </p>

      {/* Футер карточки: Кнопка и Дата */}
      <div className={styles.BlogsBigCaseLink__footer}>
        <a href="BlogPostPage" className={styles.BlogsBigCaseLink__button}>
          <span className={styles.BlogsBigCaseLink__arrowIcon}>↗</span>
          <span className={styles.BlogsBigCaseLink__buttonText}>READ FULL BLOG</span>
        </a>
        <span className={styles.BlogsBigCaseLink__date}>
          Published Date <strong className={styles.BlogsBigCaseLink__dateValue}>7TH FEBRUARY 2023</strong>
        </span>
      </div>

    </div>

  </div>




</section>
<section className={styles.aboba}>


    <div className={styles.RelatedBorder}>

      <div className={styles.RelatedHeader}>
          <p className={styles.RelatedTitle}>Related Blogs</p>
          <a className={styles.RelatedLink} href="#">
              <img src="src\assets\Icon Conteiner Cucle.png" alt="" />
              <span>All Blogs</span>
          </a>
      </div>

      <div className={styles.RelatedGrid}>
          <div className={styles.RelatedCard}>
              <img className={styles.RelatedImg} src="src\assets\RelatedBlog1.png" alt="" />
              <h3 className={styles.RelatedCardTitle}>Optimizing mobile user experience for higher conversions</h3>
              <p className={styles.RelatedCardText}>Mobile devices dominate digital interactions, making mobile user experience crucial for conversion rates. Explore mobile design best practices...</p>
              <a className={styles.RelatedLink} href="#">
                  <img src="src\assets\Icon Conteiner Cucle.png" alt="" />
                  <span>Read Full Blog</span>
              </a>
          </div>

          <div className={styles.RelatedCard}>
              <img className={styles.RelatedImg} src="src\assets\RelatedBlog2.png" alt="" />
              <h3 className={styles.RelatedCardTitle}>Mastering the art of minimalistic design</h3>
              <p className={styles.RelatedCardText}>Simplicity and elegance take center stage in minimalistic design. Learn the principles of minimalism, how to effectively communicate with fewer elements...</p>
              <a className={styles.RelatedLink} href="#">
                  <img src="src\assets\Icon Conteiner Cucle.png" alt="" />
                  <span>Read Full Blog</span>
              </a>
          </div>

          <div className={styles.RelatedCard}>
              <img className={styles.RelatedImg} src="src\assets\RelatedBlog3.png" alt="" />
              <h3 className={styles.RelatedCardTitle}>The psychology of visual design in branding</h3>
              <p className={styles.RelatedCardText}>Uncover the impact of visual elements in branding and how they influence customer perceptions and emotions. Explore color psychology, typography choices...</p>
              <a className={styles.RelatedLink} href="#">
                  <img src="src\assets\Icon Conteiner Cucle.png" alt="" />
                  <span>Read Full Blog</span>
              </a>
          </div>
      </div>
  </div>
</section>




</>
)
}