import React from "react";
import "./TableC.css";
import Sidebar from "../../sidebar/Sidebar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';


const TableC = () => {
    return(
        <div className="container-tableC">

            <div className="container-right">
                <Sidebar />
            </div>

            <div className="container-left">
                <div className="container-optionsC">
                    <div>
                        <p>Contratos</p>
                    </div>

                    <div>
                        <Link to={"/registerC"}>
                        <button className="buttonC"><FontAwesomeIcon icon={faPlus}/>Agregar</button>
                        </Link>
                    </div>
                    
                </div>

                <div className="container-t">
                    <table className="table-tableA">
                        <tr>
                            <td>N°Contrato</td>
                            <td>N°Documento</td>
                            <td>Dirección</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Acciones</td>
                            <td></td>
                        </tr>
                        <tr>
                        <td>N°Contrato</td>
                            <td>N°Documento</td>
                            <td>Dirección</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="iconos">
                                <FontAwesomeIcon icon={faEye}/>
                                <Link to={"/modifyC"} style={{ color: '#05332E' }}>
                                <FontAwesomeIcon icon={faPenToSquare}/>
                                </Link>
                            </td>
                            <td></td>
                        </tr>
                    </table>
                </div>
            </div> 


        </div>
    );
}

export default TableC;