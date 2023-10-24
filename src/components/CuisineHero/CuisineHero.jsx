/* eslint-disable react/prop-types */
import { Box, Heading, Image } from "@chakra-ui/react";
import "./CuisineHero.css";

const CuisineHero = ({ chef }) => {
  return (
    <Box className="cuisine-hero">
      <Box className="hero-body">
        <Heading as="h1" fontSize={["2.5rem", "3rem"]} color="teal.300">
          {chef.name}
        </Heading>
        <p className="desc">
          hello my name is {chef?.name} i am three time master chef winner and a
          lot of award winner along with notional award. I love to cook.
        </p>
        <p>{chef.experience} years of experience</p>
        <p>{chef.recipes} recipes</p>
        <p>{chef.likes} Likes</p>
      </Box>
      <Box className="img-container">
        <Image
          w="300px"
          h="300px"
          objectFit="cover"
          rounded="full"
          border="7px solid teal"
          src={chef?.img}
          alt=""
        />
      </Box>
    </Box>
  );
};

export default CuisineHero;
