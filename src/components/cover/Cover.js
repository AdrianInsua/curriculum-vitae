import { ColumnLayout, distributions, RowLayout } from "../../global/Layout";
import "./Cover.scss";

function Cover() {
  const _handleClick = () => {
    window.scroll({ top: window.innerHeight, left: 0, behavior: "smooth" });
  };

  const _renderAvatar = () => {
    return (
      <div className="avatar__container animated zoomIn">
        <div className="avatar__wrapper">
          <img
            src={process.env.PUBLIC_URL + "/images/avatar.jpg"}
            alt="avatar"
          />
        </div>
        <div className="circle"></div>
      </div>
    );
  };

  const _renderLink = (svg, text, link) => {
    return (
      <RowLayout
        className="link"
        distribution={distributions.MIDDLE}
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

  const _renderLinks = () => {
    return (
      <section className="links">
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
          "docs",
          "Mi curriculum en Google Docs!",
          "https://docs.google.com/document/d/1TlOTO3FJ8jVSrSRPAUxsXlxNSI-8M1UKqqP_zYIrFRY/edit?usp=sharing"
        )}
      </section>
    );
  };

  const _renderGoTo = () => {
    return (
      <ColumnLayout className="go-to" onClick={_handleClick}>
        <p>¿Quién soy?</p>
        <em className="material-icons">expand_more</em>
      </ColumnLayout>
    );
  };

  return (
    <ColumnLayout
      className="cover__container"
      distribution={[distributions.CENTER, distributions.MIDDLE]}
    >
      {_renderAvatar()}
      {_renderLinks()}
      <h1 className="title">Adrián Insua Yañez</h1>
      <h4>Curriculum Vitae</h4>
      {_renderGoTo()}
    </ColumnLayout>
  );
}

export default Cover;
