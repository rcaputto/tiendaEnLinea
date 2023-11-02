import {useForm} from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import ButtonWithLoading from '../Components/ButtonWithLoading';
import AlertNavigation from '../Components/AlertNavigation';
import Input from '../Components/Input'
import {useState} from 'react';
import NavBar from '../Components/NavBar';
import { registroUser } from '../Services/authService';

export default function Registro (){

    const{
        register, 
        handleSubmit,
        formState: {errors},
    } = useForm ({mode:'onChange'});

    const [alert, setAlert ]= useState({variant:'', text:'', duration: 0, link:''})
    const [loading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        setLoading(true)
        try{
            console.log ('REGISTRO',data)
            const response = await registroUser(data)
            console.log ('RESPUESTA', response);
            setLoading(false)
            setAlert({
                duration: 3000,
                variant:'success', 
                text:'Su usuario ha sido registrado',
                link:'/login'
            });
        }
        catch(e){
            console.log(e);
            setAlert({
                duration: 0,
                variant:'danger', 
                text: RegistroMessage[e.code] || 'Ha ocurrido un error',
            })
            setLoading(false)
        }
    }

    return (
        <>
        
            <Form onSubmit = {handleSubmit (onSubmit)}>
                <Input type = 'text' label = 'Nombre' placeholder = 'Ingrese su nombre' register ={{...register ('nombre', {required: true})}} errors = {errors} name = 'nombre'/>
                <Input type = 'text' label = 'Apellido' placeholder = 'Ingrese su apellido' register ={{...register ('apellido', {required: true})}} errors={errors} name = 'apellido'/>
                <Input type = 'email' label = 'Email' placeholder = 'Ingrese su email' register ={{...register ('email', {required: true})}} errors={errors} name = 'email'/>
                <Input type = 'password' label = 'Password' placeholder = 'Ingrese su password' register={{...register ('password', {required: true})}} errors={errors} name = 'password'/>
                <ButtonWithLoading loading={loading} variant="primary" type="submit" style = {{marginTop:'6px', width:'100%'}}>Registrarse</ButtonWithLoading>
                <AlertNavigation
                    {...alert}
                />
            </Form>
        
        </>
    )
}