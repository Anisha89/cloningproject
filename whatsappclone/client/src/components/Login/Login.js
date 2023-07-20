import React from 'react';
import {Button} from '@mui/material';
import {auth, provider} from '../../firebase';
import {signInWithPopup} from 'firebase/auth';
import './Login.css';
import {useStateValue} from '../ContextApi/StateProvider';
import {actionTypes } from '../ContextApi/reducer';

const Login = () => {
  //signin authentication method
  const [state,dispatch]= useStateValue();
  console.log(state);
  const signIn=()=>{
    signInWithPopup (auth,provider)
    .then((result)=>{
      console.log(result);//getting user credientials
      dispatch({
        type:actionTypes.SET_USER,
        user:result.user,
      })
      
    })
    .catch((err)=>{
      alert(err.message)
    })

  }
  return (
    <div className='login'>
      <div className='login_container'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/765px-WhatsApp.svg.png"
        alt='whatsapplogo'/>
        <div className='login_text'>
          <h1>Sign in to whatsapp</h1>
        </div>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  )
}

export default Login