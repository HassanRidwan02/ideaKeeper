import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

export default function SignUp(){

    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/ideas");
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="email" 
                placeholder = 'Enter your email'
                onChange = {(e)=> setMail(e.target.value)}/>


            <input 
                type="password"
                placeholder='Enter a strong password'
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button>Sign Up</Button>
        </form>
    )
}