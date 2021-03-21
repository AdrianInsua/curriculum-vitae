import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { ColumnLayout, distributions, RowLayout } from "../../global/Layout";
import actions from "../../global/store/actions";
import { range } from "../../global/utils";
import "./Work.scss";

function Work({ scroll }) {
    const [translate, setTranslate] = useState(0);
    const ref = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
        const config = {
            rect: ref.current.getBoundingClientRect(),
            top: ref.current.offsetTop
        };
        dispatch(actions.scroll.updateComponentPosition("work", config));
    }, [dispatch]);

    useEffect(() => {
        setTranslate(scroll - ref.current.offsetTop);
    }, [scroll]);

    const _getDotWidth = () => {
        return range(window.innerHeight * -0.2, 200, 0, 250, translate);
    };

    const _getContainerWidth = () => {
        return range(window.innerHeight * -0.4, 200, 0, 90, translate);
    };

    const _getOpacity = () => {
        return range(200, 400, 0, 1, translate);
    };

    const _renderImatia = () => {
        return (
            <div className="description">
                <h2>Imatia</h2>
                <p>
                    Trabajo de <b>desarrollador software en cliente (Inditex)</b> en entornos de{" "}
                    <b>grandes volúmenes de datos</b>, desarrollando tareas tanto de{" "}
                    <b>front (desarrollo y diseño ux/ui) como de back-end</b>.
                </p>
                <p>
                    Actualmente tomo responsabilidad del desarrollo y entrega de varios proyectos dentro de un{" "}
                    <b>ecosistema de aplicaciones utilizando Angular, React o Vue</b> según proyecto/necesidad.
                </p>
            </div>
        );
    };

    const _renderIndra = () => {
        return (
            <div className="description">
                <h2>Indra</h2>
                Desarrollo de webservices para aplicaciones <b>CRM</b> en entornos Java y trabajos en <b>SalesForce</b>.
            </div>
        );
    };

    const _renderItg = () => {
        return (
            <div className="description">
                <h2>Instituto tecnológico de Galicia</h2>
                En mi periodo como becario en el centro he desarrollado los siguientes trabajos:
                <ul>
                    <li>
                        {" "}
                        Investigación en entornos <b>Big Data de análisis de sentimientos</b> sobre textos en lenguaje
                        natural.{" "}
                    </li>
                    <li>
                        Desarrollo de trabajos de implementación orientados a la web tanto en backend (
                        <b>Hibernate y Spring</b>) como de front-end (<b>AngularJS</b>).{" "}
                    </li>
                    <li>
                        Investigación sobre el tratamiento de consultas en texto plano con la intención de componer una
                        consulta RDF que se ejecute contra una ontología RDF
                    </li>
                </ul>
            </div>
        );
    };

    const _renderDintedra = () => {
        return (
            <div className="description">
                <h2>Dintedra</h2>
                Desarrollo de aplicaciones tipo ERP para gestión de empresas, desarrollo de diferentes plataformas web
                tanto publicitarias o promocionales como de gestión interna de los datos de la empresa, manejando{" "}
                <b>html, mysql y php</b>
            </div>
        );
    };

    return (
        <div
            style={{
                "--container-width": `${_getContainerWidth()}%`,
                "--work-dot": `${_getDotWidth()}px`,
                "--letter-opacity": _getOpacity()
            }}
            className="work__wrapper"
            id="work"
            ref={ref}
        >
            <h1>Experiencia</h1>
            <RowLayout className="work__container" distribution={[distributions.SPACED, distributions.MIDDLE]}>
                <ColumnLayout className="work dintedra" distribution={[distributions.CENTER, distributions.MIDDLE]}>
                    <h2>Dintedra</h2>
                    <div>JULIO DE 2010-JULIO DE 2011</div>
                    <div>A CORUÑA</div>
                    {_renderDintedra()}
                </ColumnLayout>
                <ColumnLayout className="work itg" distribution={[distributions.CENTER, distributions.MIDDLE]}>
                    <h2>I.T.G</h2>
                    <div>SEPTIEMBRE DE 2016-MARZO DE 2017</div>
                    <div>A CORUÑA</div>
                    {_renderItg()}
                </ColumnLayout>
                <ColumnLayout className="work indra" distribution={[distributions.CENTER, distributions.MIDDLE]}>
                    <h2>Indra</h2>
                    <div>ABRIL 2017-MAYO 2017</div>
                    <div>A CORUÑA</div>
                    {_renderIndra()}
                </ColumnLayout>
                <ColumnLayout className="work imatia" distribution={[distributions.CENTER, distributions.MIDDLE]}>
                    <h2>Imatia</h2>
                    <div>MAYO 2017-ACTUALIDAD</div>
                    <div>A CORUÑA</div>
                    {_renderImatia()}
                </ColumnLayout>
            </RowLayout>
        </div>
    );
}

const propTypes = {
    scroll: PropTypes.number
};

const defaultProps = {
    scroll: 0
};

Work.propTypes = propTypes;
Work.defaultProps = defaultProps;

export default Work;
