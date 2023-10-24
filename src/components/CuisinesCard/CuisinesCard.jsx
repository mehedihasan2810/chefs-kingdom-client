/* eslint-disable react/prop-types */
import "./CuisineCard.css";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { toast } from "react-toastify";
import { useState } from "react";
import { Box, Heading, Image } from "@chakra-ui/react";

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
    <Box className="center-container">
      <Box className="cuisineCard">
        <Image
          className="cuisineCard-img"
          src={img}
          alt={recipeName}
          height={200}
        />
        <Box className="cuisineCard-body">
          <Box className="heading">
            <Heading color="teal.400" fontSize="1.5rem" fontWeight="500">
              {recipeName}
            </Heading>
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
          </Box>
          <p className="rating">
            <StarIcon sx={{ color: "#ffb413" }} /> {ratings}/5(100+)
          </p>
          <Box className="ingredients">
            <h5>Ingredients: </h5>
            {ingredients.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </Box>
          <Box className="method">
            <h5>Method: </h5>
            <p>{method}</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CuisinesCard;
