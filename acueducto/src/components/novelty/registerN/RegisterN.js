import React from "react";
import "./RegisterN.css";
import { useForm } from "react-hook-form";
import Form from "../../form/Form";
import Button from "../../button/Button";

const RegisterN = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return(
        <div className="container-RegisterN">

            <h1 className="titleRN">Registrar Novedad</h1>

                <form className="form" onSubmit={handleSubmit(onSubmit)}>

                    <label className="titleLabel">Fecha Novedad</label>
                    <Form typeInput={"date"} {...register('fechaN',{
                        required:true
                    })}/>

                    {errors.fechaN?.type === 'required' && <p>Este campo es obligatorio</p>}

                    
                    <Form nameInput={"Descripción Novedad"} typeInput={"text"} {...register('descripcion',{
                        required:true
                    })}/>

                    {errors.descripcion?.type === 'required' && <p>Este campo es obligatorio</p>}


                    <Form nameInput={"Estado Novedad"}  typeInput={"text"} {...register('estadoN',{
                        required:true
                    })}/>

                    <select className="container-tipoN">
                        <option>Tipo de novedad</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>

                    {errors.estadoN?.type === 'required' && <p>Este campo es obligatorio</p>}

                    <Form nameInput={"Detalle de la solución"} typeInput={"text"} {...register('detalleS',{
                        required:true
                    })}/>

                    {errors.detalleS?.type === 'required' && <p>Este campo es obligatorio</p>}

                    <Button nameButton={"Registrar"}></Button>
                </form>
            </div>
    );
}

export default RegisterN;