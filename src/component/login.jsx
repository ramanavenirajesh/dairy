import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "../style/state.module.css";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { isUserLogin } from "../../Redux/features/searchSlice";

function LogIn() {
    let [userData, setuserData] = useState({
        userName: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);

    // const navigate = useNavigate();
    // const dispatch = useDispatch();

    let localUserData;
    try {
        localUserData = JSON.parse(localStorage.getItem("userDetails")) || [];
    } catch (error) {
        console.error("Error parsing localStorage:", error);
        localUserData = [];
    }

    let handle_Username = (e) => {
        setuserData((prevData) => ({
            ...prevData,
            userName: e.target.value,
        }));
    };

    let handle_password = (e) => {
        setuserData((prevData) => ({
            ...prevData,
            password: e.target.value,
        }));
    };

    let togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    let handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://giant-ambitious-danger.glitch.me/credentials");
            const users = await response.json();

            const isUserValid = users.some(
                (user) =>
                    user.name === userData.userName &&
                    user.password === userData.password
            );

            if (isUserValid) {
                toast.success(`Welcome Back ${userData.userName}!`, {
                    position: "top-right",
                    autoClose: 2000,
                    onClose: () => navigate("/"),
                });
                dispatch(isUserLogin(true));
            } else {
                toast.error("Invalid username or password.", {
                    position: "top-right",
                    autoClose: 3000,
                });
            }
        } catch (error) {
            toast.error(`Error fetching user data: ${error.message}`, {
                position: "top-right",
                autoClose: 3000,
            });
        }
    };

    return (
        <>
            <div className="loginContainer">
                <form className="loginForm" onSubmit={handleLogin}>
                    <h2>Login</h2>
                    <div className="login-Input-container">
                        <input
                            type="text"
                            id="userName"
                            placeholder="Username"
                            required
                            onChange={handle_Username}
                        />
                        <i className="fa-solid fa-user"></i>
                    </div>
                    <div className="login-Input-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="passwordlogin"
                            placeholder="Password"
                            minLength="6"
                            required
                            onChange={handle_password}
                        />
                        <i
                            className={`fa-solid ${showPassword ? "fa-eye" : "fa-eye-slash"} eyeSymbol`}
                            onClick={togglePasswordVisibility}
                            style={{ cursor: "pointer" }}
                        ></i>
                    </div>
                    <button type="submit" className="loginBtn">
                        Login
                    </button>
                    <p>
                        Don't have an Account?{" "}
                        <a href="/Signup" className="registernow">
                            Register now
                        </a>
                    </p>
                </form>
            </div>
            {/* <ToastContainer /> */}
        </>
    );
}

export default LogIn;