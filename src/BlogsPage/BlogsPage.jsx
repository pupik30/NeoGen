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
</>
)
}