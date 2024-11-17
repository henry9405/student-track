import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function SignIn() {
    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/signin", {
                username,
                password,
                email

            });
            localStorage.setItem("token", response.data.access_token);
            navigate("/dashboard");
        }catch (e) {
            alert("Sign-In failed: " + err.response.data.message);
        }

};

return(
    <div className="container">
        <h2>Sign In</h2>
        <form onSubmit={handleSignIn}>
            <input 
            type="text" 
            placeholder= "username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            />
            <button type="submit">Sign In</button>
            </form>
        </div>
    
);
}
