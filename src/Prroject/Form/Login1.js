import React, { useState } from 'react'
import './Login.css'
// import { Password } from '@mui/icons-material'
export default function Login() {
  const [user,setUser] =useState({
    Email:"",Password:""
  })

  let Email ,value;

const handle = (e) =>{
    console.log(e);
    Email= e.target.Email;
    value = e.target.value;

    setUser({...user,[Email]:value});
    // setUser({...user,[Password]:value});
}
  return (
    <div>
      <div className="page">
       <div className='image'>
        <div className="back"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
        <path d="M10.7812 1.875L4.21875 7.5L10.7812 13.125V1.875Z" fill="black"/>
        </svg>
BACK TO Website</div>
    <form >
        <div className="alig">
        <div className="welcome"><h1>Welcome!</h1></div>
        <div className="create"><div className='edu'>Create a free account </div> or log in to get started with EDULIFE</div>
        <div className="email">Email</div>
        <input type="name" placeholder='abc123@gmail.com' className="emailIn" name='username' value={user.Email} onChange={handle}/>
        <div className="pass">Passsword</div>
        <input type="password" placeholder='*********' className="passIn" name='password' value={user.Password} onChange={handle}/>
        <div className="fogto">Forgot Password ?</div>
        <button className='login' type='submit' > Login</button> <br />

       
        <button  className="google"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path d="M25.4398 11.7152H24.5V11.6668H14V16.3335H20.5935C19.6315 19.0501 17.0468 21.0002 14 21.0002C10.1343 21.0002 7.00004 17.8659 7.00004 14.0002C7.00004 10.1344 10.1343 7.00016 14 7.00016C15.7845 7.00016 17.4079 7.67333 18.644 8.77291L21.9439 5.473C19.8602 3.53108 17.073 2.3335 14 2.3335C7.55712 2.3335 2.33337 7.55725 2.33337 14.0002C2.33337 20.4431 7.55712 25.6668 14 25.6668C20.443 25.6668 25.6667 20.4431 25.6667 14.0002C25.6667 13.2179 25.5862 12.4543 25.4398 11.7152Z" fill="#FFC107"/>
  <path d="M3.67847 8.56991L7.51155 11.381C8.54872 8.81316 11.0606 7.00016 14 7.00016C15.7844 7.00016 17.4078 7.67333 18.6439 8.77291L21.9438 5.473C19.8601 3.53108 17.073 2.3335 14 2.3335C9.5188 2.3335 5.63263 4.86341 3.67847 8.56991Z" fill="#FF3D00"/>
  <path d="M14 25.6666C17.0135 25.6666 19.7517 24.5133 21.8219 22.6379L18.2111 19.5824C17.0004 20.5031 15.521 21.0011 14 20.9999C10.9655 20.9999 8.38894 19.065 7.41827 16.3647L3.61377 19.296C5.5446 23.0742 9.46577 25.6666 14 25.6666Z" fill="#4CAF50"/>
  <path d="M25.4398 11.7149H24.5V11.6665H14V16.3332H20.5934C20.1333 17.6261 19.3045 18.7559 18.2093 19.5829L18.2111 19.5818L21.8219 22.6373C21.5664 22.8694 25.6667 19.8332 25.6667 13.9998C25.6667 13.2176 25.5862 12.454 25.4398 11.7149Z" fill="#1976D2"/>
</svg>   Login With Google</button> <br />
        <button className="facebook"> 
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <g clip-path="url(#clip0_3_34)">
    <path d="M28 14C28 6.26806 21.7319 0 14 0C6.26806 0 0 6.26795 0 14C0 20.9877 5.11963 26.7797 11.8125 27.8299V18.0469H8.25781V14H11.8125V10.9156C11.8125 7.40687 13.9027 5.46875 17.1005 5.46875C18.6322 5.46875 20.2344 5.74219 20.2344 5.74219V9.1875H18.4691C16.7298 9.1875 16.1875 10.2667 16.1875 11.3739V14H20.0703L19.4496 18.0469H16.1875V27.8299C22.8804 26.7797 28 20.9879 28 14Z" fill="#1877F2"/>
    <path d="M19.4496 18.0469L20.0703 14H16.1875V11.3739C16.1875 10.2666 16.7299 9.1875 18.4691 9.1875H20.2344V5.74219C20.2344 5.74219 18.6322 5.46875 17.1005 5.46875C13.9027 5.46875 11.8125 7.40688 11.8125 10.9156V14H8.25781V18.0469H11.8125V27.8299C12.5361 27.9433 13.2675 28.0002 14 28C14.7325 28.0002 15.4639 27.9434 16.1875 27.8299V18.0469H19.4496Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_3_34">
      <rect width="28" height="28" fill="white"/>
    </clipPath>
  </defs>
</svg> Login With Facebook</button>
      
      </div> 
      </form>
      </div>
      </div>
    </div>
  )
}
