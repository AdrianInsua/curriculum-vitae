import { ColumnLayout, distributions } from "../../global/Layout";
import "./Cover.scss";

function Cover() {
  const _renderAvatar = () => {
    return (
      <div className="avatar__container">
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
      <div className="link" onClick={() => window.open(link)}>
        <div className="link--name">{text}</div>
        <img
          src={`${process.env.PUBLIC_URL}/images/svg/${svg}.svg`}
          alt="github"
        />
      </div>
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
      </section>
    );
  };

  const _renderGoTo = () => {
    return (
      <ColumnLayout className="go-to">
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
      <h1>Adrián Insua Yañez</h1>
      <h4>Curriculum Vitae</h4>
      {_renderGoTo()}
    </ColumnLayout>
  );
}

export default Cover;
