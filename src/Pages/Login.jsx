import Form from 'react-bootstrap/Form';
import {useForm} from 'react-hook-form';
import {login} from '../Services/authService';
import ButtonWithLoading from '../Components/ButtonWithLoading';
import Input from '../Components/Input'
import AlertNavigation from '../Components/AlertNavigation';
import { useState } from 'react';
import { LoginMessage } from '../Utils/ErrorMessages';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContex';


export default function Login ({setUserLogued}){

  const{
        register,
        handleSubmit,
        formState: {errors},
    } = useForm ({mode: 'onChange'})  
  
    
    const [alert, setAlert ]= useState({variant:'', text:'', duration: 0, link:''})
    const [loading, setLoading] = useState(false)
    
    const context = useContext(AuthContext)

    
    const onSubmit = async (datos) => {
      setLoading(true);
      try{
      console.log ('REGISTRO',datos)
      const response = await login(datos);
      console.log ('RESPUESTA', response);
      
      setAlert({
          duration: 3000,
          variant:'success', 
          text:`Bienvenido/a ${response?.name}`,
          link:'/'
});
  context.handleLogin();
  setLoading(false);
  setUserLogued ({name: response?.name})
  
}
  catch(e){
      console.log(e);
      setAlert({
        duration: 0,
        variant:'danger', 
        text: LoginMessage[e.code] || 'Ha ocurrido un error',
    })
      setLoading(false)
  }
};
  
    const styleForm ={
      width:'50%',
      marginTop:'4rem'
    }
    const formulario ={
        display:'flex',
        justifyContent:'center',
    }
    return(
        <>
        <div style={formulario} >
        <Form 
        style={styleForm}
        onSubmit = {handleSubmit(onSubmit)}
        >
        <Input
        type='email' label='Email' placeholder='Ingrese su email' register= {{...register("email", { required: true })}}
        errors = {errors} name= 'email'
        />
        <Input
        type='password' 
        label='Password' 
        placeholder='Ingrese su constraseña' 
        register= {{...register("password", { required: true, minLength: 4, maxLength: 12 })}}
        errors = {errors} name= 'password'
        >
            {errors?.password?.type === 'minLength' && 
            <Form.Text style={{color:'red'}}>La contraseña debe contener al menos 4 caracteres </Form.Text>}
            {errors?.password?.type ==='maxLength' && 
            <Form.Text style={{color:'red'}}>La contraseña debe contener menos de 12 caracteres </Form.Text>}
        </Input>
      
        <ButtonWithLoading loading={loading} variant="primary" type="submit" style = {{marginTop:'6px', width:'100%'}}>Ingresar</ButtonWithLoading>
        <AlertNavigation
            {...alert}
        />    
        </Form>
    </div>
        </>
    )
}