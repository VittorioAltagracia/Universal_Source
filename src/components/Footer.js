import { useLocation } from "react-router-dom";
const FooterComponent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <footer className={`footer pb-3 ${isHomePage ? "anti-stress" : ""}`}>
      <hr></hr>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/viktor-palatnykdev/"
          target="_blank"
          alt="Link to LinkedIn of the creator of the app"
        >
          <i className="fa fa-lg fa-linkedin-square" />
        </a>

        <a
          href="https://github.com/VittorioAltagracia"
          target="_blank"
          alt="Link to GitHub of the creator of the app"
        >
          <i className="fa fa-lg fa-github-square" />
        </a>
      </div>
      <p className="text-center mt-3" style={{ color: "#212529" }}>
        &copy; UniversalSource. All Rights Reserved.
      </p>
    </footer>
  );
};

export default FooterComponent;
