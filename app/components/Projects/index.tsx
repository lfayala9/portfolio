"use client";
import React from "react";
import style from "./style.module.css";
import { Reveal } from "../Animations";
import projects from "./projects";
import Card from "./Cards";
const Projects = () => {
  return (
    <section className={style.section_project}>
      <div className={style.projects_text}>
        <Reveal>
          <h1 className={style.help_text}>Projects</h1>
        </Reveal>
        <Reveal>
          <p className={style.description_text}>Glimpses of my work</p>
        </Reveal>
      </div>
      <div className={style.project_container}>
        {projects.map((i) => (
          <Card project={i} key={i.id}/>
        ))}
      </div>
    </section>
  );
};

export default Projects;
