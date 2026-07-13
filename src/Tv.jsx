import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import Footer from './components/Footer';
const IMAGE_BASE_URL = 
  "https://image.tmdb.org/t/p/original";

const TRENDING_TV =
  "https://api.themoviedb.org/3/trending/tv/week";

const POPULAR_TV =
  "https://api.themoviedb.org/3/tv/popular";

const TOP_RATED_TV =
  "https://api.themoviedb.org/3/tv/top_rated";

const AIRING_TODAY =
  "https://api.themoviedb.org/3/tv/airing_today";

const ON_THE_AIR =
  "https://api.themoviedb.org/3/tv/on_the_air";

const ACTION_ADVENTURE =
  "https://api.themoviedb.org/3/discover/tv?with_genres=10759";

const ANIMATION =
  "https://api.themoviedb.org/3/discover/tv?with_genres=16";

const COMEDY_TV =
  "https://api.themoviedb.org/3/discover/tv?with_genres=35";

const CRIME =
  "https://api.themoviedb.org/3/discover/tv?with_genres=80";

const DRAMA_TV =
  "https://api.themoviedb.org/3/discover/tv?with_genres=18";

const MYSTERY =
  "https://api.themoviedb.org/3/discover/tv?with_genres=9648";

const SCIFI_FANTASY =
  "https://api.themoviedb.org/3/discover/tv?with_genres=10765";

const Tv = () => {

    const [trendingtv, settrendingtv] = useState([]);

const [populartv, setpopulartv] = useState([]);

const [topratedtv, settopratedtv] = useState([]);

const [airingtoday, setairingtoday] = useState([]);

const [ontheair, setontheair] = useState([]);

const [actionadventure, setactionadventure] = useState([]);

const [animationtv, setanimationtv] = useState([]);

const [comedytv, setcomedytv] = useState([]);

const [crimetv, setcrimetv] = useState([]);

const [dramatv, setdramatv] = useState([]);

const [mysterytv, setmysterytv] = useState([]);

const [scififantasy, setscififantasy] = useState([]);

const [trendingtvslide, settrendingtvslide] = useState(0);

const [populartvslide, setpopulartvslide] = useState(0);

const [topratedtvslide, settopratedtvslide] = useState(0);

const [airingtodayslide, setairingtodayslide] = useState(0);

const [ontheairslide, setontheairslide] = useState(0);

const [actionadventureslide, setactionadventureslide] = useState(0);

const [animationtvslide, setanimationtvslide] = useState(0);

const [comedytvslide, setcomedytvslide] = useState(0);

const [crimetvslide, setcrimetvslide] = useState(0);

const [dramatvslide, setdramatvslide] = useState(0);

const [mysterytvslide, setmysterytvslide] = useState(0);

const [scififantasyslide, setscififantasyslide] = useState(0);

useEffect(() => {

  const fetchTV = async () => {

    try {

      
      const trendingtvobj = await fetch(`${TRENDING_TV}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
      const trendingtvjson = await trendingtvobj.json();
      settrendingtv(trendingtvjson.results);

      const populartvobj = await fetch(`${POPULAR_TV}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
      const populartvjson = await populartvobj.json();
      setpopulartv(populartvjson.results);

      const topratedtvobj = await fetch(`${TOP_RATED_TV}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
      const topratedtvjson = await topratedtvobj.json();
      settopratedtv(topratedtvjson.results);
   
      const airingtodayobj = await fetch(`${AIRING_TODAY}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
      const airingtodayjson = await airingtodayobj.json();
      setairingtoday(airingtodayjson.results);

      const ontheairobj = await fetch(`${ON_THE_AIR}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
      const ontheairjson = await ontheairobj.json();
      setontheair(ontheairjson.results);

      const actionobj = await fetch(`${ACTION_ADVENTURE}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
      const actionjson = await actionobj.json();
      setactionadventure(actionjson.results);

      const animationobj = await fetch(`${ANIMATION}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
      const animationjson = await animationobj.json();
      setanimationtv(animationjson.results);

      const comedyobj = await fetch(`${COMEDY_TV}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
      const comedyjson = await comedyobj.json();
      setcomedytv(comedyjson.results);

      const crimeobj = await fetch(`${CRIME}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
      const crimejson = await crimeobj.json();
      setcrimetv(crimejson.results);

      const dramaobj = await fetch(`${DRAMA_TV}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
      const dramajson = await dramaobj.json();
      setdramatv(dramajson.results);

      const mysteryobj = await fetch(`${MYSTERY}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
      const mysteryjson = await mysteryobj.json();
      setmysterytv(mysteryjson.results);

      const scifiobj = await fetch(`${SCIFI_FANTASY}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
      const scifijson = await scifiobj.json();
      setscififantasy(scifijson.results);

      console.log(trendingtvjson);
      console.log(populartvjson);
      console.log(topratedtvjson);
      console.log(airingtodayjson);
      console.log(ontheairjson);
      console.log(actionjson);
      console.log(animationjson);
      console.log(comedyjson);
      console.log(crimejson);
      console.log(dramajson);
      console.log(mysteryjson);
      console.log(scifijson);

    } catch (error) {

      console.log(error);

    }

  };

  fetchTV();

}, []);

  return (
   <Container> 
    <Semiboxone>
  <h1>Trending</h1>

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
</Semiboxone>


<Semiboxtwo>
  <h1>Popular</h1>

  <div className="popularmovies">

    <div className={`leftpopular ${populartvslide >= 0 ? "disabled" : ""}`}>

      <span
        onClick={() =>
          setpopulartvslide((prev) => {
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
      className="sliderpopular"
      style={{
        transform: `translateX(${populartvslide}px)`,
      }}
    >
      {populartv.map((show) => (

        <div key={show.id} className="popularposters">

          <img
            src={`${IMAGE_BASE_URL}${show.poster_path}`}
            alt={show.name}
          />

        </div>

      ))}
    </div>

    <div className={`rightpopular ${populartvslide <= -3050 ? "disabled" : ""}`}>

      <span
        onClick={() =>
          setpopulartvslide((prev) => {
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
  <h1>Top Rated</h1>

  <div className="topratedmovies">

    <div className={`lefttoprated ${topratedtvslide >= 0 ? "disabled" : ""}`}>

      <span
        onClick={() =>
          settopratedtvslide((prev) => {
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
      className="slidertoprated"
      style={{
        transform: `translateX(${topratedtvslide}px)`,
      }}
    >
      {topratedtv.map((show) => (

        <div key={show.id} className="topratedposters">

          <img
            src={`${IMAGE_BASE_URL}${show.poster_path}`}
            alt={show.name}
          />

        </div>

      ))}
    </div>

    <div className={`righttoprated ${topratedtvslide <= -3050 ? "disabled" : ""}`}>

      <span
        onClick={() =>
          settopratedtvslide((prev) => {
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
  <h1>Airing Today</h1>

  <div className="airingmovies">

    <div className={`leftairing ${airingtodayslide >= 0 ? "disabled" : ""}`}>

      <span
        onClick={() =>
          setairingtodayslide((prev) => {
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
      className="sliderairing"
      style={{
        transform: `translateX(${airingtodayslide}px)`,
      }}
    >
      {airingtoday.map((show) => (

        <div key={show.id} className="airingposters">

          <img
            src={`${IMAGE_BASE_URL}${show.poster_path}`}
            alt={show.name}
          />

        </div>

      ))}
    </div>

    <div className={`rightairing ${airingtodayslide <= -3050 ? "disabled" : ""}`}>

      <span
        onClick={() =>
          setairingtodayslide((prev) => {
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
  <h1>On The Air</h1>

  <div className="ontheairmovies">

    <div className={`leftontheair ${ontheairslide >= 0 ? "disabled" : ""}`}>

      <span
        onClick={() =>
          setontheairslide((prev) => {
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
      className="sliderontheair"
      style={{
        transform: `translateX(${ontheairslide}px)`,
      }}
    >
      {ontheair.map((show) => (

        <div key={show.id} className="ontheairposters">

          <img
            src={`${IMAGE_BASE_URL}${show.poster_path}`}
            alt={show.name}
          />

        </div>

      ))}
    </div>

    <div className={`rightontheair ${ontheairslide <= -3050 ? "disabled" : ""}`}>

      <span
        onClick={() =>
          setontheairslide((prev) => {
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
  <h1>Action & Adventure</h1>

  <div className="actionmovies">

    <div className={`leftaction ${actionadventureslide >= 0 ? "disabled" : ""}`}>

      <span
        onClick={() =>
          setactionadventureslide((prev) => {
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
        transform: `translateX(${actionadventureslide}px)`,
      }}
    >
      {actionadventure.map((show) => (

        <div key={show.id} className="actionposters">

          <img
            src={`${IMAGE_BASE_URL}${show.poster_path}`}
            alt={show.name}
          />

        </div>

      ))}
    </div>

    <div className={`rightaction ${actionadventureslide <= -3050 ? "disabled" : ""}`}>

      <span
        onClick={() =>
          setactionadventureslide((prev) => {
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

export default Tv

const Container = styled.div`
color:#ffffff;
background-color: #000000;
width:100%;
min-height:100%;`

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

.popularmovies{
    display:flex;
    gap:12px;
    align-items:center;
    overflow:hidden;
    position:relative;
    height:400px;
}

.popularmovies::before{
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

.popularmovies:hover::before{
opacity:1;
}

.popularmovies::after{
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

.popularmovies:hover::after{
opacity:1;
}

.leftpopular.disabled,
.rightpopular.disabled{
opacity:0 !important;
pointer-events:none;
}

.leftpopular{
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

.rightpopular{
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

.popularmovies:hover .leftpopular{
opacity:1;
}

.popularmovies:hover .rightpopular{
opacity:1;
}

.sliderpopular{
display:flex;
gap:12px;
align-items:center;
height:500px;
flex-shrink:0;
transition:transform .6s linear;
}

.popularposters{
width:230px;
height:320px;
transition:transform .4s ease;
}

.popularposters img{
width:100%;
height:100%;
object-fit:cover;
border-radius:10px;
display:block;
}

.popularposters:hover{
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

.topratedmovies{
    display:flex;
    gap:12px;
    align-items:center;
    overflow:hidden;
    position:relative;
    height:400px;
}

.topratedmovies::before{
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

.topratedmovies:hover::before{
opacity:1;
}

.topratedmovies::after{
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

.topratedmovies:hover::after{
opacity:1;
}

.lefttoprated.disabled,
.righttoprated.disabled{
opacity:0 !important;
pointer-events:none;
}

.lefttoprated{
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

.righttoprated{
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

.topratedmovies:hover .lefttoprated{
opacity:1;
}

.topratedmovies:hover .righttoprated{
opacity:1;
}

.slidertoprated{
display:flex;
gap:12px;
align-items:center;
height:500px;
flex-shrink:0;
transition:transform .6s linear;
}

.topratedposters{
width:230px;
height:320px;
transition:transform .4s ease;
}

.topratedposters img{
width:100%;
height:100%;
object-fit:cover;
border-radius:10px;
display:block;
}

.topratedposters:hover{
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

.airingmovies{
    display:flex;
    gap:12px;
    align-items:center;
    overflow:hidden;
    position:relative;
    height:400px;
}

.airingmovies::before{
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

.airingmovies:hover::before{
opacity:1;
}

.airingmovies::after{
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

.airingmovies:hover::after{
opacity:1;
}

.leftairing.disabled,
.rightairing.disabled{
opacity:0 !important;
pointer-events:none;
}

.leftairing{
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

.rightairing{
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

.airingmovies:hover .leftairing{
opacity:1;
}

.airingmovies:hover .rightairing{
opacity:1;
}

.sliderairing{
display:flex;
gap:12px;
align-items:center;
height:500px;
flex-shrink:0;
transition:transform .6s linear;
}

.airingposters{
width:230px;
height:320px;
transition:transform .4s ease;
}

.airingposters img{
width:100%;
height:100%;
object-fit:cover;
border-radius:10px;
display:block;
}

.airingposters:hover{
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

.ontheairmovies{
    display:flex;
    gap:12px;
    align-items:center;
    overflow:hidden;
    position:relative;
    height:400px;
}

.ontheairmovies::before{
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

.ontheairmovies:hover::before{
opacity:1;
}

.ontheairmovies::after{
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

.ontheairmovies:hover::after{
opacity:1;
}

.leftontheair.disabled,
.rightontheair.disabled{
opacity:0 !important;
pointer-events:none;
}

.leftontheair{
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

.rightontheair{
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

.ontheairmovies:hover .leftontheair{
opacity:1;
}

.ontheairmovies:hover .rightontheair{
opacity:1;
}

.sliderontheair{
display:flex;
gap:12px;
align-items:center;
height:500px;
flex-shrink:0;
transition:transform .6s linear;
}

.ontheairposters{
width:230px;
height:320px;
transition:transform .4s ease;
}

.ontheairposters img{
width:100%;
height:100%;
object-fit:cover;
border-radius:10px;
display:block;
}

.ontheairposters:hover{
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