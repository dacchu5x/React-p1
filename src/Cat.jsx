import styled from "styled-components";

const categories = [
  {
    id: 1,
    title: "Action",
    image: "https://image.tmdb.org/t/p/original/fTrQsdMS2MUw00RnzH0r3JWHhts.jpg",
  },
  {
    id: 2,
    title: "Comedy",
    image: "https://image.tmdb.org/t/p/original/pSgXKPU5h6U89ipF7HBYajvYt7j.jpg",
  },
  {
    id: 3,
    title: "Drama",
    image: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
  },
  {
    id: 4,
    title: "Horror",
    image: "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Conjuring_poster.jpg",
  },
  {
    id: 5,
    title: "Romance",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963d?w=800",
  },
  {
    id: 6,
    title: "Sci-Fi",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800",
  },
  {
    id: 7,
    title: "Kids",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800",
  },
  {
    id: 8,
    title: "Anime",
    image: "https://images.unsplash.com/photo-1541562232579-512a21360020?w=800",
  },
  {
    id: 9,
    title: "Thriller",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
  },
  {
    id: 10,
    title: "Adventure",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
  },
  {
    id: 11,
    title: "Fantasy",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800",
  },
  {
    id: 12,
    title: "Crime",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
  },
  {
    id: 13,
    title: "Family",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800",
  },
  {
    id: 14,
    title: "Mystery",
    image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=800",
  },
  {
    id: 15,
    title: "War",
    image: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?w=800",
  },
  {
    id: 16,
    title: "Documentary",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800",
  },
  {
    id: 17,
    title: "History",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
  },
  {
    id: 18,
    title: "Sports",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800",
  },
  {
    id: 19,
    title: "Music",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
  },
  {
    id: 20,
    title: "Animation",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800",
  },
  {
    id: 21,
    title: "Biography",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800",
  },
  {
    id: 22,
    title: "Superhero",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800",
  },
  {
    id: 23,
    title: "Classic",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
  },
  {
    id: 24,
    title: "Trending",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800",
  },
  {
    id: 25,
    title: "TV Shows",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800",
  },
];

const Cat = () => {
  return (
    <Container>
      <h1>Categories</h1>

      <Grid>
        {categories.map((item) => (
          <Card key={item.id}>
            <img src={item.image} alt={item.title} />

            <Overlay />

            <Title>{item.title}</Title>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Cat

const Container = styled.div`
  background: #000;
  min-height: 100vh;
  padding: 40px 70px;

  h1 {
    color: white;
    font-size: 38px;
    margin-bottom: 35px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
`;

const Card = styled.div`
  position: relative;
  height: 180px;
  overflow: hidden;
  border-radius: 15px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.15)
  );
`;

const Title = styled.h2`
  position: absolute;
  bottom: 18px;
  left: 18px;
  color: white;
  font-size: 22px;
  font-weight: 600;
`;