import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import app from "../firebaseConfig";
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
    useEffect(() => {
        document.title = "Home";
    }, []);
    return (
        <div className="bg-yale_blue-700 text-white h-screen flex flex-col items-center justify-center gap-10">
            <h1 className="text-4xl font-bold">Hello!</h1>
            <h1 className="text-2xl">
                Your user ID: <b>{uid}</b>
            </h1>
            <Link to="/setting">Setting</Link>
            <button
                onClick={handleSignOut}
                className="px-10 py-2 bg-cambridge_blue-900 hover:bg-cambridge_blue-800 rounded-xl transition-colors text-white"
            >
                Log Out
            </button>
        </div>
    );
}

export default Root;
