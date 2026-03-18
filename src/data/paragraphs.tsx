import freeCodeCamp from "../assets/icons/freecodecamp.png";
import fem from "../assets/icons/femasters.png";
import courseit from "../assets/icons/courseit.jfif";
import plat5 from "../assets/icons/plataforma5.svg";
import idxf from "../assets/icons/idxf.svg";
import boot from "../assets/icons/boot-dev.webp";

type jobs = {
  date: string;
  company: string;
  type: string;
  info: string;
};

type about = {
  personal: { text: string; title: string };
  carreer: { text: string; title: string };
  honorableMentions: {
    text: string;
    list: { text: string; link: string; icon?: string }[];
  };
};

export const jobs: jobs[] = [
  {
    date: "10/2024-Present",
    company: "Dymaxion Labs",
    type: "Company Projects",
    info: "At Dymaxion Labs, Im responsible of developing the front-end side of our applications. Dymaxion Labs specializes in creating value through the processing and understanding of geospatial data using big data and machine learning. My responsibilities include implementing precise UI/UX in our apps, maintaining current features, and introducing new functionalities. We utilize a range of technologies such as HTML, CSS, TypeScript, React, Angular, and Next.js, along with libraries and frameworks like deck.gl and turf.js for geospatial data visualization and manipulation.",
  },
  {
    date: "04/2022-07/2024",
    company: "Around | The broadcast revolution",
    type: "Client + Company Investments Projects",
    info: "Worked with a fully local team. Worked on many projects, all JavaScript focused. Got the chance of working with vanilla JavaScript + Jquery, React and ReactRedux (with Sagas), and also some Node.js backend stuff. Implemented some E2E Cypress testing too. Also, at Around Is where I further developed my soft skills, such as communication with teams, time management and tracking and team working above all. Used Git and GitLab for versioning, worked with OKR framework, and Kanban/Agile methodologies, with Jira being the main tool for project status,updates and documentation.",
  },

  {
    date: "08/2021-04/2022",
    company: "Globant",
    type: "Microservices",
    info: "Worked with a fully remote team, for Disney, on a UI panel for a microservice called Xavier. Main tasks where to co-develop new features, as well as solve bugs in the application. Mainly worked with JavaScript, React, MaterialUI and some Node.js. Used Git and GitLab for versioning. jira for project tasks and tasks time tracking.",
  },
  {
    date: "09.2019-08/2021",
    company: "Cognizant Softvision",
    type: "Client, Internal tooling, and Web",
    info: "Gained experience working with a mixed team, meaning both local and remote. Worked for Shell, where I collaborated on a SPA for monitoring and controlling tanks and mineral processing stations. Additionally, I worked on an internal HR tool, and on implementing design iteration on the Cognizant Softvision website. I mainly worked with HTML, CSS (styled components), JavaScript, and React. I used Git and GitLab for version control and Figma/Zeplin to follow the development and design of the page. For task tracking, I worked with Jira.",
  },
];

export const about: about[] = [
  {
    personal: {
      text: "Hi Hello 👋, im Agustin, a Front End Developer based in Capital Federal, Buenos Aires, Argentina. Im 27 y/o as of today. I enjoy writing readable, solid, and undestandable software, make designed aligned UI's with a keen attention to detail and user experience, working with dynamic and efficient teams. On a personal level, a team that I can share beers 🍻 with, talk about personal stuff, and also them be able to give me constructive and assertive feedback is my Nirvana. I also am, very passionate about football ⚽, videogames 🎮, music 🎵.",
      title: "Personal",
    },
    carreer: {
      text: "My story with software development and programming started in 2018 when working as a stock clerk found that I didn't wanted to work as a stock clerk for the rest of my life, and since I've always had interest in knowing how a mobile / desktop application works. Thats when I've started investigating in the internet, and eventually found a resource that till today, Im still using, freecodecamp.org 🔥 . With freecodecamp I've started the 'Responsive Web Design' curriculum. After sometime, I've found Plataforma 5, and took the Intro to Front End and Intro to Backend development courses. Got them done, and after like 1-2 months of continuing learing by myself, I took a Front End Development With React, in CouseIT, this took 6 months. At the end of this course, I've got a Job Offer at Cognizant Softvision 🍾.",
      title: "Carreer & and how I got into tech",
    },
    honorableMentions: {
      text: "Resources I use to keep learning and staying sharp.",
      list: [
        {
          text: "FreeCodeCamp",
          link: "https://freecodecamp.org/",
          icon: freeCodeCamp,
        },

        {
          text: "Front End Masters",
          link: "https://frontendmasters.com/",
          icon: fem,
        },
        {
          text: "CourseIt (Rip)",
          link: "https://www.instagram.com/courseitok/?hl=es-la",
          icon: courseit,
        },
        {
          text: "Plataforma 5",
          link: "https://www.plataforma5.la/",
          icon: plat5,
        },
        {
          text: "Interaction Design Foundation",
          link: "https://www.interaction-design.org/",
          icon: idxf,
        },
        {
          text: "Boot.dev",
          link: "https://www.boot.dev/",
          icon: boot,
        },
      ],
    },
  },
];
