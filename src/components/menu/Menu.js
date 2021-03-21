import { useEffect, useState } from "react";
import { distributions, RowLayout } from "../../global/Layout";
import { HashLink } from "react-router-hash-link";
import PropTypes from "prop-types";
import "./Menu.scss";
import { useSelector } from "react-redux";

function Menu({ scroll }) {
  const [translate, setTranslate] = useState(0);
  const scrollConfig = useSelector((state) => state.scroll);

  useEffect(() => {
    setTranslate(scroll);
  }, [scroll]);

  const _isScrolled = () => {
    return translate > window.innerHeight / 2;
  };

  const _isPageActive = (page) => {
    const top = scrollConfig[page]?.top - 200;
    const bottom = top + scrollConfig[page]?.rect.height;

    return translate >= top && translate < bottom;
  };

  const _renderLink = (svg, text, link) => {
    return (
      <RowLayout
        className="link animated zoomIn"
        distribution={[distributions.MIDDLE, distributions.CENTER]}
        onClick={() => window.open(link)}
      >
        <div className="link--name">{text}</div>
        <img
          src={`${process.env.PUBLIC_URL}/images/svg/${svg}.svg`}
          alt="github"
        />
      </RowLayout>
    );
  };

  const _renderSectionLink = (active, text, link) => {
    return (
      <HashLink smooth to={`/#${link}`}>
        <RowLayout
          className="link animated zoomIn"
          distribution={[distributions.MIDDLE, distributions.CENTER]}
        >
          <div className="link--name">{text}</div>
          <div className={`dot ${active && "active"}`}></div>
        </RowLayout>
      </HashLink>
    );
  };

  const _renderLinks = () => {
    return (
      <section className="links">
        {_isScrolled() && _renderSectionLink(false, "Home", "home")}
        {_isScrolled() &&
          _renderSectionLink(_isPageActive("bio"), "Sobre mi", "bio")}
        {_isScrolled() &&
          _renderSectionLink(_isPageActive("studies"), "Estudios", "studies")}
        {_isScrolled() &&
          _renderSectionLink(_isPageActive("work"), "Trabajos", "work")}
        {_renderLink(
          "gmail",
          "Contactame por correo!",
          "mailto:adrian.insua.y@gmail.com"
        )}
        {_renderLink(
          "github",
          "Dale un vistazo a mi repo!",
          "https://github.com/AdrianInsua"
        )}
        {_renderLink(
          "linkedin",
          "Búscame en LinkedIn!",
          "https://www.linkedin.com/in/adrián-insua-yañez-952875121/"
        )}
      </section>
    );
  };

  return (
    <menu className={_isScrolled() ? "scrolled" : ""}>{_renderLinks()}</menu>
  );
}

const propTypes = {
  scroll: PropTypes.number,
};

const defaultProps = {
  scroll: 0,
};

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default Menu;
