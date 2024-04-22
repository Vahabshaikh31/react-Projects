import { useEffect, useState } from 'react';

import './Modal.css'
const Model1 = ({classmodel}) =>{
    useEffect(() =>{
        document.body.style.overflowY="hidden";
        return () =>{
            document.body.style.overflowY="scroll";
        };
    },[]);

    const [isSignUp, setIsSignUp] = useState(true);

    const toggleForm = () => {
      setIsSignUp(!isSignUp);
    };

    return (<>  
    <div className="model-wrapper" onClick={classmodel} ></div>
    <div className="model-container">
      <div className="x"><button className='x1' onClick={classmodel}>x</button></div>
    <div className="container" id="container" >
     
           <div className={`form-container ${isSignUp ? 'sign-in' :  'sign-in'}`}> 
          
              <form>
                 <h1>{!isSignUp ? 'Log In' : 'Create Account'}</h1>
                 <div className="social-icons">
                 <a href="/" className="icon"> <i className="fa-brands fa-google-plus-g"></i></a>
                   <a href="/" className="icon"><i class="fa-brands fa-facebook"></i></a>
                   <a href="/" className="icon"> <i className="fa-brands fa-github"></i></a> </div>
                 {!isSignUp ? 'Enter Email And Password' : 'Fill the information'}
                 {isSignUp &&  < input type="name" placeholder="Name" />  }
                 <input type="email" placeholder="Email" />    
                 {isSignUp &&  <input type="phone" placeholder="Phone"maxLength={10}/>}
                 <input type="password" placeholder="Password" />
                 {isSignUp &&  <input type="password" placeholder="Confirm Password" />}
                 {!isSignUp && <a href="/">Forgot Your Password?</a>}
                 <button  >{!isSignUp ? 'Sign Up' : 'Sign In'}</button>
              </form>
           </div>
             <div className="toggle-container">  
               
               <div className="toggle">
                 <div className={`toggle-panel ${isSignUp ? 'toggle-right' : 'toggle-right'}`}>    
                   <h1>{!isSignUp ?  'Hello, Friend !': 'Welcome Back !'}</h1>
                   <p>{!isSignUp ? 'Enter your personal details to use all site features' :'Register with your personal details to use all site features'  }</p>
              
                   <button className="hidden" onClick={toggleForm}>
                     {!isSignUp ? 'Sign in' : 'Sign up'} <br />
                    
                   </button> 
                  
                 </div>
               </div>
             </div>
           </div>
    </div>
    </>

)
}
export default Model1;