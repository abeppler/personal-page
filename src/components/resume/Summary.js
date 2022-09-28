import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

import Title from "./Title";

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
  },
  summaryContent: {
    flex: 1,
    fontSize: 10,
    fontFamily: "Lato",
  },
});

const Summary = () => (
  <View style={styles.container}>
    <Title>Resumo</Title>
    <Text style={styles.summaryContent}>
      Mais de 13 anos na área de desenvolvimento de soluções web, com
      experiência nos processos de análise, desenvolvimento e implantação.
    </Text>
  </View>
);

export default Summary;
