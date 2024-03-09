import {
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";

import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
function LogIn() {
    const auth = getAuth();
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        const email = data.email;
        const password = data.password;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    function handleChange(e) {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
        console.log(data);
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate("/");
            }
        });
    }, []);

    return (
        <div>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                />
                <button type="submit">Log In</button>
            </form>

            <Link to="/signup">Sign Up</Link>
        </div>
    );
}

export default LogIn;
