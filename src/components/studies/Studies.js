import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { ColumnLayout, distributions, RowLayout } from "../../global/Layout";
import actions from "../../global/store/actions";
import { range } from "../../global/utils";
import { getStudies } from "../../services/studies.service";
import "./Studies.scss";

function Studies({ scroll }) {
  const [translate, setTranslate] = useState(0);
  const ref = useRef();
  const dispatch = useDispatch();
  const studies = getStudies();

  useEffect(() => {
    const config = {
      rect: ref.current.getBoundingClientRect(),
      top: ref.current.offsetTop,
    };
    dispatch(actions.scroll.updateComponentPosition("studies", config));
  }, [dispatch]);

  useEffect(() => {
    setTranslate(scroll - ref.current.offsetTop);
  }, [scroll]);

  const _getStudiesTranslate = () => {
    if (translate < window.innerHeight) {
      const threshold = (window.innerHeight / -2) * 1.7;
      return range(threshold, 0, window.innerHeight, 0, translate);
    } else {
      return range(
        window.innerHeight,
        window.innerHeight * 2,
        0,
        window.innerHeight * -1,
        translate
      );
    }
  };

  const _getContainerWidth = () => {
    return range(200, window.innerHeight, 0, 70, translate);
  };

  const _getTitleTranslate = () => {
    return range(100, window.innerHeight, 100, 0, translate);
  };

  const _getOpacity = () => {
    return range(200, window.innerHeight, 0, 1, translate);
  };

  const _renderStudyCard = (study) => {
    return (
      <div key={study.title} className="study--card">
        <ColumnLayout>
          <h3>{study.title}</h3>
          <h4>{study.institution}</h4>
          <span className="caption">{study.years}</span>
        </ColumnLayout>
      </div>
    );
  };

  return (
    <div
      className="studies__wrapper"
      id="studies"
      style={{
        "--studies": studies.length,
        "--container--width": `${_getContainerWidth()}%`,
        "--translate": `${_getStudiesTranslate()}px`,
        "--translate--title": `${_getTitleTranslate()}%`,
        "--opacity": _getOpacity(),
      }}
      ref={ref}
    >
      <div
        className="studies__container"
        style={{
          position: translate > 0 ? "fixed" : "relative",
        }}
      >
        <RowLayout className="study__container">
          <div
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/graduation.jpg)`,
            }}
            className="study--cover"
          >
            <ColumnLayout
              distribution={[distributions.CENTER, distributions.MIDDLE]}
              className="title"
            >
              <h1>Estudios</h1>
            </ColumnLayout>
          </div>
          <RowLayout
            distribution={distributions.SPACED}
            className="study--card__container"
          >
            {studies.map((study) => _renderStudyCard(study))}
          </RowLayout>
        </RowLayout>
      </div>
    </div>
  );
}

const propTypes = {
  scroll: PropTypes.number,
};

const defaultProps = {
  scroll: 0,
};

Studies.propTypes = propTypes;
Studies.defaultProps = defaultProps;

export default Studies;
