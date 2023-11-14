import React from "react";
import Form from "../../form/Form";
import { useForm } from "react-hook-form";
import Button from "../../button/Button";

const ModifyC = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }


    return(
        <div className="container-registerC">

            <h1 className="titleRC">Modificar Contrato</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="nameLabel1">Fecha creación</label>
                <Form typeInput={"date"}/>

                <label className="nameLabel2">Fecha finalización</label>
                <Form typeInput={"date"} {...register('finalizacion',{
                        required:true
                    })}/>

                {errors.finalizacion?.type === 'required' && <p>Este campo es obligatorio</p>}

                <Form nameInput={"N° Medidor"} typeInput={"number"} {...register('medidor',{
                        required:true
                    })}/>

                {errors.medidor?.type === 'required' && <p>Este campo es obligatorio</p>}

                <Form nameInput={"N° Documento"} typeInput={"number"}/>

                <Form nameInput={"Nombre"} typeInput={"text"}/>
                
                <Button nameButton={"Modificar"}></Button>
            </form>

        </div>
    );
}

export default ModifyC