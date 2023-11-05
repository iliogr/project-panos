import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./dashboard";

function LoginScreen(){

    const navigate = useNavigate();

    function loginUser(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        let formUserName = formData.get('usrname');
        let formPassword = formData.get("pswrd");
        axios.get(`http://localhost:3000/login?username=${formUserName}&password=${formPassword}`).then((res) => {
            // console.log("received a response!", res);
            if(res.data){
                // console.log("Login OK!");
                navigate("/login");
            } else {
                alert("Login failed.");
                // console.log("Login failed.");
            }
        })

    }

    return(

        <form action="/action_page.php" method="post" onSubmit={e => loginUser(e)}>
            <label>Username</label>
            <input type="text" name="usrname" required/><br />
            <label>Password</label>
            <input type="text" name="pswrd" required/><br /> 
            <input type="submit" value="Submit" />
        </form>
    )

}

export default LoginScreen;