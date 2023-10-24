import { Box, SimpleGrid } from "@chakra-ui/react";
import "./Footer.css";
const Footer = () => {
  return (
    <Box as="footer" bgGradient="linear(to-b,#FFF2D8, transparent)">
      <Box
        maxW="1400px"
        mx="auto"
        py={["60px", null, "80px", "120px"]}
        px="8px"
        className="footer"
      >
        <SimpleGrid
          templateColumns={["repeat(2, 1fr)", null, null, "repeat(4, 1fr)"]}
          spacing="50px"
          className="top"
        >
          <Box className="item">
            <Box as="strong" fontSize={18}>
              {" "}
              Categories
            </Box>
            <Box>Biriani</Box>
            <Box>Spicy</Box>
            <Box>Drinks</Box>
            <Box>best rated</Box>
            <Box>chefs</Box>
          </Box>
          <Box className="item">
            <Box as="strong" fontSize={18}>
              Links
            </Box>
            <Box>FAQ</Box>
            <Box>Pages</Box>
            <Box>Stories</Box>
            <Box>Compare</Box>
            <Box>Cookies</Box>
          </Box>
          <Box className="item">
            <Box as="strong" fontSize={18}>
              About
            </Box>
            <Box>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde enim
              eos vitae blanditiis neque molestias itaque sequi, voluptatem
              voluptatum, error placeat magni? Rerum mollitia dignissimos quo
              magnam culpa quasi maiores.
            </Box>
          </Box>
          <Box className="item">
            <Box as="strong" fontSize={18}>
              Contact
            </Box>
            <Box>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              minus dolore tempora beatae modi sequi eligendi delectus, ea sed
              voluptate itaque similique quos doloremque quam aut numquam
              maxime. Officiis, atque.
            </Box>
          </Box>
        </SimpleGrid>
        <Box className="bottom">
          <Box className="left">
            <Box
              as="h4"
              fontSize="1.6rem"
              bgImg="https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&w=1600"
              bgSize="cover"
              bgPos="center"
              bgClip="text"
            >
              Chef&#39;s Kingdom
            </Box>
            <Box className="copyright">Copyright 2023. All Rights Reserved</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
