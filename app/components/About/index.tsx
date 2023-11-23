"use client";
import style from "./style.module.css";

const About = () => {
    return (
        <section className={style.section_about} id='about'>
            <article className={style.about_text}>
                <h1 className={style.main_text}>
                    About Me
                </h1>
            </article>
        </section>
    )
}

export default About