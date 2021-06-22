import classes from "./Skills.module.css";
import PageHeader from "./../PageHeader/PageHeader";

const listTitlesStyle = {
  fontWeight: 600,
  color: "#000000",
  marginBottom: "4px",
};

const programmingLanguages = (
  <ul>
    <li style={listTitlesStyle}>Programming Languages</li>
    <li>Java</li>
    <li>Python</li>
    <li>C</li>
  </ul>
);

const mobileAppDevelop = (
  <ul>
    <li style={listTitlesStyle}>Mobile Application Developing</li>
    <li>Flutter</li>
    <li>Node.js</li>
    <li>Android</li>
  </ul>
);

const webDevelop = (
  <ul>
    <li style={listTitlesStyle}>Web Developing</li>
    <li>HTML</li>
    <li>CSS</li>
    <li>React.js</li>
    <li>Bootstrap</li>
  </ul>
);

const databaseSystems = (
  <ul>
    <li style={listTitlesStyle}>Database Systems</li>
    <li>MySQL</li>
  </ul>
);

const proceduralProgramming = (
  <ul>
    <li style={listTitlesStyle}>Procedural Programming</li>
    <li>ARM Assembly</li>
  </ul>
);

const hardwareProgramming = (
  <ul>
    <li style={listTitlesStyle}>Hardware Programming</li>
    <li>Arduino</li>
    <li>Verilog HDL</li>
  </ul>
);

const versionControl = (
  <ul>
    <li style={listTitlesStyle}>Vertion Control</li>
    <li>Git</li>
  </ul>
);

const languages = (
  <ul>
    <li style={listTitlesStyle}>Languages</li>
    <li>English</li>
    <li>Sinhala</li>
  </ul>
);

const totalSkills = [
  programmingLanguages,
  mobileAppDevelop,
  webDevelop,
  databaseSystems,
  proceduralProgramming,
  hardwareProgramming,
  versionControl,
  languages,
];

const Skills = () => {
  return (
    <div className={classes.Skills}>
      <PageHeader title={"Skills"} />
      <div className={classes.Container}>
        {totalSkills.map((skills) => {
          return <div className={classes.List}>{skills}</div>;
        })}
      </div>
    </div>
  );
};

export default Skills;
