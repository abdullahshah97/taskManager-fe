import {useEffect, useState} from "react";
import {mockSignupRequest} from "./mockServices/MockSignupRequest";
import React from "react";
import {I_ResponseData} from "./interfaces/Interfaces";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [response, setResponse] = useState<I_ResponseData | null>(null);

    useEffect(() => {
        if(submitted) {
            mockSignupRequest(email, password).then((response: I_ResponseData) => {
                setResponse(response);
                setSubmitted(false);

            });
        }
    },[submitted])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(password !== passwordConfirm) {
            setResponse({success: false, message:"Passwords don't match"});
        }
        else{
            setSubmitted(true);
        }
    }

        return (
            <div>
                <form onSubmit = {handleSubmit}>
                    <input
                        type = "email"
                        id = "signup-email"
                        value = {email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    <input
                    type = "password"
                    id = "signup-password"
                    value = {password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type = "password"
                        id = "signup-passwordConfirm"
                        value = {passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                        />
                    <button type="submit">Submit</button>
                </form>
                {response && <p>{response.success ? "Signup Successful!" : response.message}</p>}
            </div>
        )
}

export default Signup;