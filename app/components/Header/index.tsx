"use client";
import React, { useState } from "react";
import style from "./styles.module.css";

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className={style.main_header}>
        <h1 className={style.logo}>
          <span className={style.tick}>/</span>LF
        </h1>
          <div className={style.nav_button}>
            <ul className={style.nav_menu}>
              <li><a href="#home">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#about">About Me</a></li>
            </ul>
          </div>
      </header>
    </>
  );
};

export default Header;
