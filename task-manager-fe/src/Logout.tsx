import {useAuth} from "./contextProvider/AuthContext";

const Logout = () => {
    const {token , logout} = useAuth();

    return (
        <div>
            <p>Your token: {token}</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Logout;