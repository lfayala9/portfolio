"use client"
import React from "react";
import style from "./style.module.css";
import { motion } from "framer-motion";
import { Paragraph } from "../Animations";
const Projects = () => {
  return (
    <section className={style.section_project}>
      <div className={style.projects_text}>
      <Paragraph>
        <h1 className={style.help_text}>Projects</h1>
      </Paragraph>
      <Paragraph>
        <p className={style.description_text}>Glimpses of my work</p>
      </Paragraph>
      </div>
    </section>
  );
};

export default Projects;
