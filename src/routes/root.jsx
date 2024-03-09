import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

function Root() {
    const navigate = useNavigate();
    const auth = getAuth();
    const [uid, setUid] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUid(user.uid);
            } else {
                navigate("/signup");
            }
        });
    }, []);
    function handleSignOut() {
        signOut(auth).then(() => {
            navigate("/login");
        });
    }

    return (
        <div>
            <h1>Root</h1>
            <h1>Your user ID: {uid}</h1>
            <button onClick={handleSignOut}>Log Out</button>
        </div>
    );
}

export default Root;
