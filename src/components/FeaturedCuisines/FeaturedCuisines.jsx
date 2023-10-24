import { Link } from "react-router-dom";
import {
  Badge,
  Box,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

const FeaturedCuisines = () => {
  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1516684732162-798a0062be99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      img2: "https://images.unsplash.com/photo-1577110058859-74547db40bc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      name: "rice",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Kabab",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Pasta",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80",
      name: "Pizza",
    },
  ];

  return (
    <Box
      as="section"
      py={["60px", null, "80px", "120px"]}
      px="8px"
      bgGradient="linear(to-b,#FFF2D8, transparent)"
    >
      <Box maxW="1400px" mx="auto" className="featuredProducts">
        <Center mb="40px">
          <Box>
            <Heading
              as="h2"
              textAlign="center"
              color="gray.700"
              fontSize={["2rem", null, "2.3rem"]}
            >
              Featured Cuisines
            </Heading>
            <Text textAlign="center" maxW="60ch" mt="10px" color="gray.600">
              Featuring Our top selling and top rated recipe this month
            </Text>
          </Box>
        </Center>

        <SimpleGrid
          w="fit-content"
          mx="auto"
          columns={[1, null, 2, 3, 4]}
          spacing="50px"
        >
          {data.map((item) => {
            return (
              <Link key={item.id} className="link" to="/">
                <Box>
                  <Box pos="relative" isolation="isolate" role="group">
                    <Image
                      src={item.img}
                      alt=""
                      w="280px"
                      h="400px"
                      loading="lazy"
                    />
                    <Badge colorScheme="green" pos="absolute" top="0" right="0">
                      $22
                    </Badge>
                  </Box>
                  <Box>{item.name}</Box>
                </Box>
              </Link>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default FeaturedCuisines;
