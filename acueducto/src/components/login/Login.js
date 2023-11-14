import React from "react";
import '../login/Login.css';
import { Routes, Route, Link }  from "react-router-dom";



const Login = ( { inputUser, inputPassword } ) => {
    return(
        <div className="container-login">

            <div className="container-login-img">
                <img 
                    className="login-img"
                    src={require(`../../img/campesino.png`)}
                />
            </div>

            <div className="container-info">
                <div className="container-button-back">
                    <Link to='/index'>
                    <button className="button-volver">Volver</button>
                    </Link>
                </div>

                <div className="container-form">
                    <h1>Inicio Sesión</h1>
                    <form className="login-form"> 
                        <input 
                            className="input-user"
                            placeholder="Usuario"
                        />

                        <input 
                            className="input-password"
                            placeholder="Contraseña"
                        />
            
                        <Link to='/dashboard'>
                        <button className="button-getInto">Ingresar</button>
                        </Link>
                    </form>
                </div>
            </div>




        </div>
    );
}

export default Login;