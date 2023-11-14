import React from "react";
import "./TableN.css";
import Sidebar from "../../sidebar/Sidebar";
import CardNovelty from "../cardNovelty/CardNovelty";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const TableN = () =>{
    return(
        <div className="container-tableN">

            <div className="container-right">
                <Sidebar />
            </div>

            <div className="container-left">
                <div className="container-optionsN">
                    <div>
                        <p>Novedades</p>
                    </div>

                    <div>
                        <Link to={"/registerN"}>
                        <button className="buttonN"><FontAwesomeIcon icon={faPlus}/> Agregar</button>
                        </Link>
                    </div>
                </div>

                <div className="filter">
                    <p className="pFilter"><FontAwesomeIcon icon={faMagnifyingGlass}/>Filtrar</p>
                    <hr></hr>
                </div>

                <div>
                    <CardNovelty />
                    <CardNovelty />
                    <CardNovelty />
                    <CardNovelty />
                    <CardNovelty />
                    <CardNovelty />

                </div>

                
            </div>

        </div>
    );
}

export default TableN;