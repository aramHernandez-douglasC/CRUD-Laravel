import React, {useEffect, useState} from 'react'
import LoginAPI from '../helpers/LoginAPI'
import {useHistory} from "react-router-dom"
import sha256 from '../helpers/sha256'

const LoginForm = () => {
    const history = useHistory();
    const [loading, setLoading] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = async() =>{
        setLoading(true);
        try{
            //this line hashes the password to a sha256 hash that way the password is not send in plain text
            let hash = sha256(password);
            await LoginAPI.postLogin({
                email, hash
            })
            if(sessionStorage.getItem("user")!=null){
                history.push("/display");
            }
        }catch{
            alert("Fail to login")
        }
        finally{
            setLoading(false);
        }
    }


    return (          
        <form >
            <div className="mb-3">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input id="email" 
                type="text"
                className="form-control" 
                value={email} 
                onChange={e=>setEmail(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="password" className="form-label">Password</label>
                <input id="password"
                className="form-control"
                type="password" 
                value={password} 
                onChange={e=>setPassword(e.target.value)}/>
            </div>
            <div>
                <input className="btn btn-success" type="submit" value= {loading? 'Loading...' : "Login"} onClick = {handleSubmit}
                disabled={loading}/>

               
            </div>
            
        </form>
    
        
    )
}


export default LoginForm