import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../FirebaseConfig";

function Home() {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/login/");
  }

return (
< div className="home">
{!loading && (
  <>
  {!user ? (
    <Navigate to={`/login/`} />
    ) : (
      <>
        <h1>マイページ</h1>
        <p>{user?.email}</p>
        <button onClick={logout}>ログアウト</button>
      </>
      )}
  </>
)}
</ div>
);
}

export default Home;