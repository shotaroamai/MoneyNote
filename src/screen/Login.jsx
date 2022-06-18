import React from "react";
import { Link } from "react-router-dom";

function Login() {
return (
< div className="home">
  <div>Login</div>
<Link to="/">Link to Home</Link><br></br>
<Link to="/signup">Link to SignUp</Link>
</ div>
);
}

export default Login;