import "./CuisineCard.css";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";

const CuisinesCard = ({ recipeName, ingredients, img, method, ratings }) => {
  return (
    <div className="center-container">
      <div className="cuisineCard">
        <img className="cuisineCard-img" src={img} alt="" />
        <div className="cuisineCard-body">
          <div className="heading">
            <h4>{recipeName}</h4>
            <button>
              <FavoriteIcon sx={{ color: "red", fontSize: 30 }} />
            </button>
          </div>
          <p className="rating">
            <StarIcon sx={{ color: "#ffb413" }} /> {ratings}/5(100+)
          </p>
          <div className="ingredients">
            <h5>Ingredients: </h5>
            {ingredients.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div className="method">
            <h5>Method: </h5>
            <p>{method}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuisinesCard;
