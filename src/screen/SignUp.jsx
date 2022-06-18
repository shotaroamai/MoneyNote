import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
return (
< div className="home">
  <div>SignUp</div>
<Link to="/login">Link to Login</Link><br></br>
<Link to="/">Link to Home</Link>
</ div>
);
}

export default SignUp;