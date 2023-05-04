import LazyLoad from "react-lazy-load";
import "./CuisineHero.css";

const CuisineHero = ({ chef }) => {
  console.log(chef);

  return (
    <div className="cuisine-hero">
      <div className="hero-body">
        <h1>{chef?.name}</h1>
        <p className="desc">
          hello my name is {chef?.name} i am three time master chef winner and
          a lot of award winner along with notional award. I love to cook.
        </p>
        <p>{chef?.experience} years of experience</p>
        <p>{chef?.recipes} recipes</p>
        <p>{chef?.likes} Likes</p>
      </div>
      <div className="img-container">
        <LazyLoad>
          <img src={chef?.img} alt="" />
        </LazyLoad>
      </div>
    </div>
  );
};

export default CuisineHero;
