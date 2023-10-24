import { useLoaderData } from "react-router-dom";
import ChefsCard from "../ChefsCard/ChefsCard";
import { Box, Center, Heading, SimpleGrid, Text } from "@chakra-ui/react";

const chef1 = {
  id: 2,
  name: "Gordon Ramsey",
  img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=1954&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  experience: 3,
  recipes: 15,
  likes: 10,
};
const chef2 = {
  id: 3,
  name: "Robert Lewan",
  img: "https://plus.unsplash.com/premium_photo-1661349726691-d5efab008d77?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  experience: 3,
  recipes: 15,
  likes: 10,
};

const Chefs = () => {
  const data = useLoaderData();
  return (
    <Box
      as="section"
      py={["60px", null, "80px", "120px"]}
      px="8px"
      bgGradient="linear(to-b,#FFF2D8, transparent)"
    >
      <Center mb="40px">
        <Box>
          <Heading
            as="h2"
            color="gray.700"
            textAlign="center"
            fontSize={["2rem", null, "2.3rem"]}
          >
            Top Rated Master Chefs
          </Heading>
          <Text textAlign="center" mt="10px" color="gray.600">
            Get You Recipes From World Best Master Chefs{" "}
          </Text>
        </Box>
      </Center>

      <SimpleGrid
        w="fit-content"
        mx="auto"
        columns={[1, null, 2, 3, 4]}
        spacing="20px"
      >
        {data.map((item, index) => (
          <ChefsCard key={item.id} {...item} index={index} />
        ))}
        <ChefsCard {...chef1} index={6} />
        <ChefsCard {...chef2} index={7} />
      </SimpleGrid>
    </Box>
  );
};

export default Chefs;
