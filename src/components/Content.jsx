import  { useState, useEffect } from 'react'
import styled from 'styled-components'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"
const URL_NEW_STREAM = "https://api.themoviedb.org/3/movie/now_playing"
const TOP_MOVIES = "https://api.themoviedb.org/3/movie/top_rated"
const SPORTS ="https://api.themoviedb.org/3/discover/tv"
const COMEDY ="https://api.themoviedb.org/3/discover/movie"
const TRENDING_TV =
  "https://api.themoviedb.org/3/trending/tv/week";



const Content = () => {

const[newmovie,setnewmovies] = useState([])
const [topmovie , settopmovie] = useState([])
const [sport , setsport] = useState([])
const [comedy , setcomedy] = useState([])
const [topmovieslide , settopmovieslide] = useState(0)
const [comedymovieslide , setcomedymovieslide] = useState(0)
const [sportsmovieslide , setsportsmovieslide] = useState(0)
const [tvmovieslide , settvmovieslide] = useState(0)
 const [trendingtv, settrendingtv] = useState([]);
const [trendingtvslide, settrendingtvslide] = useState(0);

const [slide , setslide] = useState(0)
const [transforms , settransform] = useState(true)
useEffect( () => {

const fetchnewmovie = async()=>{

    try{
 
 const newmovieobj = await fetch(`${URL_NEW_STREAM}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
 const newmoviejson = await newmovieobj.json()
 
 setnewmovies(newmoviejson.results) 

 
 console.log(newmoviejson)


const topmovies = await fetch(`${TOP_MOVIES}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
const topmoviejson = await topmovies.json() 

settopmovie(topmoviejson.results)

console.log(topmoviejson)


const sportss = await fetch(`${SPORTS}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
const sportsjson = await sportss.json()

setsport(sportsjson.results)

console.log(sportsjson)

const comedyobj = await fetch(`${COMEDY}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
      const comedyjson = await comedyobj.json();
      setcomedy(comedyjson.results);

const trendingtvobj = await fetch(`${TRENDING_TV}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
      const trendingtvjson = await trendingtvobj.json();
      settrendingtv(trendingtvjson.results);





}
  
catch(error){

console.log( error  ) 
}
 
}

 
 
 
fetchnewmovie()

} ,[])


  return (
   <Container>
    
<Semibox>
  <h1 className="contenttitle">New Stream</h1>

  <div className="newmovies">

    <div className={`left ${slide >= 0 ? "disabled" : ""}`}>

      <span
        onClick={() =>
          setslide((prev) => {
            if (prev >= 0) {
              settransform(false);
              return prev;
            }

            settransform(true);
            return prev + 1080;
          })
        }
      >
        <HiOutlineChevronLeft size={85} color="white" />
      </span>

    </div>

    <div
      className="slider"
      style={{
        transform: `translateX(${slide}px)`,
      }}
    >
      {newmovie.map((movie) => (

        <div key={movie.id} className="posters">

          <img
            className="poster"
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
          />

        </div>

      ))}
    </div>

    <div className={`right ${slide <= -3050 ? "disabled" : ""}`}>

      <span
        onClick={() =>
          setslide((prev) => {
            if (prev < -3100) {
              settransform(false);
              return prev;
            }

            settransform(true);
            return prev - 1080;
          })
        }
      >
        <HiOutlineChevronRight size={85} color="white" />
      </span>

    </div>

  </div>
</Semibox>

<Semiboxtwo>
  <h1>Top 10</h1>

  <div className="topmovieposters">

    <div className={`lefttwo ${topmovieslide >= 0 ? "disabled" : ""}`}>

      <span
        onClick={() =>
          settopmovieslide((prev) => {
            if (prev >= 0) {
              return prev;
            }

            return prev + 1080;
          })
        }
      >
        <HiOutlineChevronLeft size={85} color="white" />
      </span>

    </div>

    <div
      className="slidertwo"
      style={{
        transform: `translateX(${topmovieslide}px)`,
      }}
    >
      {topmovie.map((topmov) => (

        <div key={topmov.id} className="topmovieposter">

          <img
            src={`${IMAGE_BASE_URL}${topmov.poster_path}`}
            alt={topmov.title}
          />

        </div>

      ))}
    </div>

    <div className={`righttwo ${topmovieslide <= -3050 ? "disabled" : ""}`}>

      <span
        onClick={() =>
          settopmovieslide((prev) => {
            if (prev < -3100) {
              return prev;
            }

            return prev - 1080;
          })
        }
      >
        <HiOutlineChevronRight size={85} color="white" />
      </span>

    </div>

  </div>
</Semiboxtwo>





<Semiboxthree>
  <h1>Comedy</h1>

  <div className="comedymovieposters">

    <div className={`leftthree ${comedymovieslide >= 0 ? "disabled" : ""}`}>

      <span
        onClick={() =>
          setcomedymovieslide((prev) => {
            if (prev >= 0) {
              return prev;
            }

            return prev + 1080;
          })
        }
      >
        <HiOutlineChevronLeft size={85} color="white" />
      </span>

    </div>

    <div
      className="sliderthree"
      style={{
        transform: `translateX(${comedymovieslide}px)`,
      }}
    >
      {comedy.map((topmov) => (

        <div
          key={topmov.id}
          className="comedymovieposter"
        >

          <img
            src={`${IMAGE_BASE_URL}${topmov.poster_path}`}
            alt={topmov.title}
          />

        </div>

      ))}
    </div>

    <div className={`rightthree ${comedymovieslide <= -3050 ? "disabled" : ""}`}>

      <span
        onClick={() =>
          setcomedymovieslide((prev) => {
            if (prev < -3100) {
              return prev;
            }

            return prev - 1080;
          })
        }
      >
        <HiOutlineChevronRight size={85} color="white" />
      </span>

    </div>

  </div>
</Semiboxthree>

<Semiboxfour>
  <h1>Sports</h1>

  <div className="sportsmovieposters">

    <div className={`leftfour ${sportsmovieslide >= 0 ? "disabled" : ""}`}>

      <span
        onClick={() =>
          setsportsmovieslide((prev) => {
            if (prev >= 0) {
              return prev;
            }

            return prev + 1080;
          })
        }
      >
        <HiOutlineChevronLeft size={85} color="white" />
      </span>

    </div>

    <div
      className="sliderfour"
      style={{
        transform: `translateX(${sportsmovieslide}px)`,
      }}
    >
      {sport.map((topmov) => (

        <div
          key={topmov.id}
          className="sportsmovieposter"
        >

          <img
            src={`${IMAGE_BASE_URL}${topmov.poster_path}`}
            alt={topmov.name || topmov.title}
          />

        </div>

      ))}
    </div>

    <div className={`rightfour ${sportsmovieslide <= -3050 ? "disabled" : ""}`}>

      <span
        onClick={() =>
          setsportsmovieslide((prev) => {
            if (prev < -3100) {
              return prev;
            }

            return prev - 1080;
          })
        }
      >
        <HiOutlineChevronRight size={85} color="white" />
      </span>

    </div>

  </div>
</Semiboxfour>

<Semiboxfive>
  <h1>TV Shows</h1>

   <div className="trendingmovies">

   <div className={`lefttrending ${trendingtvslide >= 0 ? "disabled" : ""}`}>
   
         <span
           onClick={() =>
             settrendingtvslide((prev) => {
               if (prev >= 0) {
                 return prev;
               }
   
               return prev + 1080;
             })
           }
         >
           <HiOutlineChevronLeft size={85} color="white" />
         </span>
   
       </div>
   
       <div
         className="slidertrending"
         style={{
           transform: `translateX(${trendingtvslide}px)`,
         }}
       >
         {trendingtv.map((show) => (
   
           <div key={show.id} className="trendingposters">
   
             <img
               src={`${IMAGE_BASE_URL}${show.poster_path}`}
               alt={show.name}
             />
   
           </div>
   
         ))}
       </div>
   
       <div className={`righttrending ${trendingtvslide <= -3050 ? "disabled" : ""}`}>
   
         <span
           onClick={() =>
             settrendingtvslide((prev) => {
               if (prev < -3100) {
                 return prev;
               }
   
               return prev - 1080;
             })
           }
         >
           <HiOutlineChevronRight size={85} color="white" />
         </span>
   
       </div>
   
     </div>
</Semiboxfive>
    
     </Container>

 
)
}

export default Content

const Container = styled.div`  
max-width: 100%;
background-color: #000000;
min-height:100vh;
margin-top:0px;

`

const Semibox = styled.div`
color:#ffffff;
height:450px;
max-width:100%;
margin-left:96px;
position:relative;
z-index:2;

h1{
    margin-top:10px;
}

.newmovies{
    display:flex;
    gap:12px;
    align-items:center;
    overflow:hidden;
    position:relative;
    height:400px;
}

.newmovies::before{
content:"";
width:190px;
height:400px;
background:linear-gradient(
to right,
black -10%,
transparent 100%
);
position:absolute;
top:20px;
left:0;
z-index:1;
opacity:0;
transition:.4s;
pointer-events:none;
}

.newmovies:hover::before{
opacity:1;
}

.newmovies::after{
content:"";
width:190px;
height:400px;
background:linear-gradient(
to left,
black -10%,
transparent 100%
);
position:absolute;
top:20px;
right:0;
z-index:1;
opacity:0;
transition:.4s;
pointer-events:none;
}

.newmovies:hover::after{
opacity:1;
}

.left.disabled,
.right.disabled{
opacity:0 !important;
pointer-events:none;
}

.left{
z-index:2;
width:190px;
height:320px;
position:absolute;
left:0;
top:40px;
display:flex;
align-items:center;
opacity:0;
transition:opacity .5s ease;
}

.right{
z-index:2;
width:190px;
height:320px;
position:absolute;
right:0;
top:40px;
display:flex;
justify-content:end;
align-items:center;
opacity:0;
transition:opacity .5s ease;
}

.newmovies:hover .left{
opacity:1;
}

.newmovies:hover .right{
opacity:1;
}

.slider{
display:flex;
gap:12px;
align-items:center;
height:500px;
flex-shrink:0;
transition:transform .6s linear;
}

.posters{
width:230px;
height:320px;
transition:transform .4s ease;
}

.posters img{
width:100%;
height:100%;
object-fit:cover;
border-radius:10px;
display:block;
}

.posters:hover{
transform:scale(1.1);
}
`;
const Semiboxtwo = styled.div`
color:#ffffff;
height:450px;
max-width:100%;
margin-left:96px;
position:relative;
z-index:2;

h1{
    margin-top:0;
}

.topmovieposters{
    display:flex;
    gap:12px;
    align-items:center;
    overflow:hidden;
    position:relative;
    height:400px;
}

.topmovieposters::before{
content:"";
width:190px;
height:400px;
background:linear-gradient(
to right,
black -10%,
transparent 100%
);
position:absolute;
top:20px;
left:0;
z-index:1;
opacity:0;
transition:.4s;
pointer-events:none;
}

.topmovieposters:hover::before{
opacity:1;
}

.topmovieposters::after{
content:"";
width:190px;
height:400px;
background:linear-gradient(
to left,
black -10%,
transparent 100%
);
position:absolute;
top:20px;
right:0;
z-index:1;
opacity:0;
transition:.4s;
pointer-events:none;
}

.topmovieposters:hover::after{
opacity:1;
}

.lefttwo.disabled,
.righttwo.disabled{
opacity:0 !important;
pointer-events:none;
}

.lefttwo{
z-index:2;
width:190px;
height:320px;
position:absolute;
left:0;
top:40px;
display:flex;
align-items:center;
opacity:0;
transition:opacity .5s ease;
}

.righttwo{
z-index:2;
width:190px;
height:320px;
position:absolute;
right:0;
top:40px;
display:flex;
justify-content:end;
align-items:center;
opacity:0;
transition:opacity .5s ease;
}

.topmovieposters:hover .lefttwo{
opacity:1;
}

.topmovieposters:hover .righttwo{
opacity:1;
}

.slidertwo{
display:flex;
gap:12px;
align-items:center;
height:500px;
flex-shrink:0;
transition:transform .6s linear;
}

.topmovieposter{
width:230px;
height:320px;
transition:transform .4s ease;
}

.topmovieposter img{
width:100%;
height:100%;
object-fit:cover;
border-radius:10px;
display:block;
}

.topmovieposter:hover{
transform:scale(1.1);
}
`;

     
const Semiboxthree = styled.div`
color:#ffffff;
height:450px;
max-width:100%;
margin-left:96px;
position:relative;
z-index:2;

h1{
    margin-top:0;
}

.comedymovieposters{
    display:flex;
    gap:12px;
    align-items:center;
    overflow:hidden;
    position:relative;
    height:400px;
}

.comedymovieposters::before{
content:"";
width:190px;
height:400px;
background:linear-gradient(
to right,
black -10%,
transparent 100%
);
position:absolute;
top:20px;
left:0;
z-index:1;
opacity:0;
transition:.4s;
pointer-events:none;
}

.comedymovieposters:hover::before{
opacity:1;
}

.comedymovieposters::after{
content:"";
width:190px;
height:400px;
background:linear-gradient(
to left,
black -10%,
transparent 100%
);
position:absolute;
top:20px;
right:0;
z-index:1;
opacity:0;
transition:.4s;
pointer-events:none;
}

.comedymovieposters:hover::after{
opacity:1;
}

.leftthree.disabled,
.rightthree.disabled{
opacity:0 !important;
pointer-events:none;
}

.leftthree{
z-index:2;
width:190px;
height:320px;
position:absolute;
left:0;
top:40px;
display:flex;
align-items:center;
opacity:0;
transition:opacity .5s ease;
}

.rightthree{
z-index:2;
width:190px;
height:320px;
position:absolute;
right:0;
top:40px;
display:flex;
justify-content:end;
align-items:center;
opacity:0;
transition:opacity .5s ease;
}

.comedymovieposters:hover .leftthree{
opacity:1;
}

.comedymovieposters:hover .rightthree{
opacity:1;
}

.sliderthree{
display:flex;
gap:12px;
align-items:center;
height:500px;
flex-shrink:0;
transition:transform .6s linear;
}

.comedymovieposter{
width:230px;
height:320px;
transition:transform .4s ease;
}

.comedymovieposter img{
width:100%;
height:100%;
object-fit:cover;
border-radius:10px;
display:block;
}

.comedymovieposter:hover{
transform:scale(1.1);
}
`;
const Semiboxfour = styled.div`
color:#ffffff;
height:450px;
max-width:100%;
margin-left:96px;
position:relative;
z-index:2;

h1{
    margin-top:0;
}

.sportsmovieposters{
    display:flex;
    gap:12px;
    align-items:center;
    overflow:hidden;
    position:relative;
    height:400px;
}

.sportsmovieposters::before{
content:"";
width:190px;
height:400px;
background:linear-gradient(
to right,
black -10%,
transparent 100%
);
position:absolute;
top:20px;
left:0;
z-index:1;
opacity:0;
transition:.4s;
pointer-events:none;
}

.sportsmovieposters:hover::before{
opacity:1;
}

.sportsmovieposters::after{
content:"";
width:190px;
height:400px;
background:linear-gradient(
to left,
black -10%,
transparent 100%
);
position:absolute;
top:20px;
right:0;
z-index:1;
opacity:0;
transition:.4s;
pointer-events:none;
}

.sportsmovieposters:hover::after{
opacity:1;
}

.leftfour.disabled,
.rightfour.disabled{
opacity:0 !important;
pointer-events:none;
}

.leftfour{
z-index:2;
width:190px;
height:320px;
position:absolute;
left:0;
top:40px;
display:flex;
align-items:center;
opacity:0;
transition:opacity .5s ease;
}

.rightfour{
z-index:2;
width:190px;
height:320px;
position:absolute;
right:0;
top:40px;
display:flex;
justify-content:end;
align-items:center;
opacity:0;
transition:opacity .5s ease;
}

.sportsmovieposters:hover .leftfour{
opacity:1;
}

.sportsmovieposters:hover .rightfour{
opacity:1;
}

.sliderfour{
display:flex;
gap:12px;
align-items:center;
height:500px;
flex-shrink:0;
transition:transform .6s linear;
}

.sportsmovieposter{
width:230px;
height:320px;
transition:transform .4s ease;
}

.sportsmovieposter img{
width:100%;
height:100%;
object-fit:cover;
border-radius:10px;
display:block;
}

.sportsmovieposter:hover{
transform:scale(1.1);
}
`;


const Semiboxfive = styled.div`
color:#ffffff;
height:450px;
max-width:100%;
margin-left:96px;
position:relative;
z-index:2;

h1{
    margin-top:0;
}

.trendingmovies{
    display:flex;
    gap:12px;
    align-items:center;
    overflow:hidden;
    position:relative;
    height:400px;
}

.trendingmovies::before{
content:"";
width:190px;
height:400px;
background:linear-gradient(
to right,
black -10%,
transparent 100%
);
position:absolute;
top:20px;
left:0;
z-index:1;
opacity:0;
transition:.4s;
pointer-events:none;
}

.trendingmovies:hover::before{
opacity:1;
}

.trendingmovies::after{
content:"";
width:190px;
height:320px;
background:linear-gradient(
to left,
black -10%,
transparent 100%
);
position:absolute;
top:20px;
right:0;
z-index:1;
opacity:0;
transition:.4s;
pointer-events:none;
}

.trendingmovies:hover::after{
opacity:1;
}

.lefttrending.disabled,
.righttrending.disabled{
opacity:0 !important;
pointer-events:none;
}

.lefttrending{
z-index:2;
width:190px;
height:320px;
position:absolute;
left:0;
top:40px;
display:flex;
align-items:center;
opacity:0;
transition:opacity .5s ease;
}

.righttrending{
z-index:2;
width:190px;
height:320px;
position:absolute;
right:0;
top:40px;
display:flex;
justify-content:end;
align-items:center;
opacity:0;
transition:opacity .5s ease;
}

.trendingmovies:hover .lefttrending{
opacity:1;
}

.trendingmovies:hover .righttrending{
opacity:1;
}

.slidertrending{
display:flex;
gap:12px;
align-items:center;
height:500px;
flex-shrink:0;
transition:transform .6s linear;
}

.trendingposters{
width:230px;
height:320px;
transition:transform .4s ease;
}

.trendingposters img{
width:100%;
height:100%;
object-fit:cover;
border-radius:10px;
display:block;
}

.trendingposters:hover{
transform:scale(1.1);
}
`;