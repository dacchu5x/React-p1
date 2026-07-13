
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { db , auth} from "./firebase";
import { doc } from "firebase/firestore";
import { updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userid, setuserid] = useState("")
  const navigate = useNavigate()

   const editprofile = async ()=>{
  const firestoreadd = doc( db, "users" , userid.uid)

   await updateDoc(firestoreadd, 

  {
    name: name,
    email: email,
  }

   )

   navigate("/Profile")

   }

useEffect( ()=>{

    const unsubscribe =  onAuthStateChanged(auth,(user)=>{ 
    if (! user)
    return 
    
    setuserid(user)
    
    } )
    
    return ()=> unsubscribe()

},[])




  return (
    <Container>
      <Card>
        <Title>Edit Profile</Title>

        <Form>
          <InputGroup>
            <Label>Name</Label>

            <Input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <Label>Email</Label>

            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>

          <SaveButton onClick={ editprofile  }    >
            Save Changes
          </SaveButton>
        </Form>
      </Card>
    </Container>
  );
};

export default EditProfile;

import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: #0f1117;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const Card = styled.div`
  width: 650px;
  background: #181b22;
  border: 1px solid #2a2f3a;
  border-radius: 18px;
  padding: 35px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35);
`;

export const Title = styled.h2`
  color: #ffffff;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 30px;
  text-align: center;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  color: #b6bcc8;
  font-size: 14px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 600px;
  height: 52px;
  border-radius: 12px;
  border: 1px solid #323846;
  background: #10131a;
  color: white;
  font-size: 16px;
  padding: 0 18px;
  outline: none;
  transition: 0.25s;

  &::placeholder {
    color: #6f7785;
  }


`;

export const SaveButton = styled.button`
  width: 100%;
  height: 55px;
  margin-top: 10px;
  border: none;
  border-radius: 12px;
  background: #ffffff;
  color: #000000;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    transform: translateY(-2px);
    background: #1d2128;
    color: #ffffff;
    border: 2px solid white;
  }


`;