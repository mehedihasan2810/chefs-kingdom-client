import "./CuisineCard.css";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { toast } from "react-toastify";
import { useState } from "react";

const CuisinesCard = ({ recipeName, ingredients, img, method, ratings }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleFavorites = () => {
    // *show toast
    toast.success("Succesfully added to favorites", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });

    setIsDisabled(true);
  };

  return (
    <div className="center-container">
      <div className="cuisineCard">
        <img className="cuisineCard-img" src={img} alt="" />
        <div className="cuisineCard-body">
          <div className="heading">
            <h4>{recipeName}</h4>
            <button
              className="disabled"
              disabled={isDisabled}
              onClick={handleFavorites}
            >
              <FavoriteIcon
                sx={{
                  color: isDisabled ? "rgba(255, 0, 0, 0.238)" : "red",
                  fontSize: 30,
                }}
              />
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
