import { useEffect, useRef, useState } from "react";
import { ColumnLayout, RowLayout } from "../../global/Layout";
import { range } from "../../global/utils";
import {
  getBasicUserData,
  getHobbies,
  getLanguages,
  getSkills,
} from "../../services/user.service";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import actions from "../../global/store/actions";
import "./Bio.scss";

function Bio({ scroll }) {
  const [translate, setTranslate] = useState(-500);
  const dispatch = useDispatch();
  const ref = useRef();
  const userData = getBasicUserData();
  const hobbies = getHobbies();
  const skills = getSkills();
  const languages = getLanguages();

  useEffect(() => {
    setTranslate(scroll - ref.current.offsetTop / 2);
  }, [scroll]);

  useEffect(() => {
    const config = {
      rect: ref.current.getBoundingClientRect(),
      top: ref.current.offsetTop,
    };
    dispatch(actions.scroll.updateComponentPosition("bio", config));
  }, [dispatch]);

  const _getAvatarTranslate = () => {
    return Math.min(translate, 0);
  };

  const _getAboutTranslate = () => {
    return range(-300, 300, 500, 0, translate);
  };

  const _getAboutOpacity = () => {
    return range(-300, 0, 0, 1, translate);
  };

  const _showName = () => {
    const nameThreshold = ref.current?.offsetTop / -2;
    return translate > nameThreshold;
  };

  const _showHobbies = () => {
    return translate > -100;
  };

  const _renderBasicInfo = () => {
    return (
      <ColumnLayout className="animated fadeInUp sidebar__info">
        <table>
          <tbody>
            {userData.map((row) => (
              <tr key={row.title}>
                <td>{row.title}</td>
                <td>
                  <span>{row.value}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ColumnLayout>
    );
  };

  const _renderHobbies = () => {
    return (
      <ColumnLayout className="animated fadeInUp hobbies">
        <h3>AFICCIONES</h3>
        <div className="hobbies__container">
          {hobbies.map((hobbie) => (
            <div key={hobbie} className="chip chip--hobbie">
              {hobbie}
            </div>
          ))}
        </div>
      </ColumnLayout>
    );
  };

  const _renderSidebar = () => {
    return (
      <ColumnLayout className="sidebar__container">
        <img src={`${process.env.PUBLIC_URL}/images/avatar.jpg`} alt="avatar" />
        {_showName() && _renderBasicInfo()}
        {_showHobbies() && _renderHobbies()}
      </ColumnLayout>
    );
  };

  const _renderInfo = () => {
    return (
      <ColumnLayout className="about">
        <h1 className="title">Adrián Insua Yañez</h1>
        <RowLayout>
          {_renderAbout()}
          {_renderSkills()}
        </RowLayout>
      </ColumnLayout>
    );
  };

  const _renderAbout = () => {
    return (
      <ColumnLayout>
        <div className="decorator"></div>
        <h3>Sobre mi</h3>
        <div className="about__content">
          <p>
            Soy una persona a la que le gustan los <b>retos</b>, y{" "}
            <b>aprender</b> cosas nuevas, con una buena capacidad de adaptación
            y de aprendizaje para poder enfrentarme de forma competente a los
            cambios y problemas que se presenten.
          </p>
          <p>
            Mis <b>años de experiencia</b> me han acostumbrado a{" "}
            <b>trabajar en equipo y bajo presión</b>, centrando mi trabajo en el
            desarrollo de micro-aplicaciones y micro-servicios.
          </p>
        </div>
      </ColumnLayout>
    );
  };

  const _renderSkills = () => {
    return (
      <ColumnLayout className="skills">
        <div className="decorator"></div>
        <h3>Aptitudes</h3>
        <p>
          A lo largo de mis años de trabajo y estudio he desarrollado
          habilidades en diversos campos, relacionados tanto con materia de{" "}
          <b>software</b> como de <b>computación</b>.
        </p>
        <p>
          Aunque últimamente dadas mis responsabilidades he centrado mis
          esfuerzos en mejorar mis aptitudes en temas relacionados con el
          desarrollo de software, sobre todo en lo relacionado con el desarrollo
          de <b>front-ends</b> utilizando un amplio abanico de tecnologías.
        </p>
      </ColumnLayout>
    );
  };

  const _renderKnowledge = () => {
    return (
      <ColumnLayout className="knowledge">
        <div className="decorator"></div>
        <h3>Conocimientos</h3>
        <div className="skills__content">
          {skills.map((skill) => (
            <div key={skill} className="chip chip--skill animated zoomIn">
              {skill}
            </div>
          ))}
        </div>
      </ColumnLayout>
    );
  };

  const _renderLanguages = () => {
    return (
      <ColumnLayout className="languages">
        <div className="decorator"></div>
        <h3>Idiomas</h3>
        <div className="languages__content">
          {languages.map((language) => (
            <div className="language__container" key={language.title}>
              <h4>{language.title}</h4>
              <div className="language--bar">
                <div
                  className="language--progress"
                  style={{ width: `${language.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </ColumnLayout>
    );
  };

  return (
    <div
      className="bio__container"
      id="bio"
      ref={ref}
      style={{
        "--translate": `${_getAvatarTranslate()}px`,
        "--translate--about": `${_getAboutTranslate()}px`,
        "--opacity--about": _getAboutOpacity(),
      }}
    >
      <RowLayout>
        {_renderSidebar()}
        <ColumnLayout>
          {_renderInfo()}
          {_renderKnowledge()}
          {_renderLanguages()}
        </ColumnLayout>
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

Bio.propTypes = propTypes;
Bio.defaultProps = defaultProps;

export default Bio;
