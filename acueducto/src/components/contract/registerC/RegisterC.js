import React from "react";
import "./RegisterC.css";
import { useForm } from "react-hook-form";
import Form from "../../form/Form";
import Button from "../../button/Button";

const RegisterC = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return(
        <div className="container-registerC">

            <h1 className="titleRC">Registrar Contrato</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="nameLabel1">Fecha creación</label>
                <Form typeInput={"date"} {...register('creacion',{
                        required:true
                    })}/>

                {errors.creacion?.type === 'required' && <p>Este campo es obligatorio</p>}
                
                <label className="nameLabel2">Fecha finalización</label>
                <Form typeInput={"date"} {...register('finalizacion',{
                        required:true
                    })}/>

                {errors.finalizacion?.type === 'required' && <p>Este campo es obligatorio</p>}

                <Form nameInput={"N° Medidor"} typeInput={"number"} {...register('medidor',{
                        required:true
                    })}/>

                {errors.medidor?.type === 'required' && <p>Este campo es obligatorio</p>}

                <Form nameInput={"N° Documento"} typeInput={"number"} {...register('documento',{
                        required:true
                    })}/>

                {errors.documento?.type === 'required' && <p>Este campo es obligatorio</p>}

                <Button nameButton={"Registrar"}></Button>
            </form>

        </div>
    );
}

export default RegisterC;