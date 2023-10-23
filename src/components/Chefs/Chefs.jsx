import { useLoaderData } from "react-router-dom";
import ChefsCard from "../ChefsCard/ChefsCard";
import { Box, Center, Heading, SimpleGrid, Text } from "@chakra-ui/react";
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
        columns={[1, 2, null, 3]}
        spacing="20px"
      >
        {data.map((item) => (
          <ChefsCard key={item.id} {...item} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Chefs;
