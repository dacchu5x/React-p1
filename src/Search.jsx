import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <Container>

      <SearchBox>

        <FaSearch className="icon" />

        <input
          type="text"
          placeholder="Movies, shows and more"
        />

      </SearchBox>

    </Container>
  );
};

export default Search;

const Container = styled.div`
background:#000000;
min-height:100vh;
padding-top:30px;
`;

const SearchBox = styled.div`
height:70px;
width: 1200px;
background:#2b2d38;
border-radius:12px;
margin-left: 96px;
display:flex;
align-items:center;

padding:0 28px;

.icon{
color:#8e93a8;
font-size:25px;
margin-right:24px;
}

input{
width:100%;
background:transparent;
border:none;
outline:none;

color:#ffffff ;
font-size:20px;

}

input::placeholder{
color:#8e93a8;
}
`;