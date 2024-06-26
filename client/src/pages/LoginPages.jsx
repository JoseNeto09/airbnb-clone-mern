import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function handleLoginSubmit(ev) {
        ev.preventDefault();
        try {
          await axios.post('/login', {email,password});
          alert('Login Sucesssful');    
        } catch (e) {
          alert('Login fail');
        }
    }
    return(
        <div className="mt-4 grow flex item items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Login</h1>
                
                <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit} >
                    <input type="email" 
                     placeholder="your@email.com"
                     value={email}
                     onChange={ev => setEmail(ev.target.value)}/>
                    <input type="password"
                     placeholder="password"
                     value={password} 
                     onChange={ev => setPassword(ev.target.value)}/>
                    <button className="primary">Login</button>
                
                <div className="text-center py-2 text-gray-500">
                    Dont'have a an acoount yet? <Link className="underline text-bn"to={'/register'}>Register Now</Link>
                </div>
                </form>
            </div>
        </div>
    );
}