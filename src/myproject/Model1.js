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
    <div className="container" id="container" >
             <div className={`form-container ${isSignUp ? 'sign-up' : 'sign-up'}`}>
               <form>
                 <h1>{!isSignUp ? 'Creat' : 'Sign In'}</h1>
                 <span>Enter Logined Email and Password</span>
                 {isSignUp && <input type="text" placeholder="Name" />}
                 {/* <input type="email" placeholder="Email" autoComplete="off"
                 />     */}
                { isSignUp && <input type="password" placeholder="Password" />}
                 {isSignUp && <button>Sign Up</button>}
                 {!isSignUp && <a href="/">Forgot Your Password?</a>}
                 <button >{isSignUp ? 'Sign Up' : 'Sign In'}</button>
                 
               </form>
             </div>
             <div className={`form-container ${isSignUp ? 'sign-in' : 'sign-in'}`}>
               <form>
                 <h1>{isSignUp ? 'Create Account' : 'Create Account'}</h1>
                 <div className="social-icons">
                 <a href="/" className="icon"> <i className="fa-brands fa-google-plus-g"></i></a>
                   <a href="/" className="icon"><i class="fa-brands fa-facebook"></i></a>
                   <a href="/" className="icon"> <i className="fa-brands fa-github"></i></a>
                 </div>
                 <span>or use your email for registration</span>
                    < input type="name" placeholder="Name" />  
                      <input type="email" placeholder="Email" />    
                 <input type="phone" placeholder="Phone"maxLength={10}/>
                 <input type="password" placeholder="Password" />
                 {isSignUp &&  <input type="password" placeholder="Confirm Password" />}
                 
                 <button  >{isSignUp ? 'Sign Up' : 'Sign In'}</button>
               </form>
             </div>
             <div className="toggle-container">
               <div className="toggle">
                 <div className={`toggle-panel ${isSignUp ? 'toggle-left' : 'toggle-right'}`}>
                   <h1>{isSignUp ? 'Welcome Back!' : 'Welcome Back  !'}</h1>
                   <p>{isSignUp ? 'Register with your personal details to use all site features' : 'Enter your personal details to use all site features'}</p>
                   <button className="hidden" onClick={toggleForm}>
                     {isSignUp ? 'Create Account' : 'Create Account'}
                   </button>
                 </div>
                 <div className={`toggle-panel ${isSignUp ? 'toggle-right' : 'toggle-left'}`}>
                   <h1>{isSignUp ?  'Hello, Friend!': 'Hello, Friend!'}</h1>
                   <p>{isSignUp ? 'Register with your personal details to use all site features' : 'Enter your personal details to use all site features'}</p>
                   <button className="hidden" onClick={toggleForm}>
                     {isSignUp ? 'Sign In' : 'Sign In'} <br />
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