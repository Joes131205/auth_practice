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
    useEffect(() => {
        document.title = "Log In";
    }, []);
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-10 bg-yale_blue-700 text-white">
            <h1 className="font-bold text-2xl">Log In</h1>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center justify-center gap-4 text-black"
            >
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    className="px-5 py-2 bg-white rounded-xl"
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    className="px-5 py-2 bg-white rounded-xl"
                />
                <button
                    type="submit"
                    className="px-10 py-2 bg-cambridge_blue-900 hover:bg-cambridge_blue-800 rounded-xl transition-colors text-white"
                >
                    Log In
                </button>
            </form>

            <p>
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-500">
                    Sign Up
                </Link>
            </p>
        </div>
    );
}

export default LogIn;
