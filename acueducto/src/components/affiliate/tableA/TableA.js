import React from "react";
import "./TableA.css";
import Sidebar from "../../sidebar/Sidebar";
import Button from "../../button/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';



const TableA = () => {

    return(
        <div className="container-tableA">

            <div className="container-right">
                <Sidebar />
            </div>
            
            <div className="container-left">
                <div className="container-optionsA">
                    <div>
                        <p>Afiliados</p>
                    </div>

                    <div>
                        <Link to="/registerA">
                        <button className="buttonA"> <FontAwesomeIcon icon={faPlus}/>Agregar</button>
                        </Link>
                    </div>
                    
                </div>

                <div className="container-t">
                    <table className="table-tableA">
                        <tr>
                            <td>N°Documento</td>
                            <td>Nombre</td>
                            <td>Apellido</td>
                            <td>Dirección</td>
                            <td>Correo</td>
                            <td>Telefóno</td>
                            <td>Rol</td>
                            <td>Estado</td>
                            <td>Acciones</td>
                            <td></td>
                        </tr>
                        
                        <tr>
                            <td>1011985672</td>
                            <td>Alison</td>
                            <td>Briceño</td>
                            <td>calle 1</td>
                            <td>alison@gmail</td>
                            <td>12345</td>
                            <td>Afiliado</td>
                            <td>Activo</td>
                            <td className="iconos">
                                <div>
                                <FontAwesomeIcon icon={faFileInvoiceDollar}/>
                                </div>

                                <div>
                                <FontAwesomeIcon icon={faEye}/>
                                </div>

                                <div>
                                <Link to="/modifyA" style={{ color: '#05332E' }}>
                                <FontAwesomeIcon icon={faPenToSquare}/>
                                </Link>
                                </div>
                            </td>
                            <td></td>
                        </tr>
                    </table>
                </div>
            </div> 
        </div>
    );
} 

export default TableA;