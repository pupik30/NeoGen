import styles from "./BlogPostPage.module.scss";

import StartAProject from "../assets/StartAProject.png";
import Cover from "../assets/BlogPostCover.png";
import Avatar from "../assets/BlogAuthorAvatar.png";

const meta = [
    { label: "Author", value: "Sophia Roberts" },
    { label: "Published Date", value: "25th October 2023" },
    { label: "Category", value: "Design" },
    { label: "Read Time", value: "5 Minutes" },
];

const sections = [
    {
        title: "The Essence of Minimalism in Design",
        paragraphs: [
            "In the realm of design, the essence of minimalism lies in the deliberate choice to distill complexity and convey a powerful message through simplicity. It's an art form that celebrates the beauty of space, emphasizing the significance of each carefully chosen element. A minimalist design isn't about deprivation; rather, it's a conscious decision to focus on the core, allowing the audience to engage with a visual narrative that is both refined and impactful.",
            "As we explore the essence of minimalistic design, we uncover the subtle nuances that contribute to its allure. The use of negative space, a hallmark of minimalism, creates breathing room within the composition, allowing the viewer's gaze to rest and appreciate the inherent beauty of the design. The simplicity in form and color becomes a canvas for expression, where every line and shade tells a story. By embracing minimalism, designers have the opportunity to communicate more with less, fostering a connection that transcends visual aesthetics.",
            "At its core, minimalism in design challenges conventional notions, encouraging a shift from excess to essence. It invites both creators and consumers to engage in a thoughtful dialogue with the visual elements, promoting a sense of mindfulness and intentionality. The essence of minimalistic design, therefore, lies not just in its visual appeal but in the profound impact it has on the way we perceive and interact with the world of design.",
        ],
    },
    {
        title: "Minimalism Beyond Aesthetics",
        paragraphs: [
            "Beyond its visually captivating exterior, minimalism is a design philosophy that permeates every aspect of the creative process, extending its influence far beyond the surface. This philosophy becomes a lens through which designers view their craft, shaping not just what is seen but how it is experienced. The minimalist approach transcends mere aesthetics; it becomes a mindset that emphasizes clarity, functionality, and a deeper connection with the audience.",
            "Minimalism, as a philosophy, challenges the notion that complexity is synonymous with sophistication. It prompts designers to question the necessity of each element, encouraging a meticulous evaluation of form and function. This shift in perspective extends to the user experience, where the removal of unnecessary clutter allows for a seamless and intuitive interaction. Beyond creating visually pleasing designs, the minimalist philosophy becomes a guiding force for designing experiences that are inherently user-centric.",
        ],
    },
    {
        title: "Practical Tips for Mastering Minimalistic Design",
        paragraphs: [
            "The journey to mastering minimalistic design involves a practical exploration of principles and techniques that breathe life into the philosophy. It begins with an understanding of the psychology of color in minimalism, where the strategic use of a limited color palette contributes to the overall impact of the design. The intentional choice of typography plays a pivotal role, guiding the viewer through the visual narrative with clarity and purpose.",
            "Navigating the terrain of minimalistic design also involves a keen awareness of the power of negative space. Far from being empty, this space becomes a deliberate feature, allowing the audience to absorb and appreciate the essential elements of the composition. Striking the right balance between simplicity and sophistication is an art in itself, requiring a discerning eye and a commitment to the core principles of minimalism.",
            "Practical tips extend beyond the theoretical, delving into the day-to-day decisions that shape a minimalist design. From the selection of imagery to the judicious use of graphic elements, each choice contributes to the overall impact. Mastery in minimalistic design is not merely about adherence to a set of rules; it's about developing an intuition that guides the creative process, ensuring that every design decision serves a purpose and contributes to the cohesive whole.",
        ],
    },
];

const author = {
    name: "Wowa Wulfuch",
    role: "Art Killer",
    bio: "Zakhotelos' noch'yu keksa,No diyeta govorit:«Libo ty lozhish'sya spat',Libo v zhope gorit».YA podumal: «Khren s diyetoy,Zhizn' korotkaya u nas!»Dostal bulochku s kotletoy I poshel vstrechat' ekstaz.",
    handle: "@Ark Warden",
    link: "https://masterpiecer-images.s3.yandex.net/5f9c20e71ca5a99:upscaled",
};

const stats = [
    { icon: "heart", label: "Liked by", value: "2.6K", unit: "Users" },
    { icon: "share", label: "Shared by", value: "120", unit: "Users" },
];

const TwitterIcon = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M22 5.9c-.7.3-1.5.5-2.4.6.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7C8.4 8.7 5.4 7.1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5 0 2 1.4 3.7 3.3 4.1-.6.2-1.2.2-1.8.1.5 1.6 2 2.8 3.8 2.8A8.3 8.3 0 0 1 2 18.3 11.6 11.6 0 0 0 8.3 20c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z" />
    </svg>
);

const RedditIcon = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
    </svg>
);

const FacebookIcon = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M14 8.5V6.8c0-.8.2-1.2 1.4-1.2H17V2.2C16.7 2.1 15.7 2 14.6 2 12.2 2 10.5 3.5 10.5 6.2v2.3H8V12h2.5v10H14V12h2.7l.4-3.5H14z" />
    </svg>
);

const HeartIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="#E5252A" aria-hidden="true">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
);

const ShareIcon = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
    </svg>
);

const ArrowIcon = () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7 17L17 7M8 7h9v9" />
    </svg>
);

const statIcons = { heart: <HeartIcon />, share: <ShareIcon /> };

export default function BlogPostPage() {
    return (
        <>
            <section className={styles.PostMain}>
                <div className={styles.PostTop}>
                    <div className={styles.PostTitleCard}>
                        <div className={styles.PostTitleRow}>
                            <h1 className={styles.PostTitle}>
                                Mastering the art <br /> of minimalistic design
                            </h1>
                            <button className={styles.StartBtn} type="button">
                                <img src={StartAProject} alt="Start a project" />
                            </button>
                        </div>
                    </div>

                    <div className={styles.PostMetaCard}>
                        {meta.map((item) => (
                            <div className={styles.MetaRow} key={item.label}>
                                <span className={styles.MetaLabel}>{item.label}</span>
                                <span className={styles.MetaValue}>{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.PostCover}>
                    <img src={Cover} alt="Mastering the art of minimalistic design" />
                </div>

                <div className={styles.PostBody}>
                    <div className={styles.Socials}>
                        <a className={styles.SocialBtn} href="#" aria-label="Twitter"><TwitterIcon /></a>
                        <a className={styles.SocialBtn} href="#" aria-label="Reddit"><RedditIcon /></a>
                        <a className={styles.SocialBtn} href="#" aria-label="Facebook"><FacebookIcon /></a>
                    </div>

                    <article className={styles.Article}>
                        {sections.map((section) => (
                            <div className={styles.ArticleSection} key={section.title}>
                                <h2 className={styles.ArticleHeading}>{section.title}</h2>
                                {section.paragraphs.map((text, i) => (
                                    <p className={styles.ArticleText} key={i}>{text}</p>
                                ))}
                            </div>
                        ))}
                    </article>

                    <aside className={styles.Sidebar}>
                        <div className={styles.AuthorCard}>
                            <div className={styles.AuthorHead}>
                                <img className={styles.AuthorAvatar} src={Avatar} alt={author.name} />
                                <div>
                                    <p className={styles.AuthorName}>{author.name}</p>
                                    <p className={styles.AuthorRole}>{author.role}</p>
                                </div>
                            </div>
                            <p className={styles.AuthorBio}>{author.bio}</p>
                            <a className={styles.AuthorLink} href={author.link} target="_blank" rel="noreferrer">
                                <span className={styles.AuthorLinkLeft}>
                                    <span className={styles.AuthorLinkIcon}><TwitterIcon /></span>
                                    {author.handle}
                                </span>
                                <ArrowIcon />
                            </a>
                        </div>

                        <div className={styles.StatsCard}>
                            {stats.map((s) => (
                                <div className={styles.StatRow} key={s.label}>
                                    <span className={styles.StatIcon}>{statIcons[s.icon]}</span>
                                    <div className={styles.StatInfo}>
                                        <span className={styles.StatLabel}>{s.label}</span>
                                        <span className={styles.StatRight}>
                                            <span className={styles.StatValue}>{s.value}</span>
                                            <span className={styles.StatUnit}>{s.unit}</span>
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </aside>
                    </div>
                        {/* Related Blogs */}
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
    );
}
