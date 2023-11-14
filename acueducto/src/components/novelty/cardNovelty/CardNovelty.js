import React from "react";
import "./CardNovelty.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';

const CardNovelty = () => {
    return(
        <div className="cardNovelty">
            <p className="cardP">Fecha</p>
            <p className="cardP">Tipo</p>
            <p className="cardP">Descripción</p>
            <p className="cardP">Estado</p>
            <Link to={"/modifyN"}>
            <FontAwesomeIcon className="icono" icon={faPenToSquare}/>
            </Link>

        </div>
    );
}

export default CardNovelty;