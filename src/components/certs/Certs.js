import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { ColumnLayout, distributions, RowLayout } from "../../global/Layout";
import actions from "../../global/store/actions";
import { getCerts } from "../../services/certificates.service";
import "./Certs.scss";

function Certs({ scroll }) {
  const [translate, setTranslate] = useState(0);
  const ref = useRef();
  const dispatch = useDispatch();
  const certs = getCerts();

  useEffect(() => {
    const config = {
      rect: ref.current.getBoundingClientRect(),
      top: ref.current.offsetTop,
    };
    dispatch(actions.scroll.updateComponentPosition("certs", config));
  }, [dispatch]);

  useEffect(() => {
    setTranslate(scroll - ref.current.offsetTop);
  }, [scroll]);

  const _showCerts = () => {
    return translate > window.innerHeight * -0.8;
  };

  const _renderCerts = () => {
    return certs.map((cert, index) => (
      <RowLayout className="cert-card animated zoomIn">
        <img
          src={`${process.env.PUBLIC_URL}/images/svg/${cert.logo}`}
          alt="cert logo"
        />
        <ColumnLayout distribution={distributions.SPACED}>
          <ColumnLayout>
            <h3>{cert.title}</h3>
            <RowLayout>
              <span>{cert.site}</span>
              <span>{cert.subtitle}</span>
            </RowLayout>
            <span className="description">"{cert.description}..."</span>
          </ColumnLayout>
          <RowLayout className="link">
            <a href={cert.link} target="_blank" rel="noreferrer">
              Ver Certificado
            </a>
          </RowLayout>
        </ColumnLayout>
      </RowLayout>
    ));
  };

  return (
    <div style={{}} className="certs__wrapper" id="certs" ref={ref}>
      <h1>Certificados</h1>
      <RowLayout
        className="certs__container"
        distribution={[distributions.SPACED, distributions.MIDDLE]}
      >
        {_showCerts() && _renderCerts()}
      </RowLayout>
    </div>
  );
}

const propTypes = {
  scroll: PropTypes.number,
};

const defaultProps = {
  scroll: 0,
};

Certs.propTypes = propTypes;
Certs.defaultProps = defaultProps;

export default Certs;
