import { useEffect } from "react";
import firebaseConfig from "../firebaseConfig.js";
import { useNavigate } from "react-router-dom";

function Root() {
    let navigate = useNavigate();
    useEffect(() => {
        let authToken = sessionStorage.getItem("Auth Token");

        if (authToken) {
            navigate("/home");
        }

        if (!authToken) {
            navigate("/signup");
        }
    }, []);
    return (
        <div>
            <h1>Root</h1>
        </div>
    );
}

export default Root;
