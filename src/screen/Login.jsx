import React from "react";
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../FirebaseConfig";
import { Navigate, Link } from "react-router-dom";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
    } catch(error) {
      alert("メールアドレスまたはパスワードが間違っています");
    }
  };

    //ログインを判定する設定
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  });

return (
< div className="home">
  <h1>ログインページ</h1>
  {user ? (
        <Navigate to={`/`} />
      ) : (
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input
            name="email"
            type="email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
        </div>
        <div>
          <label>パスワード</label>
          <input
            name="password"
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </div>
        <button>ログイン</button>
        <p>新規登録は<Link to={`/register/`}>こちら</Link></p>
      </form>
    )}
</ div>
);
}

export default Login;