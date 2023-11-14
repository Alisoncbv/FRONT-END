import React from "react";
import "./TableO.css";
import Sidebar from "../../sidebar/Sidebar";
import Card from "../card copy/Card";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';



const TableO = () => {
    return(
        <div className="container-tableO">

            <div className="container-right">
                <Sidebar />
            </div>

            <div className="container-left">

                <div className="container-optionsO">

                    <div>
                        <p>Orden de pago</p>
                    </div>

                    <div>
                        <Link to="/registerPO">
                        <button className="buttonO"><FontAwesomeIcon icon={faPlus}/>Agregar</button>
                        </Link>

                        <Link to={"/modifyPO"}>
                        <button className="buttonO"><FontAwesomeIcon icon={faPenToSquare}/>Corregir</button>
                        </Link>

                        <Link to={"/cardPay"}>
                        <button className="buttonO">Saldadas</button>
                        </Link>
                    </div>
                </div>

                <hr></hr>

                <div>
                    <Card />
                    <Card />
                    <Card />
                </div>

            </div>

        </div>
    );
}

export default TableO;