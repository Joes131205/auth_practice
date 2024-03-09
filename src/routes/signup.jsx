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
            <h1>Sign Up</h1>
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
                <input
                    type="password"
                    placeholder="Password"
                    name="confirmPassword"
                    value={data.confirmPassword}
                    onChange={handleChange}
                />
                <button type="submit">Sign Up</button>
            </form>
            <Link to="/login">Log In</Link>
        </div>
    );
}

export default SignUp;
