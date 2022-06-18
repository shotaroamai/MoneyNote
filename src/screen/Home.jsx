import React from "react";
import { Link } from "react-router-dom";

function Home() {
return (
< div className="home">
  <div>home</div>
<Link to="/login">Link to Login</Link><br></br>
<Link to="/signup">Link to SignUp</Link>
</ div>
);
}

export default Home;