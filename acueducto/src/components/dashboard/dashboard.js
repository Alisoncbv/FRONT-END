import React from "react";
import './dashboard.css';
import Module from "./module/Module";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

const Dashboard = ({ nameWelcome }) => {
    return(
        <div className="container-dashboard">

            <div className="container-header">
                <div className="header-logo">
                    <img
                        className="logo"
                        src={require(`../../img/logo.png`)}
                    />
                </div>

                <div className="header-button">
                    <div className="perfil">
                        <a></a>
                    </div>

              
                    <div className="cerrar-sesion">
                    <Link to='/index'>
                        <button className="cerrar">Cerrar Sesión</button>
                    </Link>
                    </div>
                  

                </div>
            </div>

            <div className="container-section">
                <div className="container-img-welcome">
                    <img
                        className="img-welcome"
                        src={require(`../../img/fontanero.png`)}
                    />
                </div>

                <div className="description-welcome">
                    <h1>Bienvenido a Pysop <b>{nameWelcome}</b></h1>
                    <p>Gestiona y administra las órdenes de pago de tu comunidad. ¡Con PYSOP todo es posible!</p>
                </div>

                

            </div>

            <center><hr className="hr"></hr></center>

            <div className="section-modules">
                <div className="module-top">
                    <Link to="/tableA">
                    <Module icon={'foto5'} />
                    </Link>

                    <Link to="/tableC">
                    <Module icon={'foto5'} />
                    </Link>

                    <Link to="/tableN">
                    <Module icon={'foto5'} />
                    </Link>
                </div>

                <div className="module-buttom">
                    <Link to="/tableO">
                    <Module icon={'foto5'} />
                    </Link>

                    <Link to="/reports">
                    <Module icon={'foto5'} />
                    </Link>
                </div>
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

export default Dashboard;