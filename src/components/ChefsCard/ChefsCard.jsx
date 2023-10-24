/* eslint-disable react/prop-types */
import { Link, Link as ReactRouterLink } from "react-router-dom";

import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { containerStyles } from "./styles";

const city = [
  "New York",
  "Paris, France",
  "Munic, Germany",
  "Madrid, Spain",
  "New York",
  "Paris, France",
  "Munic, Germany",
  "Madrid, Spain",
];

const ChefsCard = ({ id, name, img, experience, index }) => {
  return (
    <Box
      boxShadow="xs"
      bg="#030712"
      rounded="md"
      w="300px"
      px="14px"
      py="16px"
      position="relative"
      isolation="isolate"
      overflow="hidden"
      _before={containerStyles._before}
      _after={containerStyles._after}
    >
      <Box>
        <Image
          w={110}
          h={110}
          mx="auto"
          objectFit="cover"
          borderRadius="50%"
          src={img}
          alt="chef image"
          loading="lazy"
        />
      </Box>

      <Box textAlign="center" mt="10px">
        <Heading as="h6" color="gray.200" fontSize="1.6rem" fontWeight="500">
          {name}
        </Heading>
        <Text color="gray.300">{city[index]}</Text>
        <Text color="gray.300">{experience} years of experience</Text>

        <ChakraLink
          w="100%"
          display="inline-block"
          mt="16px"
          as={ReactRouterLink}
          to={`/chefs/${id}`}
        >
          <Link to={`chefs/${id}`}>
            <Button
              w="100%"
              colorScheme="teal"
              bgGradient="linear(to-r, teal.500, green.500)"
              _hover={{
                bgGradient: "linear(to-r, red.500, yellow.500)",
              }}
            >
              View My Recipes
            </Button>
          </Link>
        </ChakraLink>
      </Box>
    </Box>
  );
};

export default ChefsCard;
