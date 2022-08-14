import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import "../styles/components/socialmedia.sass";

const socialMedias = [
  {
    name: "linkedin",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/webdev-anderson-beppler",
  },
  {
    name: "github",
    icon: <FaGithub />,
    link: "https://github.com/abeppler",
  },
  {
    name: "instagram",
    icon: <FaInstagram />,
    link: "https://instagram.com/andersonbeppler",
  },
];

const SocialMedia = () => {
  return (
    <section id="social-media">
      {socialMedias.map((media) => (
        <a
          href={media.link}
          className="social-btn"
          id={media.name}
          key={media.name}
        >
          {media.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialMedia;
