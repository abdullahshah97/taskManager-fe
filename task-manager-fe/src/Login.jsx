import {useEffect, useState} from "react";
import {mockLoginRequest} from "./mockServices/MockLoginRequest";

const Login = () => {
    const [submitted, setSubmitted] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [response, setResponse] = useState(null);

    useEffect(() => {
        if (submitted) {
            mockLoginRequest(email, password).then((res) => {
                setResponse(res);
                setSubmitted(false);
            });
        }
    }, [submitted]);

    const handleSubmit = (e) => {
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