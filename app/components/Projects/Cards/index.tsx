import { Reveal } from "@/components/Animations";
import style from "./style.module.css";
import React from "react";
import Image from "next/image";
import { StaticImageData, StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";

interface ProjectType {
  id: number
  name: string
  description: string
  tech: string[]
  logo?: StaticImport
  isFront?: boolean
  url?: string
  github: string
}

const Card = ({ project } : { project: ProjectType }) => {
  const tech = project.tech
  return (
    <Reveal>
      <article className={style.article_wrapper}>
        <div className={`${style.rounded_lg} ${style.container_project}`}>
          <Image src={project.logo != null ? project.logo : ''} alt='logo' width={200}/>
        </div>
        <div className={style.project_info}>
          <div className={style.flex_pr}>
            <h1 className={`${style.project_title} ${style.text_nowrap}`}>
              {project?.name}
            </h1>
            <Link href={`${project.github}`} target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className={style.project_hover}
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            </Link>
            {project.isFront ? <Link href={`${project.url}`} target="_blank"> <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className={style.project_hover}
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg></Link> : null}
          </div>
            <p>{project?.description}</p>
          <div className={style.types}>
            {tech?.map((i) => (
              <span
              key={i}
              style={{
                backgroundColor: "rgba(165, 96, 247, 0.43)",
                color: "rgb(85, 27, 177)",
              }}
              className={style.project_type}
            >
              {i}
            </span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
};

export default Card;
