import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

import Title from "./Title";
import List, { Item } from "./List";

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  title: {
    fontFamily: "Lato Bold",
    fontSize: 11,
    marginBottom: 10,
  },
  skills: {
    fontFamily: "Lato",
    fontSize: 10,
    marginBottom: 10,
  },
});

const SkillEntry = ({ name, skills }) => (
  <View>
    <Text style={styles.title}>{name}</Text>
    <List>
      {skills.map((skill, i) => (
        <Item key={i}>{skill}</Item>
      ))}
    </List>
  </View>
);

const Skills = () => (
  <View style={styles.container}>
    <Title>Competências</Title>
    <SkillEntry
      name="Hard Skills"
      skills={[
        "Em todo o decorrer da minha carreira, sempre atuei com tecnologias Microsoft, desde o início com WebForms até no momento atuando com NetCore, tendo conhecimento nos métodos e tecnologias abaixo.",
        "Tecnologias: C#, SQL, ReactJS, Angular, JavaScript, Typescript, ES6, Git",
        "Modelos de Projeto: Agile (Scrum e Kanban) e PMBok",
      ]}
    />
  </View>
);

export default Skills;
