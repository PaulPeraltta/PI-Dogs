import React from "react";
import NavForm from "../components/NavForm";
import s from "./styles/AboutMe.module.css";

export default function AboutMe() {
  return (
    <div className={s.all}>
      <NavForm />
      <div className={s.textCont}>
        <div className={s.head}>
          <h2>About Me</h2>
        </div>
        <div className={s.description}>
          <p className={s.desc}>Hello, I'm Pablo Peralta!</p>
          <p className={s.desc}>
            I'm 23 years old, and I'm currently studying programming in
            soyhenry.com
          </p>
          <p className={s.desc}>
            This is my INDIVIDUAL PROJECT created with React, Redux, Express and
            Sequelize, it was made with the help of the API.
          </p>
          <a className={s.apilink} href="https://docs.thedogapi.com/">
            https://docs.thedogapi.com
          </a>
          <p className={s.desc}>
            If you want to contact me or chat with me, you can do it by the
            following means.
          </p>
        </div>
      </div>
      <div className={s.boxima}>
        
        <div className={s.net}>
          <a style={{textDecoration: "none"}} href="https://github.com/PaulPeraltta" target='_blank' alt="Pablo Peralta - GitHub">
          <img
            className={s.image}
            src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png"
            alt="Github-Logo"
          />
          <p>GitHub</p>
          </a>
        </div>
        <div className={s.net}>
          <a style={{textDecoration: "none"}} href="https://www.linkedin.com/in/pablo-peralta-it/" target='_blank' alt="Pablo Peralta - LinkedIn">
          <img
            className={s.image}
            src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png"
            alt="LinkedIn-Logo"
          />
          <p>LinkedIn</p>
          </a>
        </div>
        <div className={s.net}>
          <a style={{textDecoration: "none"}} href="mailto:pabloperalta.it@gmail.com?Subject=Hola%20Pablo!%20Vengo%20desde%20MyLittleBuddy!" >
          <img
            className={s.image}
            src="https://img.icons8.com/windows/32/ffffff/gmail-new.png"
            alt="Gmail-Logo"
          />
          <p>Gmail</p>
          </a>
        </div>
      </div>
    </div>
  );
}
