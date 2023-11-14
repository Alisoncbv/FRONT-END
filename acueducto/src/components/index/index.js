import React from "react";
import './index.css';
import TableIndex from './tableIndex/Table';
import Card from "./card/Card";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";


const Index = () => {
    return(
        <div className="container-index">

            <div className="container-header-index">
                <div className="container-logo">
                    <img
                        className="logo"
                        src={require(`../../img/logo.png`)}
                    />
                </div>

                <div className="container-start">
                    <Link to='/login'> 
                    <button className="button-start">Iniciar Sesión</button>
                    </Link>
                </div>
            </div>

            <div className="container-welcome">
                <div className="container-phrase">
                    <p className="textBig">Proceso y seguimiento para las ordenes de pago</p>
                    <p className="textsmall">-Acueducto Suarez Tolima-</p>
                </div>

                <div className="container-img">
                    <img
                        className="img-index"
                        src={require(`../../img/persona.png`)}
                    />
                </div>
            </div>
                <div className="container-table">
                    <TableIndex />
                </div>

                <div className="container-cards">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>

            <div className="cantainer-footer">
                <Footer 
                    buttonF={'Nosotros'}
                    buttonF1={'Soporte'}
                />
            </div>


        </div>

    );
}

export default Index;