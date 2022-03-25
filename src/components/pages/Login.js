import React from "react";
import './login.css';
import profile from "../../images/gatestone2.png";
import email from "../../images/abc.jpg";
import lock from "../../images/pass.png";
import { useHistory } from "react-router-dom";



const Login = () => {
    const history = useHistory();
  
  const routeChange = () =>{ 
    let path = `/home`; 
    history.push(path);
  }
   return (
       <div className="main">
         <div className="sub-main">
             <div>
                 <div className="imgs">
                     <div className="container-image">
                        <img src={profile} alt="profile" class="profiles"/>

                     </div>
                 </div>
                 <div>
                     <h1>Admin Login</h1>
                     <div>
                         <img src={email} alt="email" className="email" ></img>
                         <input type="text" placeholder="user name" className="name"/>
                     </div>
                     <div className="second-input">
                         <img src={lock} alt="pass" className="email" />
                         <input type="text" placeholder="Password" className="name" />
                     </div>
                     <div className="login-button">
                         <button className="button1" onClick={routeChange}>Login</button>
                     </div>
                     
                         <p >
                             <a href="/forgot">Change Password</a>
                         </p>
                    
                 </div>
             </div>

         </div>
       </div>
   ) 
}

export default Login;