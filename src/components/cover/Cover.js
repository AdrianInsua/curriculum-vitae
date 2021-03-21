import { ColumnLayout, distributions } from "../../global/Layout";
import Avatar from "../avatar/Avatar";
import "./Cover.scss";

function Cover() {
  const _handleClick = () => {
    window.scroll({
      top: window.innerHeight + 64,
      left: 0,
      behavior: "smooth",
    });
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
      id="home"
      distribution={[distributions.CENTER, distributions.MIDDLE]}
    >
      <Avatar />
      <h1 className="title">Adrián Insua Yañez</h1>
      <h4>Curriculum Vitae</h4>
      {_renderGoTo()}
    </ColumnLayout>
  );
}

export default Cover;
