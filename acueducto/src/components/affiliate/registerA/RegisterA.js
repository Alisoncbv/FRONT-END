import React from "react";
import './RegisterA.css';
import { useForm } from "react-hook-form";
import Form from "../../form/Form";
import Button from "../../button/Button";
import swal from "sweetalert";

const RegisterA = ( ) => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    const registroA=()=>{
        swal({
            text:"El usuario se registro correctamente.",
            icon: "success",
        })
    }

    return(
        <div className="container-registerA">

            <h1 className="titleRA">Registrar Afiliado</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Form nameInput={'N°Documento'} typeInput={'number'} {...register('documento',{
                        required:true
                    })}/>

                    {errors.documento?.type === 'required' && <p>Este campo es obligatorio</p>}

                    <Form nameInput={'Nombre'} typeInput={'text'} {...register('nombre',{
                        required: true,
                        maxLength: 10
                    })}/>

                    {errors.nombre?.type === 'required' && <p>Este campo es obligatorio</p>}
                    {errors.nombre?.type === 'maxLength' && <p>El nombre debe tener menos de 10 caracteres</p>}

                    <Form nameInput={'Apellido'} typeInput={'text'} {...register('apellido',{
                        required: true,
                        maxLength: 10
                    })}/>

                    {errors.apellido?.type === 'required' && <p>Este campo es obligatorio</p>}
                    {errors.apellido?.type === 'maxLength' && <p>El apellido debe tener menos de 10 caracteres</p>}

                    <Form nameInput={'Dirección'} typeInput={'text'} {...register('direccion',{
                        required: true,
                        maxLength: 50
                    })}/>

                    {errors.direccion?.type === 'required' && <p>Este campo es obligatorio</p>}
                    {errors.direccion?.type === 'maxLength' && <p>La direccion debe tener menos de 50 caracteres</p>}

                    <Form nameInput={'Correo electrónico'} typeInput={'email'} {...register('email',{
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                    })}/>

                    {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}

                    <Form nameInput={'Teléfono'} typeInput={'number'} {...register('telefono',{
                        required:true
                    })}/>

                    {errors.telefono?.type === 'required' && <p>Este campo es obligatorio</p>}

                    <Form nameInput={'Rol'} typeInput={'text'} {...register('rol',{
                        required:true
                    })}/>

                    {errors.rol?.type === 'required' && <p>Este campo es obligatorio</p>}

                    <Form nameInput={'Estado'} typeInput={'text'} {...register('estado',{
                        required:true
                    })}/>

                    {errors.estado?.type === 'required' && <p>Este campo es obligatorio</p>}

                    <Button nameButton={'Registrar'} onClick={registroA}></Button>

                </form>
        </div>
    );
}

export default RegisterA;