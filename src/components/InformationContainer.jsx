import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

import "../styles/components/informationcontainer.sass";

const infoData = [
  {
    name: "phone",
    icon: <AiFillPhone id="phone-icon" />,
    title: "Telefone",
    info: "(47)99638-3373",
  },
  {
    name: "email",
    icon: <AiOutlineMail id="email-icon" />,
    title: "E-Mail",
    info: "abeppler2000@gmail.com",
  },
  {
    name: "location",
    icon: <AiFillEnvironment id="pin-icon" />,
    title: "Localização",
    info: "Blumenau - SC",
  },
];

const InformationContainer = () => {
  return (
    <section id="information">
      {infoData.map((info) => (
        <div className="info-card" key={info.name}>
          {info.icon}
          <div>
            <h3>{info.title}</h3>
            <p>{info.info}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default InformationContainer;
