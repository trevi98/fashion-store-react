import React, { useState, useEffect } from "react";
import "./Auth.css";
import { gapi } from "gapi-script";
import { GoogleLogin } from "react-google-login";
import { FcGoogle } from "react-icons/fc";
function Auth({ setSignIn }) {
    const clientId =
        "442650200178-g9mf9fng7qlaibb4msj2lakeopmi6jbg.apps.googleusercontent.com";
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [isRegister, setIsRegister] = useState(false);
    isRegister ? setSignIn("Rigister Now") : setSignIn("Sign In");
    const handelChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const switchMode = () => {
        setIsRegister((prev) => !prev);
    };
    const handelSubmit = () => {
        e.preventDefault();
    };
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
            });
        }
        gapi.load("client:auth2", start);
    }, []);
    const onLoginSuccess = (res) => {
        console.log(res);
    };
    const onLoginFailure = (res) => {
        console.log(res);
    };
    return (
        <div className="auth">
            <form onSubmit={handelSubmit}>
                {isRegister && (
                    <>
                        <div className="input">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                onChange={handelChange}
                            />
                        </div>
                    </>
                )}
                <div className="input">
                    <label>Email</label>
                    <input type="text" name="email" onChange={handelChange} />
                </div>
                <div className="input">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={handelChange}
                    />
                </div>
                {isRegister && (
                    <>
                        <div className="input">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                onChange={handelChange}
                            />
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" name="checkbox" />
                            <label> I agree to terms and conditions.</label>
                        </div>
                    </>
                )}
                <button type="submit" className="submit">
                    {isRegister ? "Register" : "Login"}
                </button>
                <p onClick={switchMode}>
                    {isRegister
                        ? "Already have an account? Sign In"
                        : "Don't have an account? Register now"}
                </p>
                {!isRegister && <p>Forget Password</p>}
                <div className="info">
                    <span>Or</span>
                    <GoogleLogin
                        clientId={clientId}
                        onSuccess={onLoginSuccess}
                        onFailure={onLoginFailure}
                        cookiePolicy={"single_host_origin"}
                        render={(renderProps) => (
                            <button
                                className="google"
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                            >
                                <FcGoogle />
                                Sign In With Google
                            </button>
                        )}
                    />
                </div>
            </form>
        </div>
    );
}

export default Auth;
