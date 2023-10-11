"use client";
import React from "react";
import style from "./styles.module.css";
import Image from "next/image";
import background from "../../assets/luis_back-removebg-preview.png";
import avatar from "../../assets/luisavatar.png";
const Intro = () => {
  return (
    <section className={style.section_intro}>
      <div className={style.main_content}>
        <article className={style.article}>
          <h1 className={style.main_text}>
            <span>
              Fullstack <br /> Developer
            </span>
          </h1>
          <p className={style.description_text}>
            Crafting Fullstack apps and creating great user experiences
          </p>
        </article>
        <figure className={style.figure_container}>
          <Image src={avatar} alt="nada" className={style.avatar} width={340} />
          <Image src={background} alt="nada" className={style.pattern} width={450} />
        </figure>
      </div>
    </section>
  );
};

export default Intro;
