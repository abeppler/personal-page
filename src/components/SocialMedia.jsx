import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import "../styles/components/socialmedia.sass";

const socialMedias = [
  { name: "linkedin", icon: <FaLinkedinIn /> },
  { name: "github", icon: <FaGithub /> },
  { name: "instagram", icon: <FaInstagram /> },
];

const SocialMedia = () => {
  return (
    <section id="social-media">
      {socialMedias.map((media) => (
        <a href="#" className="social-btn" id={media.name} key={media.name}>
          {media.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialMedia;
