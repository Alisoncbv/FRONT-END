import React from "react";
import Form from "../../form/Form";
import { useForm } from "react-hook-form";
import Button from "../../button/Button";

const ModifyN = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return(
        <div className="container-RegisterN">
            <h1 className="titleRN">Modificar Novedad</h1>

            <form className="form" onSubmit={handleSubmit(onSubmit)}>

                <label className="titleLabel">Fecha Novedad</label>
                <Form typeInput={"date"}/>
                
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

                <Button nameButton={"Guardar"}></Button>
            </form>

        </div>
    );
}

export default ModifyN;
