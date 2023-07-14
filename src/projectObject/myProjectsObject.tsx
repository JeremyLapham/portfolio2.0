import pokemonAPI from "../assets/pokemon.png";
import rememberWhen from "../assets/rememberwhen.png";
import adviceGen from "../assets/advice.png";
import iHub from "../assets/ihub.png";
import {
  SiCsharp,
  SiHtml5,
  SiCss3,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiBootstrap,
  SiSlack,
  SiJira,
  SiNotion,
  SiMicrosoftazure,
  SiGithub,
  SiBulma,
  SiAngular,
  SiDotnet,
  SiAzuredevops,
  SiC,
} from "react-icons/si";
import { BsServer } from "react-icons/bs";

const projectSet = [
  {
    img: pokemonAPI,
    name: "Pokemon API",
    languages: "React | JavaScript | Bootstrap",
    description:
      "A rebuilt project in React Javascript using Bootstrap. This website offers extensive data on pokemon that are searched or randomly generated. This website uses the free Pokemon API to get said data to be pulled and displayed in a informational way.",
    linkToSite: "https://jeremypokedexapi.vercel.app",
    languageIcon: [
      { icon: <SiReact size={50} color="#264de4" />, text: "React" },
      { icon: <SiJavascript size={50} color="#F0DB4F" />, text: "JavaScript" },
      { icon: <SiBootstrap size={50} color="#563d7c" />, text: "Bootstrap" },
    ],
  },
  {
    img: rememberWhen,
    name: "Remember When",
    languages: "React | TypeScript | Bootstrap | C# | SQL",
    description:
      "A fullstack project made with a team using C#,SQL for our Backend as well as React Typescript with Bootstrap for our Frontend. This website allows users to create and login to an account and then the user can make folders and put memories into the folders for the user to view at any time.",
    linkToSite: "https://rememberwhen.vercel.app",
    languageIcon: [
      { icon: <SiReact size={50} color="#264de4" />, text: "React" },
      { icon: <SiTypescript size={50} color="#007acc" />, text: "Typescript" },
      { icon: <SiBootstrap size={50} color="#563d7c" />, text: "Bootstrap" },
      { icon: <SiCsharp size={50} color="green" />, text: "C Sharp" },
      { icon: <BsServer size={50} color="#f29111" />, text: "SQL" },
    ],
  },
  {
    img: iHub,
    name: "IHub",
    languages: "React | TypeScript | Bootstrap | C# | SQL ",
    description:
      "IHub is a website built for the San Joaquin county. During my internship I got the opportunity to help develop and maintain IHub. My responsibilities included building reuseable components to allow future developers to easily understand and use the components when needed. Also fixed design issues and bugs",
    linkToSite: "https://www.ihubsj.org",
    languageIcon: [
      { icon: <SiReact size={50} color="#264de4" />, text: "React" },
      { icon: <SiTypescript size={50} color="#007acc" />, text: "Typescript" },
      { icon: <SiBootstrap size={50} color="#563d7c" />, text: "Bootstrap" },
      { icon: <SiCsharp size={50} color="green" />, text: "C Sharp" },
      { icon: <BsServer size={50} color="#f29111" />, text: "SQL" },
    ],
  },
  {
    img: adviceGen,
    name: "Advice Generator",
    languages: "React | Javascript | Bootstrap",
    description: (
      <>
        A fully responsive and small two-day sprint project made in React using
        JavaScript and Bootstrap. The project involved using the{" "}
        <a
          style={{ color: "white" }}
          href="https://api.adviceslip.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          advice generator API
        </a>{" "}
        and we were given a few pictures as reference to build the project. We
        had to get as close as we could to the exact prototype we were given.
        However, I made a small UX change because of how the API works.
      </>
    ),
    linkToSite: "https://jeremysadvice-generator.vercel.app",
    languageIcon: [
      { icon: <SiReact size={50} color="#264de4" />, text: "React" },
      { icon: <SiJavascript size={50} color="#F0DB4F" />, text: "JavaScript" },
      { icon: <SiBootstrap size={50} color="#563d7c" />, text: "Bootstrap" },
    ],
  },
];

export default projectSet;
