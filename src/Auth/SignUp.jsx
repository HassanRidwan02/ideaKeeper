import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function SignUp(){

    const [email, setMail] = useState('')
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
        <form 
            onSubmit={handleSubmit}
            className="max-w-md w-full mx-auto my-20 px-6 py-8 bg-white rounded-xl shadow-lg"
        >
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Sign Up</h2>
            <div className="space-y-4">
                <input 
                    type="email" 
                    placeholder='Enter your email'
                    onChange = {(e)=> setMail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                />
                <input 
                    type="password"
                    placeholder='Enter a strong password'
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                />
            </div>
            <button 
                className="w-full mt-6 px-4 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-200 active:scale-95"
            >
                Sign Up
            </button>
        </form>
    )
}