import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

import Title from "./Title";
import List, { Item } from "./List";

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  entryContainer: {
    marginBottom: 10,
  },
  date: {
    fontSize: 11,
    fontFamily: "Lato Italic",
  },
  detailContainer: {
    flexDirection: "row",
  },
  detailLeftColumn: {
    flexDirection: "column",
    marginLeft: 10,
    marginRight: 10,
  },
  detailRightColumn: {
    flexDirection: "column",
    flexGrow: 9,
  },
  bulletPoint: {
    fontSize: 10,
  },
  details: {
    fontSize: 10,
    fontFamily: "Lato",
  },
  headerContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: "column",
    flexGrow: 9,
  },
  rightColumn: {
    flexDirection: "column",
    flexGrow: 1,
    alignItems: "flex-end",
    justifySelf: "flex-end",
  },
  title: {
    fontSize: 11,
    color: "black",
    textDecoration: "none",
    fontFamily: "Lato Bold",
  },
});

const ExperienceEntry = ({ company, details, position, date }) => {
  const title = `${company} | ${position}`;
  return (
    <View style={styles.entryContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <List>
        {details.map((detail, i) => (
          <Item key={i} style={styles.detailContainer}>
            {detail}
          </Item>
        ))}
      </List>
    </View>
  );
};

const experienceData = [
  {
    company: "TechStack Soluções em Tecnologia",
    position: "Software Engineer",
    date: "Fevereiro de 2022 - Atual",
    details: [
      "Desenvolvimento Web Fullstack",
      "Backend com .Net",
      "Frontend utilizando Angular na versão 8",
    ],
  },
  {
    company: "CI&T",
    position: "Engenheiro de software",
    date: "Agosto de 2021 - Fevereiro de 2022 (7 meses)",
    details: [
      "Desenvolvimento de Landing Pages",
      "ReactJS",
      "Adobe Experience Manager",
    ],
  },
  {
    company: "Stefanini Brasil",
    position: "Analista Desenvolvedor",
    date: "Outubro de 2020 - Julho de 2021 (10 meses)",
    details: [
      "Desenvolvimento Web Full Stack",
      "Nichos de negócio:",
      "-Auditorias;",
      "-Direção Defensiva (reciclagem dos motoristas);",
      "Tecnologias envolvidas:",
      "WebAPI .NetCore, ReactJS, C#, SQL Server.",
    ],
  },
  {
    company: "QUAY Sistemas e Portais",
    position: "Desenvolvedor Web",
    date: "Agosto de 2019 - Outubro de 2020 (1 ano 3 meses)",
    details: [
      "Modelo de fábrica de software, onde atuei como desenvolvedor web.",
      "Nichos de negócio:",
      "-Controle Orçamentário (CAPEX e OPEX);",
      "-Controle de Produção para fábrica de convites de festas;",
      "Tecnologias envolvidas:",
      ".Net MVC + Angular 2;",
      ".Net Core + React;",
    ],
  },
  {
    company: "HBSIS",
    position: "Analista de Sistemas",
    date: "Fevereiro de 2017 - Agosto de 2019 (2 anos 7 meses)",
    details: [
      "Desenvolvimento Web Full Stack.",
      "Nichos de negócio:",
      "-Procurement;",
      "-Tracking (rastreio da frota);",
      "-WMS (controle de estoque);",
      "Tecnologias envolvidas:",
      "WebAPI, NodeJS, ReactJS, C#, SQL Server.",
    ],
  },
  {
    company: "GOVERNANÇABRASIL - GOVBR",
    position: "Analista Programador",
    date: "Junho de 2015 - Fevereiro de 2017 (1 ano 9 meses)",
    details: [
      "Desenvolvimento Web Full Stack.",
      "Nichos de negócio:",
      "-Saúde Pública versão Web do produto PRONIM;",
      "Tecnologias/Ferramentas envolvidas:",
      "Enterprise Archtect, .Net WebForms, SQL Server (SSMS);",
    ],
  },
  {
    company: "NDDigital",
    position: "Developer",
    date: "Agosto de 2014 - Maio de 2015 (10 meses)",
    details: [],
  },
  {
    company: "Al-Wi Tecnologia Ltda ME",
    position: "Analista de Sistemas",
    date: "Junho de 2013 - Agosto de 2014 (1 ano 3 meses)",
    details: [
      "Responsável pela criação do processo de ETL dos sistemas legados da universidade, para o ERP Totvs RM.",
    ],
  },
  {
    company: "NDDigital S/A - Hant",
    position: "Analista de Sistemas",
    date: "Setembro de 2009 - Julho de 2013 (3 anos 11 meses)",
    details: [
      "Administrador de Banco de Dados",
      "maio de 2012 - julho de 2013 (1 ano 3 meses)",
      "-Análise dos scripts para alteração de dados por parte do suporte técnico;",
      "-Análises para criação de scripts de tratamento de dados para a equipe de desenvolvimento quando da criação/manutenção das funcionalidades;",
      "-Criação de documentos de análise de negócio para customizações do sistema;",
      "-Criação de relatórios de BI, utilizando SQL Reporting Services;",
      "Analista de Negócios",
      "novembro de 2011 - abril de 2012 (6 meses)",
      "Atividades",
      "-Redação de documentos de análise para melhorias no sistema.",
      "-Análise de suporte.",
      "-Análise de integração entre o sistema de compras Hant e os sistemas ERP Oracle EBS e Totvs Protheus.",
      "-Criação de relatórios com ferramenta Microsoft Reporting Services.",
      "Programador",
      "setembro de 2009 - novembro de 2011 (2 anos 3 meses)",
      "Atividades",
      "Desenvolvimento plataforma Asp.Net + C# + SQL Server,",
      "Criação de relatórios com SQL Reporting Services e programação utilizando comandos SQL.",
    ],
  },
  {
    company: "Universidade do Planalto Catarinense",
    position: "Professor",
    date: "Junho de 2011 - Dezembro de 2011 (7 meses)",
    details: [
      "Ministração da disciplina de programação C++ para curso superior de Engenharia Elétrica.",
    ],
  },
];

const Experience = () => (
  <View style={styles.container}>
    <Title>Experiência</Title>
    {experienceData.map(({ company, date, details, position }) => (
      <ExperienceEntry
        company={company}
        date={date}
        details={details}
        key={company + position}
        position={position}
      />
    ))}
  </View>
);

export default Experience;
