import { useTranslation } from "react-i18next";
import { SocialLinks } from "../utils/translations/hardCodedUITranslations";
const FooterComponent = () => {
  const { i18n } = useTranslation();

  return (
    <footer className="main-footer my-5">
      <p className="social-par">{SocialLinks.SocialLinks[i18n.language]}</p>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/viktor-palatnykdev/"
          target="_blank"
          alt="Link to LinkedIn of the creator of the app"
        >
          <i className="fa fa-lg fa-linkedin-square individual-link" />
        </a>

        <a
          href="https://github.com/VittorioAltagracia"
          target="_blank"
          alt="Link to GitHub of the creator of the app"
        >
          <i className="fa fa-lg fa-github-square individual-link" />
        </a>
      </div>
    </footer>
  );
};

export default FooterComponent;
