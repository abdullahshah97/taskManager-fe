import {useEffect, useState} from "react";
import {mockLoginRequest} from "./mockServices/MockLoginRequest";
import {I_ResponseData} from "./interfaces/Interfaces";
import {useAuth} from "./contextProvider/AuthContext";

const Login = () => {
    const [submitted, setSubmitted] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [response, setResponse] = useState<I_ResponseData | null>(null);
    const {setToken} = useAuth();

    useEffect(() => {
        if (submitted) {
            mockLoginRequest(email, password).then((res) => {
                setResponse(res);
                setToken(res.token);
                setSubmitted(false);
            });
        }
    }, [submitted]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    id= "loginEmailId"
                    value = {email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    id= "loginPasswordId"
                    value = {password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            {response && <p>{response.success ? "Login Successful!" : response.message}</p>}
        </div>
    )
}

export default Login;