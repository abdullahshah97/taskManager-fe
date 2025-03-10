import React from "react";
import Signup from "./Signup";
import { useAuth } from "./contextProvider/AuthContext";

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Logout from "./Logout";
import Login from "./Login";
import TaskList from "./TaskList";

const App = () => {
    const { token } = useAuth();
    return(
            <Router>
                <Routes>
                    {!token ? (
                        <>
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                        </>
                    ):
                        (
                        <>
                            <Route path="/tasklist" element={<TaskList />} />
                            <Route path="/logout" element={<Logout />} />
                        </>
                    )}
                </Routes>
            </Router>
    );
};

export default App;