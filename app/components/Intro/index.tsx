"use client";
import React from "react";
import style from "./styles.module.css";
import Image from "next/image";
import background from "../../assets/background_pattern.png";
import avatar from "../../assets/empty.png";
import { Reveal } from "../Animations";
import {
  IconBrandReact,
  IconBrandMongodb,
  IconBrandNodejs,
  IconBrandNextjs,
  IconBrandFirebase,
  IconBrandTypescript,
  IconBrandVite,
  IconBrandRedux,
  IconBrandMysql,
} from "@tabler/icons-react";
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
            My name is Luis Ayala and I make Fullstack apps and
            great user experiences
          </p>
          <Reveal>
            <ul className={style.icons_tech}>
              <li>
                <IconBrandReact color="#fe9065" />
              </li>
              <li>
                <IconBrandTypescript color="#fe9065" />
              </li>
              <li>
                <IconBrandNodejs color="#fe9065" />
              </li>
              <li>
                <IconBrandRedux color="#fe9065" />
              </li>
              <li>
                <IconBrandMongodb color="#fe9065" />
              </li>
              <li>
                <IconBrandMysql color="#fe9065" />
              </li>
              <li>
                <IconBrandNextjs color="#fe9065" />
              </li>
              <li>
                <IconBrandVite color="#fe9065" />
              </li>
              <li>
                <IconBrandFirebase color="#fe9065" />
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 50 50"
                  fill="#fe9065"
                >
                  <path d="M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z"></path>
                </svg>
              </li>
            </ul>
          </Reveal>
        </article>
        <figure className={style.figure_container}>
          <Reveal>
            <Image
              src={avatar}
              alt="nada"
              className={style.avatar}
              width={315}
            />
          </Reveal>
          <Image
            src={background}
            alt="nada"
            className={style.pattern}
            width={450}
          />
        </figure>
      </div>
    </section>
  );
};

export default Intro;
