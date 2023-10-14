"use client";
import React, { useState } from "react";
import style from "./styles.module.css";
import { Cross as Hamburger } from "hamburger-react";
import { Menu } from "../Animations";

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <header className={style.main_header}>
      <h1 className={style.logo}>
        <span className={style.tick}>/</span>LF
      </h1>
      <div className={style.nav_button}>
        <Hamburger color="#314fd4" toggled={open} toggle={setOpen}/>
        {open && <Menu><div className={style.nav_menu}>CUCU</div></Menu>}
      </div>
    </header>
  );
};

export default Header;
