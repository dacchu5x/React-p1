import styled from "styled-components"
import Banner from "./components/Banner"
import Content from "./components/Content"
import Footer from "./components/Footer"
import { useState } from "react"
const Home = () => {
  const [loading, setloading] = useState(true)
  
  
  return (
    <>
        {loading && (
      <LoadingContainer>
        <Logo>
          <LetterD>D</LetterD>

          <LetterX>
            <LineOne />
            <LineTwo />
          </LetterX>
        </Logo>
      </LoadingContainer>
    )}

    <Main style={{ display: loading ? "none" : "block" }}>
   
     
       
  
      <Banner loading={loading} setloading={ setloading } />
      <Content/>
      <Footer/>
      </Main></>
  )
}

export default Home

const Main = styled.div` `

const LoadingContainer = styled.div`
width:100%;
height:100vh;
background:#000;
display:flex;
justify-content:center;
align-items:center;
overflow:hidden;
`;

const Logo = styled.div`
display:flex;
align-items:center;
gap:8px;
`;

const LetterD = styled.div`
font-size:140px;
font-weight:900;
font-family:'Poppins',sans-serif;
color:white;
`;

const LetterX = styled.div`
width:100px;
height:120px;
position:relative;
`;

const LineOne = styled.div`
position:absolute;
width:16px;
height:0;
background:#E50914;
border-radius:20px;
left:42px;
top:-40px;
transform:rotate(45deg);

animation:lineOne 1s forwards;

@keyframes lineOne{

0%{
height:0;
transform:translate(120px,-120px) rotate(45deg);
}

100%{
height:140px;
transform:translate(0,0) rotate(45deg);
}

}
`;

const LineTwo = styled.div`
position:absolute;
width:16px;
height:0;
background:#E50914;
border-radius:20px;
left:42px;
bottom:-40px;
transform:rotate(-45deg);

animation:lineTwo 1s forwards;

@keyframes lineTwo{

0%{
height:0;
transform:translate(120px,120px) rotate(-45deg);
}

100%{
height:140px;
transform:translate(0,0) rotate(-45deg);
}

}
`;