import { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import styled from "styled-components";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";



const Profile = () => {
  const [userData, setUserData] = useState(null);
 const navigate = useNavigate()
const getuserdata = async (user) => {
  const docSnap = await getDoc(
    doc(db, "users", user.uid)
  );

  if (docSnap.exists()) {
    setUserData(docSnap.data());
  }
};

useEffect(() => {

  const unsubscribe = onAuthStateChanged(auth,(user)=>{  
  if(!user)
    return
    getuserdata(user)
}
  
  )
  
  return ()=> unsubscribe()

},[])

const logout = async ()=>{
 try{

    const log = signOut(auth)

    navigate("/")

 }
catch(error){
  alert(error)
}


}





return (
  <Container>
    <div className="profileCard">

     
      <div className="profileTop">

        <div className="imageBox">
         
         <img src={userData?.photo} alt="" />
      
          </div>

<div className="profileinfo">
         {console.log(userData?.name)}

        <h1>{userData?.name}</h1>

        <p className="email">
          {userData?.email}
        </p>  

        <button className="editBtn" onClick={()=>navigate("/editprofile")}>
          Edit Profile
        </button></div>

      </div>

      <div className="centercard">

      <div className="infoCard">

        <div className="row">
          <span>Name</span>
          <p>{userData?.name}</p>
        </div>

        <div className="row">
          <span>Email</span>
          <p>{userData?.email}</p>
        </div>

        <div className="row">
          <span>Joined</span>
          <p>July 2026</p>
        </div>

        <div className="row">
          <span>Last Login</span>
          <p>Today, 7:30 PM</p>
        </div>

      </div></div>

      

      <button className="logoutBtn" onClick={logout}>
        Logout
      </button>
     <button className="helpBtn">
       Help & Support
      </button>
    </div>
  </Container>



  )
}

export default Profile

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #111111;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Poppins, sans-serif;

  .profileCard {
    width: 99vw;
    height:99vh;
    background: #181818;

    border: 1px solid #2c2c2c;
    border-radius: 20px;

    padding: 0px;

    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  }

  .profileTop {
    width:99vw;
    display: flex;
    padding-top:50px;
   justify-content: center;
    align-items: center;
 gap:50px;
    margin-bottom: 45px;
  }

  .imageBox {
    position: relative;
   display: flex;
    width: 160px;
    height: 160px;
   border:2px solid white;
    margin-bottom: 20px;
    border-radius: 50%;
  }

  .imageBox img {
    width: 100%;
    height: 100%;

    border-radius: 50%;
    object-fit: cover;
  }

  .cameraBtn {
    position: absolute;

    bottom: 5px;
    right: 5px;

    width: 42px;
    height: 42px;

    border: none;
    border-radius: 50%;

    background: #262626;
    color: white;

    cursor: pointer;

    font-size: 18px;

    transition: .3s;
  }

  .cameraBtn:hover {
    background: #ffffff;
  }

  h1 {
    color: white;
    font-size: 38px;

    margin-bottom: 10px;
  }

  .email {
    color: #9b9b9b;

    font-size: 18px;

    margin-bottom: 28px;
  }

  .editBtn {
    width: 220px;
    height: 50px;

    border-radius: 30px;

    border: 1px solid #444;

    background: transparent;

    color: white;

    font-size: 17px;
    font-weight: 500;

    cursor: pointer;

    transition: .3s;
  }

  .editBtn:hover {
    background: white;
    color: black;
  }
.centercard{
  width: 100%;
  display: flex;
  justify-content: center;
}
  .infoCard {
    background: #1f1f1f;
  width:800px;
    border: 1px solid #303030;
    border-radius: 18px;

    overflow: hidden;

    margin-bottom: 40px;
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px 30px;

    border-bottom: 1px solid #303030;
  }

  .row:last-child {
    border-bottom: none;
  }

  .row span {
    color: #9f9f9f;
    font-size: 17px;
  }

  .row p {
    color: white;
    font-size: 18px;
    font-weight: 500;
  }

  .logoutBtn {
    width: 250px;
    height: 55px;
  position : absolute;
  top:5%;
  right:1%;
    border: none;
    border-radius: 14px;

    background: #fffcfd;

    color: #000000;
 margin: 0px;
    font-size: 18px;
    font-weight: 600;
    
    cursor: pointer;

    transition: .3s;
  }

  .logoutBtn:hover {
    background: #000000;
    border: 2px solid white ;
    color :white;
    transform: translateY(-2px);
  }
    .helpBtn {
    width: 250px;
    height: 55px;
  position : absolute;
  top:15%;
  right:1%;
    border: none;
    border-radius: 14px;
margin:0px;
    background: #2f2c2d;

    color: white;

    font-size: 18px;
    font-weight: 600;
    
    cursor: pointer;

    transition: .3s;
  }

  .helpBtn:hover {
     background: #000000;
    border: 2px solid white ;
    color :white;
    transform: translateY(-2px);
  }
`;