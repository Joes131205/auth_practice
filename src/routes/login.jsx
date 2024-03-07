import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function LogIn() {
    return (
        <div>
            <h1>Log In</h1>
            <form action="">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Log In</button>
            </form>
        </div>
    );
}

export default LogIn;
