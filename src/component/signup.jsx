import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "../../Styles/Common-css/SiginUp.css";
// import { useDispatch } from "react-redux";
// import { userDetils } from "../../Redux/features/searchSlice";

function Signup() {
    // const dispatch = useDispatch();
    const [values, setValues] = useState({
        name: "",
        email: "",
        passWord: "",
        confirmPass: "",
        enrolledCourses: [],
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate required fields
        if (!values.name || !values.email || !values.passWord || !values.confirmPass) {
            toast.error("Please fill out all fields.", {
                position: "top-right",
                autoClose: 3000,
            });
            return;
        }

        // Check if passwords match
        if (values.passWord !== values.confirmPass) {
            toast.error("Passwords do not match!", {
                position: "top-right",
                autoClose: 3000,
            });
            return;
        }

        // Post data to API
        try {
            const response = await fetch("https://giant-ambitious-danger.glitch.me/credentials", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: values.name,
                    email: values.email,
                    password: values.passWord,
                    enrolledCourses: values?.enrolledCourses,
                }),
            });

            if (response.ok) {
                const userData = {
                    name: values.name,
                    email: values.email,
                    enrolledCourses: values.enrolledCourses,
                };
                // Update Redux store
                dispatch(userDetils(userData));
                toast.success("Signup successful and data sent to server!", {
                    position: "top-right",
                    autoClose: 3000,
                });
                // Clear form after successful signup
                setValues({ name: "", email: "", passWord: "", confirmPass: "", enrolledCourses: [] });
            } else {
                throw new Error("Failed to send data to the server.");
            }
        } catch (error) {
            toast.error(`Error: ${error.message}`, {
                position: "top-right",
                autoClose: 3000,
            });
        }
    };

    return (
        <>
            <div className="signupContainer">
                <form className="signupForm" onSubmit={handleSubmit}>
                    <h2>Sign up</h2>
                    <div className="signup-input-cont">
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="Name"
                            value={values?.name}
                            aria-label="Enter your name"
                            required
                            onChange={(e) => {
                                setValues((pre) => ({ ...pre, name: e.target.value }));
                            }}
                        />
                    </div>
                    <div className="signup-input-cont">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email id"
                            value={values?.email}
                            aria-label="Enter your email"
                            required
                            onChange={(e) => {
                                setValues((pre) => ({ ...pre, email: e.target.value }));
                            }}
                        />
                    </div>
                    <div className="signup-input-cont">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={values?.passWord}
                            minLength={6}
                            aria-label="Enter your password"
                            required
                            onChange={(e) => {
                                setValues((pre) => ({ ...pre, passWord: e.target.value }));
                            }}
                        />
                    </div>
                    <div className="signup-input-cont">
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={values?.confirmPass}
                            aria-label="Confirm your password"
                            required
                            onChange={(e) => {
                                setValues((pre) => ({ ...pre, confirmPass: e.target.value }));
                            }}
                        />
                    </div>
                    <p>
                        Already have an Account? <a href="/Login" className="loginText">Login</a>
                    </p>
                    <button type="submit" className="signupSumbitBtn">
                        Submit
                    </button>
                </form>
            </div>
            {/* <ToastContainer /> */}
        </>
    );
}

export default Signup;