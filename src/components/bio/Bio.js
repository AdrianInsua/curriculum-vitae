import { useEffect, useState } from "react";
import { ColumnLayout, RowLayout } from "../../global/Layout";
import { range } from "../../global/utils";
import {
  getBasicUserData,
  getHobbies,
  getLanguages,
  getSkills,
} from "../../services/user.service";
import PropTypes from "prop-types";
import "./Bio.scss";

function Bio({ scrollThreshold, scroll }) {
  const [translate, setTranslate] = useState(-500);
  const userData = getBasicUserData();
  const hobbies = getHobbies();
  const skills = getSkills();
  const languages = getLanguages();

  useEffect(() => {
    setTranslate(scroll - scrollThreshold);
  }, [scroll, scrollThreshold]);

  const _getAvatarTranslate = () => {
    return Math.min(translate, 0);
  };

  const _getAboutTranslate = () => {
    return Math.max(translate * -1, 0);
  };

  const _getAboutOpacity = () => {
    return range(-300, 0, 0, 1, translate);
  };

  const _showName = () => {
    const nameThreshold = scrollThreshold / -2;
    return translate > nameThreshold;
  };

  const _showHobbies = () => {
    return translate > -100;
  };

  const _renderBasicInfo = () => {
    return (
      <ColumnLayout className="animated fadeInUp">
        <h1>Adrián Insua Yañez</h1>
        <ColumnLayout className="sidebar__info">
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
      </ColumnLayout>
    );
  };

  const _renderHobbies = () => {
    return (
      <ColumnLayout className="animated fadeInUp hobbies">
        <h2>AFICCIONES</h2>
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

  const _renderAbout = () => {
    return (
      <ColumnLayout className="about">
        <div className="decorator"></div>
        <h2>Sobre mí</h2>
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
        <h2>Aptitudes</h2>
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
        <h2>Idiomas</h2>
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
      style={{
        "--translate": `${_getAvatarTranslate()}px`,
        "--translate--about": `${_getAboutTranslate()}px`,
        "--opacity--about": _getAboutOpacity(),
      }}
    >
      <RowLayout>
        {_renderSidebar()}
        <ColumnLayout>
          {_renderAbout()}
          {_renderSkills()}
          {_renderLanguages()}
        </ColumnLayout>
      </RowLayout>
    </div>
  );
}

const propTypes = {
  scrollThreshold: PropTypes.number,
  scroll: PropTypes.number,
};

const defaultProps = {
  scrollThreshold: 0,
  scroll: 0,
};

Bio.propTypes = propTypes;
Bio.defaultProps = defaultProps;

export default Bio;
