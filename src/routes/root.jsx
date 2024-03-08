import { useEffect } from "react";
import firebaseConfig from "../firebaseConfig.js";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Root() {
    let navigate = useNavigate();
    const auth = getAuth();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user);
            } else {
                navigate("/signup");
            }
        });
    }, []);
    return (
        <div>
            <h1>Root</h1>
        </div>
    );
}

export default Root;
