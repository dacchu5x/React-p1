import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { IoPlay } from "react-icons/io5";

export const BASE_URL = "https://api.themoviedb.org/3/trending/movie/day";
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"

const Banner = ({loading, setloading}) => {
  const [movies, setMovies] = useState([]);
 
    const [index, setCurrentIndex] = useState(0);
    const [nextindex, setnextIndex] = useState(1);
      const [movie , setcurrentmovie] = useState(true)
      const [ currentindexvisibility , setcurrentindexvisibility ] = useState(true)
      const [ nextindexvisibility , setnextindexvisibility ] = useState(false)

    const[visibility,setvisibility]= useState(true)
  useEffect(() => {
    const fetchData = async () => {
     
      
      try {
      const response = await fetch(
  `${BASE_URL}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
);

        const data = await response.json();

        console.log(data);

        setMovies(data.results.slice(0, 7));
     setloading(false);
      } catch (error) {
        console.log(error);
        setloading(false);
      }

    };

    fetchData();
  }, []);


useEffect(() => {

  const interval = setInterval(() => {

    setcurrentmovie((prev) => {

      if (prev) {

      
        setcurrentindexvisibility(false);
        setnextindexvisibility(true);

        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 2) % 7);
        }, 500);

      } else {

      
        setcurrentindexvisibility(true);
        setnextindexvisibility(false);

        setTimeout(() => {
          setnextIndex((prev) => (prev + 2) % 7);
        }, 500);

      }

      return !prev;

    });

  }, 5000);

  return () => clearInterval(interval);

}, []);

  


const currentMovie = movies[index];
const nextmovie = movies[nextindex]
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Body>
    <Ban image= {`${IMAGE_BASE_URL}${currentMovie.backdrop_path}`} visibility ={currentindexvisibility}>
       <div className="overlay">
        
        <Title> 
         
            <div className="titlee">
          <h1>{currentMovie.title}</h1></div>

          <div className="overview">
          <p>{currentMovie.overview}</p> </div>

          <div className="rating">
         <span>{`Rating: ${currentMovie.vote_average}`}</span> <FaStar /> </div>

         <div className="button">
         <button> <IoPlay size={24} color="white" /> Watch Now</button></div>

           </Title> 
        </div>
    </Ban> 

     <Ban_t image= {`${IMAGE_BASE_URL}${nextmovie.backdrop_path}`} visibility ={nextindexvisibility}>
       
        <Title> 
         
            <div className="titlee">
          <h1>{nextmovie.title}</h1></div>

          <div className="overview">
          <p>{nextmovie.overview}</p> </div>

          <div className="rating">
         <span>{`Rating: ${nextmovie.vote_average}`}</span> <FaStar /> </div>

         <div className="button">
         <button> <IoPlay size={24} color="white" /> Watch Now</button></div>

           </Title>
    </Ban_t> 
    <Bottom> </Bottom>
    
    
    </Body>
  );
};

export default Banner;

const Body = styled.div`  background-color: #000000;
margin-bottom:0px;`

const Ban = styled.div` 
background-image: url(${(props) => props.image}); 
background-size: cover;
background-position: center;
background-color: #000000;
color: #ffffff;
width: 99.01vw;
position: relative;
height:750px;
opacity: ${(props) => (props.visibility ? "1" : "0")};
transition: opacity 0.5s linear;




&::before{
  content:"";
  position:absolute;
  top:0%;
  left:0%;
  width:100%;
  height:100%;
background: linear-gradient(
  90deg,
  #000000 10%,
  rgba(14,16,22,0) 100% );
  z-index: 3;

}




 
 `


const Ban_t = styled.div`
background-image: url(${(props) => props.image}); 
background-size: cover;
background-color: #fff;
background-position: center;
width: 99.0vw;
height:750px;
position:absolute;
z-index:2;
top:0;
left:0;
opacity: ${(props) => (props.visibility ? "1" : "0")};
transition: opacity 0.5s linear;

&::before{
  content:"";
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
background: linear-gradient(
  90deg,
  #000000 10%,
  rgba(14,16,22,0) 100% );
  z-index: 4;

}
`


 const Title = styled.div`
 width: 399px;
 height : 800px;
 color: white;
  z-index: 5;
  position:absolute;
  top: 38%;
  left: 9%;
 display:flex;
 flex-direction:column;
 gap: 20px;

.title{
width:100%;
height:300px;
display:flex;
align-items:start;
margin-top: 0px;
}
.overview{
  width:400px;
height:150px;
}
.rating{
width:200px;
height:30px;
}




 h1{

  margin-top: 0px;
 }

 .rating{
    display:flex;
    font-weight: 600;
    
    gap:6px;
    color:white;
}

.rating svg{
     color:#FFD700;
    font-size:18px;
}
p{
  font-size: 18px;
  font-weight: 200;
}
 h1{
  font-size: 42px;
 }


 button{
 color: white;
    width: 370px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 18px;
    border-radius: 12px;
    border: none;
    font-family: "Inter", sans-serif;
    font-weight: 900;
    letter-spacing: 1px;
    background: linear-gradient( 
      90deg,
       #138DF9 50%,
      #E20369 100%
     
    );
    transition: transform 0.3s ease;

    margin-top:20px;
    
    }
   
 button:hover{
      transform:scale(1.07);}
 `

 
 const Bottom = styled.div`   
 height:100px;
 width: 100%;
 position:absolute; 
 top:92%;
 left:0%;
 background-color: #000000;
 z-index: 5;
 background: linear-gradient(
 to top, 
 black 30%,
 transparent 100%
 )
 `