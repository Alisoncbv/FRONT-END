import React from "react";
import "./CardPay.css";

const CardPay = () => {
    return(
        <div className="container-cardPay">
            <p className="cardPay">Consecutivo</p>
            <p className="cardPay">Nombre Afiliado</p>
            <p className="cardPay">N°Documento</p>
            <p className="cardPay">Periodo</p>
            <p className="cardPay">Consumo</p>
            <p className="cardPay">Total</p>
        </div>
    );
}

export default CardPay;