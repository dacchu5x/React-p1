import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import {
  FaHome,
  FaSearch,
  FaTv,
  FaGift,
  FaRunning,
  FaVideo,
  FaThLarge,
  FaUserCircle,
} from "react-icons/fa";
import { PiPopcornFill } from "react-icons/pi";
import { MdOutlineLiveTv } from "react-icons/md";
import { TbLayoutGrid } from "react-icons/tb";


const Header = () => {
  
  const navigate = useNavigate() 
  return (
   <Nav> 
    <div className="nav">
    <div className="logo">
    <h1 >Dx</h1>
    
</div>
   <div className="side">

   <div className="side1">
<div className="menu">
<FaHome  size={20}/> </div> <span className='mt'  onClick={()=>navigate("/home") }> Home </span> </div>

<div className="side1">
<div className="menu">
<FaSearch  size={20}/> </div>  <span className='mt'   onClick={()=> navigate("/search")
}>  Search</span>     </div>

<div className="side1">
<div className="menu">
<FaTv  size={20}/> </div><span className='mt' onClick={()=> navigate("/TV") }> TV  </span > </div>

<div className="side1">
<div className="menu">
<PiPopcornFill  size={20} /></div> <span className='mt' onClick={()=> navigate("Movie")}> Movie </span>  </div>

<div className="side1">
<div className="menu">
<TbLayoutGrid  size={20}/> </div> <span className='mt'  onClick={()=> navigate("Catageroy") }>Categories</span> </div>

<div className="side1">
<div className="menu">
<FaUserCircle  size={20} /></div> <span className='mt' onClick={()=> navigate("Profile") }>My Space</span> </div>


    
</div>  </div>  
       </Nav>
  )
}

export default Header


const Nav = styled.nav`





width:96px;
height:100vh;
 background: linear-gradient(
  90deg,
  #000000 0%,
  rgba(14,16,22,0) 100%
);

display:flex;
justify-content:center;
position: fixed;
top: 0;
left: 0;
z-index: 1000;
overflow:hidden;
transition:width 1.5s ease ;

.nav{
width:100%;
height:70%;
display:flex;
flex-direction:column;
align-items: start;
justify-content:space-between;
padding:20px 0;
padding-top:50px;
}

.side1{
    display:flex;
    align-items:center;
    height: 20px;
    width:100%;
    padding-left:32px;
    gap:18px;
color:grey
}


.side1:hover{

  color:white;
}



.menu{
width:24px;
display:flex;
justify-content:center;
align-items:center;
flex-shrink:0;
}

.mt{
opacity:0;

white-space:nowrap;

transition: transform 0.2s ease ;
cursor: pointer;
font-size:15px;
font-weight:500;
height: 10px;
}

.mt:hover{

transform:scale(1.2);

  
}



.logo{
width:4px;
height:30px;
margin-left:32px;
margin-bottom:70px;
color:white;
display:flex;
flex-direction:column;
cursor: none;
}

.logo h1{
font-size:29px;
margin-bottom:0px;
transition: transform 0.5s ease-in-out;

}
.logo h1:hover{
  transform:scale(1.3)
}

.logo p{
font-size:7px;
margin-top:0px;
margin-left:30px;

}
.side{
width:100%;

display:flex;
flex-direction:column;

gap:32px;
}

&:hover .mt{
opacity:1;

}

&:hover{
width:180px;
 background: linear-gradient(
  90deg,
  #000000 0%,
  rgba(14,16,22,0) 100%
);

}


`
