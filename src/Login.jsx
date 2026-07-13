import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import Editprofile from "./Editprofile";
const Login = () => {
    const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
const [islogin, setislogin] = useState(true);
 
const googlelogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider);

  const savegoogle = await setDoc(
  doc(db, "users", result.user.uid),
  {
    name: result.user.displayName,
    email: result.user.email,
    photo: result.user.photoURL,
  }
);
    navigate("/home");
    console.log(result.user);

  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};

const signup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(userCredential.user);
     setemail("");
      setpassword("");

      alert("Account Created Successfully!");
      navigate("/home");

  
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  }

  const login = async () => { try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(userCredential.user);
      setemail("");
      setpassword("");

      alert("Account Login Succusfully!");
     navigate("/home");
  
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  
  
}

  return (
<Container>
  <div className="card">

    <div className="poster">
      <img src="venom.webp" alt="" />
    </div>

    <div className="content">
      
      <h1>{islogin? "Welcome Back,":"Create Account"}</h1>
      <p>{islogin?"Sign in to your account<":" Create an new account "} </p>

      <div className="inputBox">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>setemail(e.target.value)}
        />
      </div>

      <div className="inputBox">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e)=>setpassword(e.target.value)}
        />
      </div>
<div className="sentence">
      <span className="forgot">
        {islogin?"":"Crete a strong password "}
      </span></div>
      <p className="bottom">
        {islogin?"Don't have an account? ":" have an account?"}
        <span onClick={()=>setislogin(!islogin)}>
          {islogin ? " Sign Up" : " Login"}
        </span>
      </p>
      <button onClick={islogin ? login : signup}>
        {islogin ? "Sign In" : "Create Account"}
      </button>

      <button className="googleBtn" onClick={googlelogin}>
  Continue with Google
</button>

    </div>

  </div>
</Container>
  );
};

export default Login;

const Container = styled.div`
width:100vw;
height:100vh;
background:#14131d;

display:flex;
justify-content:center;
align-items:center;

font-family:Poppins,sans-serif;

.card{
    width:1500px;
    height:700px;

    background:#000000;

    border-radius:12px;

    display:flex;

    overflow:hidden;

    box-shadow:0 20px 50px rgba(0,0,0,.45);
}

.poster{
    width:600px;
}

.poster img{
    width:600px;
    height:100%;
    
}

.content{

    margin-left:0px;

    padding:60px 45px;
}

h1{

    color:white;
    font-size:40px;

    margin-bottom:8px;
}

.content p{

    color:#9e9e9e;

    margin-bottom:40px;
}

.inputBox{

    display:flex;

    flex-direction:column;

    margin-bottom:22px;
}
span{
  margin-bottom:0px;
}
label{

    color:white;

    margin-bottom:8px;

    font-size:14px;
}

input{

    height:48px;
  width: 600px;
    background:#000000;

    border:1px solid #ffffff;

    color:white;

    padding:0 18px;
  font-size: 18px;
    border-radius:5px;

    outline:none;
}
.sentence{
  width: 100%;
  height: 30px;
  padding: 0px;
  margin-bottom: 10px;
}
.forget{
 margin-bottom:0px;

}
input:focus{

    border-color:#ff0e0e;
}

.forgot{

    display:block;

    text-align:right;

    color:#9d9d9d;

   

    cursor:pointer;
}

button{

    width:100%;

    height:48px;

    border:none;

    border-radius:4px;

    background:#fffefe;

    color:black;

    font-size:16px;

    font-weight:600;

    cursor:pointer;

    transition:.3s;
}

button:hover{

    background:#000000;
    color: #ffffff;
  
    border: 2px solid white;
}

.bottom{

    text-align:center;

    margin-top:28px;

    color:#9d9d9d;
}

.bottom span{

    color:#ff002f;

    cursor:pointer;
}
.googleBtn{
    width:100%;
    height:48px;

    margin-top:20px;

    border:none;
    border-radius:4px;

    background:#fff;
    color:#000;

    font-size:16px;
    font-weight:600;

    cursor:pointer;
    transition:.3s;
}

.googleBtn:hover{
    background:#000;
    color:#fff;
    border:2px solid #fff;
}
`;