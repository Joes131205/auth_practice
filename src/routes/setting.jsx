import { useState } from "react";

function Setting() {
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        profilePicture: null,
    });

    function handleChange(e) {
        if (e.target.name === "profilePicture") {
            setData({
                ...data,
                [e.target.name]: e.target.files[0],
            });
        } else {
            setData({
                ...data,
                [e.target.name]: e.target.value,
            });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(data);
    }

    return (
        <div>
            <h1 className="font-bold text-2xl">Setting</h1>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center justify-center gap-4 text-black"
            >
                <input
                    type="file"
                    accept="image/png, image/jpeg"
                    name="profilePicture"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={data.username}
                    onChange={handleChange}
                />
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
                <button
                    type="submit"
                    className="px-10 py-2 bg-cambridge_blue-900 hover:bg-cambridge_blue-800 rounded-xl transition-colors text-white"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Setting;
