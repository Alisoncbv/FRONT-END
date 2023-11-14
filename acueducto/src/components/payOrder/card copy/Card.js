import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const CardPay = () => {
    return(
        <div className="container-card">
            <p className="card">Consecutivo</p>
            <p className="card">Nombre Afiliado</p>
            <p className="card">N°Documento</p>
            <p className="card">Periodo</p>
            <p className="card">Consumo</p>
            <p className="card">Total</p>
            <Link to={"/pay"}>
            <center><button className="buttonO">Asignar Pago</button></center>
            </Link>
        </div>
    );
}

export default CardPay;