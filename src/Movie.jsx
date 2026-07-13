import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import Footer from './components/Footer';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"
const HORROR =
  "https://api.themoviedb.org/3/discover/movie?with_genres=27"

const ACTION =
  "https://api.themoviedb.org/3/discover/movie?with_genres=28"

const COMEDY =
  "https://api.themoviedb.org/3/discover/movie?with_genres=35"

const TRENDING =
  "https://api.themoviedb.org/3/trending/movie/week"

const SCIENCE =
  "https://api.themoviedb.org/3/discover/movie?with_genres=878"

const DRAMA =
  "https://api.themoviedb.org/3/discover/movie?with_genres=18"

const Movie = () => {
    const [horror, sethorror] = useState([]);
const [action, setaction] = useState([]);
const [comedy, setcomedy] = useState([]);
const [trending, settrending] = useState([]);
const [science, setscience] = useState([]);
const [drama, setdrama] = useState([]);

const [horrorslide, sethorrorslide] = useState(0);
const [actionslide, setactionslide] = useState(0);
const [comedyslide, setcomedyslide] = useState(0);
const [trendingslide, settrendingslide] = useState(0);
const [scienceslide, setscienceslide] = useState(0);
const [dramaslide, setdramaslide] = useState(0);

    useEffect(() => {

  const fetchMovies = async () => {

    try {

      
      const horrorobj = await fetch(`${HORROR}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
      const horrorjson = await horrorobj.json();
      sethorror(horrorjson.results);

      
      const actionobj = await fetch(`${ACTION}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
      const actionjson = await actionobj.json();
      setaction(actionjson.results);

      
      const comedyobj = await fetch(`${COMEDY}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
      const comedyjson = await comedyobj.json();
      setcomedy(comedyjson.results);

      
      const trendingobj = await fetch(`${TRENDING}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
      const trendingjson = await trendingobj.json();
      settrending(trendingjson.results);

      
      const scienceobj = await fetch(`${SCIENCE}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
      const sciencejson = await scienceobj.json();
      setscience(sciencejson.results);

      
      const dramaobj = await fetch(`${DRAMA}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
      const dramajson = await dramaobj.json();
      setdrama(dramajson.results);

      console.log(horrorjson);
      console.log(actionjson);
      console.log(comedyjson);
      console.log(trendingjson);
      console.log(sciencejson);
      console.log(dramajson);
    console.log(actionjson);
    console.log(import.meta.env.VITE_TMDB_API_KEY);
    }

    catch (error) {

      console.log(error);

    }

  };

  fetchMovies();

}, []);
  return (
 <Container>
    <Semiboxone>
  <h1>Action</h1>

  <div className="actionmovies">

    <div className={`leftaction ${actionslide >= 0 ? "disabled" : ""}`}>

      <span
        onClick={() =>
          setactionslide((prev) => {
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
      className="slideraction"
      style={{
        transform: `translateX(${actionslide}px)`,
      }}
    >
      {action.map((movie) => (

        <div key={movie.id} className="actionposters">

          <img
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
          />

        </div>

      ))}
    </div>

    <div className={`rightaction ${actionslide <= -3050 ? "disabled" : ""}`}>

      <span
        onClick={() =>
          setactionslide((prev) => {
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
</Semiboxone>

<Semiboxtwo>
  <h1>Comedy</h1>

  <div className="comedymovies">

    <div className={`leftcomedy ${comedyslide >= 0 ? "disabled" : ""}`}>

      <span
        onClick={() =>
          setcomedyslide((prev) => {
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
      className="slidercomedy"
      style={{
        transform: `translateX(${comedyslide}px)`,
      }}
    >
      {comedy.map((movie) => (

        <div key={movie.id} className="comedyposters">

          <img
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
          />

        </div>

      ))}
    </div>

    <div className={`rightcomedy ${comedyslide <= -3050 ? "disabled" : ""}`}>

      <span
        onClick={() =>
          setcomedyslide((prev) => {
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
  <h1>Horror</h1>

  <div className="horrormovies">

    <div className={`lefthorror ${horrorslide >= 0 ? "disabled" : ""}`}>

      <span
        onClick={() =>
          sethorrorslide((prev) => {
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
      className="sliderhorror"
      style={{
        transform: `translateX(${horrorslide}px)`,
      }}
    >
      {horror.map((movie) => (

        <div key={movie.id} className="horrorposters">

          <img
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
          />

        </div>

      ))}
    </div>

    <div className={`righthorror ${horrorslide <= -3050 ? "disabled" : ""}`}>

      <span
        onClick={() =>
          sethorrorslide((prev) => {
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
  <h1>Drama</h1>

  <div className="dramamovies">

    <div className={`leftdrama ${dramaslide >= 0 ? "disabled" : ""}`}>

      <span
        onClick={() =>
          setdramaslide((prev) => {
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
      className="sliderdrama"
      style={{
        transform: `translateX(${dramaslide}px)`,
      }}
    >
      {drama.map((movie) => (

        <div key={movie.id} className="dramaposters">

          <img
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
          />

        </div>

      ))}
    </div>

    <div className={`rightdrama ${dramaslide <= -3050 ? "disabled" : ""}`}>

      <span
        onClick={() =>
          setdramaslide((prev) => {
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
  <h1>Trending</h1>

  <div className="trendingmovies">

    <div className={`lefttrending ${trendingslide >= 0 ? "disabled" : ""}`}>

      <span
        onClick={() =>
          settrendingslide((prev) => {
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
        transform: `translateX(${trendingslide}px)`,
      }}
    >
      {trending.map((movie) => (

        <div key={movie.id} className="trendingposters">

          <img
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
          />

        </div>

      ))}
    </div>

    <div className={`righttrending ${trendingslide <= -3050 ? "disabled" : ""}`}>

      <span
        onClick={() =>
          settrendingslide((prev) => {
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


<Semiboxsix>
  <h1>Science Fiction</h1>

  <div className="sciencemovies">

    <div className={`leftscience ${scienceslide >= 0 ? "disabled" : ""}`}>

      <span
        onClick={() =>
          setscienceslide((prev) => {
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
      className="sliderscience"
      style={{
        transform: `translateX(${scienceslide}px)`,
      }}
    >
      {science.map((movie) => (

        <div key={movie.id} className="scienceposters">

          <img
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
          />

        </div>

      ))}
    </div>

    <div className={`rightscience ${scienceslide <= -3050 ? "disabled" : ""}`}>

      <span
        onClick={() =>
          setscienceslide((prev) => {
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
</Semiboxsix>
 <Footer/>
 </Container>
  )
}

export default Movie

const Container = styled.div`
background-color: #000000; 
`
const Semiboxone = styled.div`
color:#ffffff;
height:450px;
max-width:100%;
margin-left:96px;
position:relative;
z-index:2;

h1{
    margin-top:0;
}

.actionmovies{
    display:flex;
    gap:12px;
    align-items:center;
    overflow:hidden;
    position:relative;
    height:400px;
}

.actionmovies::before{
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

.actionmovies:hover::before{
opacity:1;
}

.actionmovies::after{
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

.actionmovies:hover::after{
opacity:1;
}

.leftaction.disabled,
.rightaction.disabled{
opacity:0 !important;
pointer-events:none;
}

.leftaction{
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

.rightaction{
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

.actionmovies:hover .leftaction{
opacity:1;
}

.actionmovies:hover .rightaction{
opacity:1;
}

.slideraction{
display:flex;
gap:12px;
align-items:center;
height:500px;
flex-shrink:0;
transition:transform .6s linear;
}

.actionposters{
width:230px;
height:320px;
transition:transform .4s ease;
}

.actionposters img{
width:100%;
height:100%;
object-fit:cover;
border-radius:10px;
display:block;
}

.actionposters:hover{
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

.comedymovies{
    display:flex;
    gap:12px;
    align-items:center;
    overflow:hidden;
    position:relative;
    height:400px;
}

.comedymovies::before{
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

.comedymovies:hover::before{
opacity:1;
}

.comedymovies::after{
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

.comedymovies:hover::after{
opacity:1;
}

.leftcomedy.disabled,
.rightcomedy.disabled{
opacity:0 !important;
pointer-events:none;
}

.leftcomedy{
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

.rightcomedy{
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

.comedymovies:hover .leftcomedy{
opacity:1;
}

.comedymovies:hover .rightcomedy{
opacity:1;
}

.slidercomedy{
display:flex;
gap:12px;
align-items:center;
height:500px;
flex-shrink:0;
transition:transform .6s linear;
}

.comedyposters{
width:230px;
height:320px;
transition:transform .4s ease;
}

.comedyposters img{
width:100%;
height:100%;
object-fit:cover;
border-radius:10px;
display:block;
}

.comedyposters:hover{
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

.horrormovies{
    display:flex;
    gap:12px;
    align-items:center;
    overflow:hidden;
    position:relative;
    height:400px;
}

.horrormovies::before{
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

.horrormovies:hover::before{
opacity:1;
}

.horrormovies::after{
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

.horrormovies:hover::after{
opacity:1;
}

.lefthorror.disabled,
.righthorror.disabled{
opacity:0 !important;
pointer-events:none;
}

.lefthorror{
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

.righthorror{
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

.horrormovies:hover .lefthorror{
opacity:1;
}

.horrormovies:hover .righthorror{
opacity:1;
}

.sliderhorror{
display:flex;
gap:12px;
align-items:center;
height:500px;
flex-shrink:0;
transition:transform .6s linear;
}

.horrorposters{
width:230px;
height:320px;
transition:transform .4s ease;
}

.horrorposters img{
width:100%;
height:100%;
object-fit:cover;
border-radius:10px;
display:block;
}

.horrorposters:hover{
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

.dramamovies{
    display:flex;
    gap:12px;
    align-items:center;
    overflow:hidden;
    position:relative;
    height:400px;
}

.dramamovies::before{
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

.dramamovies:hover::before{
opacity:1;
}

.dramamovies::after{
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

.dramamovies:hover::after{
opacity:1;
}

.leftdrama.disabled,
.rightdrama.disabled{
opacity:0 !important;
pointer-events:none;
}

.leftdrama{
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

.rightdrama{
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

.dramamovies:hover .leftdrama{
opacity:1;
}

.dramamovies:hover .rightdrama{
opacity:1;
}

.sliderdrama{
display:flex;
gap:12px;
align-items:center;
height:500px;
flex-shrink:0;
transition:transform .6s linear;
}

.dramaposters{
width:230px;
height:320px;
transition:transform .4s ease;
}

.dramaposters img{
width:100%;
height:100%;
object-fit:cover;
border-radius:10px;
display:block;
}

.dramaposters:hover{
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

const Semiboxsix = styled.div`
color:#ffffff;
height:450px;
max-width:100%;
margin-left:96px;
position:relative;
z-index:2;

h1{
    margin-top:0;
}

.sciencemovies{
    display:flex;
    gap:12px;
    align-items:center;
    overflow:hidden;
    position:relative;
    height:400px;
}

.sciencemovies::before{
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

.sciencemovies:hover::before{
opacity:1;
}

.sciencemovies::after{
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

.sciencemovies:hover::after{
opacity:1;
}

.leftscience.disabled,
.rightscience.disabled{
opacity:0 !important;
pointer-events:none;
}

.leftscience{
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

.rightscience{
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

.sciencemovies:hover .leftscience{
opacity:1;
}

.sciencemovies:hover .rightscience{
opacity:1;
}

.sliderscience{
display:flex;
gap:12px;
align-items:center;
height:500px;
flex-shrink:0;
transition:transform .6s linear;
}

.scienceposters{
width:230px;
height:320px;
transition:transform .4s ease;
}

.scienceposters img{
width:100%;
height:100%;
object-fit:cover;
border-radius:10px;
display:block;
}

.scienceposters:hover{
transform:scale(1.1);
}
`;