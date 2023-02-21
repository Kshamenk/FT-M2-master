import React from "react";
import Botones from "./Botones";

const studentName = "Kchi";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  const listItems = techSkills.map((skill) => {
    return <li>{skill}</li>;
  });

  return (
    <div>
      <h1>Bienvenido</h1>
      <h3>{studentName}</h3>
      <ul>
        {techSkills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <Botones alerts={alerts} />   
    </div>
  );
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };