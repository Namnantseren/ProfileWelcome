import React, {useState} from "react";
import './style.css'

export default function WelcomePage(prop) {
    const { setLogin } = prop;
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="Userpass">
            <h2>Log in</h2>
            <input type="text" placeholder = "username"onChange={(e)=> setUserName(e.target.value)}/>
            <input type="text" placeholder = "password"onChange={(e)=> setPassword(e.target.value)}/>
            <button onClick={() => setLogin(userName, password)}>Login</button>
        </div>
    )
}