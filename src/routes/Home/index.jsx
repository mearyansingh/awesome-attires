// import React from "react";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    id: 1,
    title: "Hats",
    route: "shop/hats",
    imageUrl:
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2008&q=80E",
  },
  {
    id: 2,
    title: "Jackets",
    route: "shop/jackets",
    imageUrl:
      "https://images.pexels.com/photos/7679725/pexels-photo-7679725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "Sneakers",
    route: "shop/sneakers",
    imageUrl:
      "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 4,
    title: "Mens",
    route: "shop/mens",
    imageUrl:
      "https://images.pexels.com/photos/4980363/pexels-photo-4980363.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 5,
    title: "Womens",
    route: "shop/womens",
    imageUrl:
      "https://images.pexels.com/photos/15781480/pexels-photo-15781480/free-photo-of-brunette-relaxing-with-rose-on-chair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

function Home() {

  const navigate = useNavigate();

  return (
    <Container>
      <div className="categories-container">
        {categories.map(({ title, id, imageUrl, route }) => (
          <div
            key={id}
            className="category-container"
            onClick={() => navigate(route)}
          >
            {/* image */}
            <div
              className="background-image"
              style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="category-body-container">
              <h2>{title}</h2>
              <p className="mb-0">shop now</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
export default Home;
