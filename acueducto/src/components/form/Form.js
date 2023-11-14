import React from "react";
import './Form.css';

const Form = ( { nameInput, typeInput } ) => {
    return(
        <div className="container-input">
            <input 
                className="input"
                placeholder={nameInput}
                type={typeInput}
                name='field'
            />

        </div>
    );
}

export default Form;