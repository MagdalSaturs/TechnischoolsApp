import React from "react";
import "./Login.scss";

const Login = () => {
    const username = "MagdaTechnischools";
    const password = "Technischools";

    const loginRef = React.useRef();
    const passwordRef = React.useRef();

    const login = () => {
        if (loginRef.current.value === username && passwordRef.current.value === password) {
            window.location.href = "/list";
        } else {
            document.getElementById("error").innerHTML = "Błędny login lub hasło";
            document.getElementById("error").style.color = "red";
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <p id="error"></p>
            <input ref={loginRef} type="text" placeholder="Login" id="login" />
            <input ref={passwordRef} type="password" placeholder="Hasło" id="login" />
            <button onClick={login}>Zaloguj</button>
        </div>
    );
};

export default Login;