import React from 'react';
import Ball from './../components/Balls';
import BallCanvas from './../components/Balls';
import styles from "../styles/ball.module.css"

const technologies = [
  {
    name: "HTML 5",
    icon: "/assets/HTML.png",
  },
  {
    name: "Tailwind",
    icon: "/assets/tailwind.png",
  },
  {
    name: "FIGMA",
    icon: "/assets/figma.png",
  },

  {
    name: "CSS 3",
    icon: "/assets/css.png",
  },
  {
    name: "GIT",
    icon: "/assets/git.png",
  },
  {
    name: "JAVASCRIPT",
    icon: "/assets/javascript.png",
  },
  {
    name: "React",
    icon: "/assets/reactjs.png",
  },
  {
    name: "redux",
    icon: "/assets/redux.png",
  },
  {
    name: "Next",
    icon: "/assets/next.png",
  },
  {
    name: "MONGO DB",
    icon: "/assets/mongodb.png",
  },
  {
    name: "Node",
    icon: "/assets/nodejs.png",
  },
  {
    name: "TypeScript",
    icon: "/assets/typescript.png",
  },
  {
    name: "Flutter",
    icon: "/assets/flutter.png",
  },
  {
    name: "prisma",
    icon: "/assets/prisma.png",
  },
  {
    name: "go",
    icon: "/assets/go.png",
  },
  {
    name: "Express",
    icon: "/assets/express.png",
  },
  {
    name: "Dart",
    icon: "/assets/dart.png",
  },
];

const AboutPage = ({ title, imageUrl, icon }) => {
  return (
    <div>

      <div className={styles.mainPhoto}>
        <div className={styles.myborder}>
          <h3 style={{ fontSize: "2rem", marginBottom: "0.3rem" }}>{title}</h3>
          <p style={{ lineHeight: "1.5" }}>
            Hi there! I'm Daman, a computer science enthusiast currently pursuing my B.tech from NIT J. I'm a knight(top 5%) @ LeetCode and won several Hackathons.
            I love exploring the realms of web development, diving into the world of DevOps, or crafting with GoLang. When I'm not in front of the screen, I love to play basketball
            Besides that, I have an unwavering love for music that adds rhythm and melody to my life's playlist.
          </p>

        </div>

        <div className={styles.borderLine}>
          <img src={"/profile-pic.jpeg"} alt="Profile" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px', paddingTop: "3rem", flexGrow: "" }} />
        </div>

      </div>
      <div className={styles.skillsLine}>
        <p>Skills</p>
        <div className={styles.skillsBadge}>
          {technologies.map(tech => <BallCanvas icon={tech.icon} key={tech.icon} styles />)}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      title: 'About Me',
      imageUrl: '/assets/css.png',
    },
  };
}

export default AboutPage;