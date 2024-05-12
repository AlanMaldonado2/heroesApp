import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

export const LoginPage = () => {


  const  { login } = useContext(AuthContext)
  const navigate = useNavigate();


  
  const onLogin = () => {

    const LastPath = localStorage.getItem('LastPath') || '/'
    login('Alan Maldonado');
    
    navigate(LastPath, {
      replace: true
    });
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button 
        className="btn btn-primary"
        onClick={ onLogin }
      >
        Login
      </button>

    </div>
  )
}
