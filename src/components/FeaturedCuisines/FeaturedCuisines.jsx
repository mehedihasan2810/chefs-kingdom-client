import { Link } from "react-router-dom";
import "./FeaturedCuisines.css";

const FeaturedCuisines = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Coat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Skirt",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Hat",
      oldPrice: 19,
      price: 12,
    },
  ];

  return (
    <div className="center-container">
    <div className="featuredProducts">
      <div className="top">
        <h1> products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          molestiae tempora ad, enim assumenda consequatur harum tempore odio
          nulla omnis nostrum ratione nemo quisquam voluptatum vitae cupiditate.
          Voluptatum, dicta quis.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => {
          return (
            <Link key={item.id} className="link" to='/'>
            <div className="card">
              <div className="image">
                {item.isNew && <span>New Season</span>}
                <img src={item.img} alt="" className="mainImage" />
                <img src={item.img2} alt="" className="secondImage" />
              </div>
              <h2>{item.title}</h2>
              <div className="prices">
                <h3>${item.oldPrice}</h3> 
                <h3>${item.price}</h3> 
                </div>  
            </div>
          </Link>
          )
        })}
      </div>
    </div>
    </div>
  );
};

export default FeaturedCuisines;
