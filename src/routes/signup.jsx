import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
    const [data, setData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });
    let navigate = useNavigate();
    const auth = getAuth();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (data.password === data.confirmPassword) {
            const email = data.email;
            const password = data.password;
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    navigate("/");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage);
                });
        } else {
            alert("Passwords do not match");
        }
    };
    function handleChange(e) {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate("/");
            }
        });
    }, []);
    useEffect(() => {
        document.title = "Sign Up";
    }, []);
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-10 bg-yale_blue-700 text-white">
            <h1 className="font-bold text-2xl">Sign Up</h1>
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
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={data.confirmPassword}
                    onChange={handleChange}
                    className="px-5 py-2 bg-white rounded-xl"
                />
                <button
                    type="submit"
                    className="px-10 py-2 bg-cambridge_blue-900 hover:bg-cambridge_blue-800 rounded-xl transition-colors text-white"
                >
                    Sign Up
                </button>
            </form>
            <p>
                {" "}
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500">
                    Log In
                </Link>
            </p>
        </div>
    );
}

export default SignUp;
