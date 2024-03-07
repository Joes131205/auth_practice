import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = getAuth();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            alert(error.message);
        }
    };
    return (
        <div>
            <h1>Sign Up</h1>
            <form action={handleSubmit}>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
