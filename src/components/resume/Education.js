import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

import Title from "./Title";

const styles = StyleSheet.create({
  education: {
    marginBottom: 5,
    marginTop: 5,
  },
  school: {
    fontFamily: "Lato Bold",
    fontSize: 10,
  },
  degree: {
    fontFamily: "Lato",
    fontSize: 10,
  },
  candidate: {
    fontFamily: "Lato Italic",
    fontSize: 10,
  },
});

const educationData = [
  {
    school: "Universidade do Planalto Catarinense",
    degree: "Bacharel em Sistemas de Informação",
    date: "Janeiro 2006 - Dezembro 2010",
  },
  {
    school: "Univerdidade do Planalto Catarinense",
    degree: "Especialização em Engenharia de Software",
    date: "Janeiro 2014 - Dezembro 2017",
  },
  {
    school: "UniCesumar",
    degree: "Pós-Graduação em Práticas de Metodologias Ágeis",
    date: "Janeiro 2019 - Dezembro 2021",
  },
];

const Education = () => (
  <View>
    <Title>Formação Acadêmica</Title>
    {educationData.map(({ school, degree, date }) => (
      <View style={styles.education}>
        <Text style={styles.school}>{school}</Text>
        <Text style={styles.degree}>{degree}</Text>
        <Text style={styles.candidate}>{date}</Text>
      </View>
    ))}
  </View>
);

export default Education;
