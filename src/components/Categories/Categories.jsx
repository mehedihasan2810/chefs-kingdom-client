import { Link } from "react-router-dom";
import "./Categories.css";
import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { categoryData } from "./data";
const Categories = () => {
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

      <Grid
        className="category-grid"
        h={["800px", null, "600px", "800px"]}
        overflow="hidden"
        templateRows={["repeat(3, 1fr)", null, "repeat(2, 1fr)"]}
        templateColumns={[
          "repeat(1, 1fr)",
          null,
          null,
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
        ]}
        gap={4}
      >
        {categoryData.map((item) => (
          <GridItem key={item.id} overflow="hidden" position="relative">
            <Image
              borderRadius="md"
              w="100%"
              h="100%"
              objectFit="cover"
              src={item.img}
              alt={item.btnText}
            />
            <AbsoluteCenter>
              <Link to={item.path}>
                <Button colorScheme={item.btnColor} size="lg">
                  {item.btnText}
                </Button>
              </Link>
            </AbsoluteCenter>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Categories;
