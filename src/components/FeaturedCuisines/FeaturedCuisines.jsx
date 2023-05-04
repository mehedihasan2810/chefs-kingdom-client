import { Link } from "react-router-dom";
import "./FeaturedCuisines.css";

const FeaturedCuisines = () => {
  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1516684732162-798a0062be99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      img2: "https://images.unsplash.com/photo-1577110058859-74547db40bc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      name: "rice",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Kabab",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Pasta",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80",
      name: "Pizza",
    },
  ];

  return (
    <div className="center-container">
      <div className="featuredProducts">
        <div className="top">
          <h1>Featured Cuisines</h1>
          <p>
            This is some featured cuisines. which from best chefs in the world
            like gordon ramsy. u can buy some of them if u like actually we r
            here to sell so u should buy
          </p>
        </div>
        <div className="bottom">
          {data.map((item) => {
            return (
              <Link key={item.id} className="link" to="/">
                <div className="card">
                  <div className="image">
                    <img src={item.img} alt="" className="mainImage" />
                    {item.img2 && (
                      <img src={item.img2} alt="" className="secondImage" />
                    )}
                  </div>
                  <h2>{item.name}</h2>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCuisines;
