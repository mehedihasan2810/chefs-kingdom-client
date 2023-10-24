import { useLoaderData, useParams } from "react-router-dom";
import CuisinesCard from "../../components/cuisinesCard/cuisinesCard";
import "./Cuisines.css";
import CuisineHero from "../../components/CuisineHero/CuisineHero";
import { useEffect, useState } from "react";
import { Box, Heading } from "@chakra-ui/react";

import PageNavbar from "../../components/PageNavbar/PageNavbar";

const Cuisines = () => {
  const [chef, setChef] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const data = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          "https://chefs-kingdom-server.vercel.app/chefs",
          {
            signal: abortController.signal,
          }
        );
        const data = await res.json();
        const singleChef = data.find((item) => {
          return item.id === Number(id);
        });
        setChef(singleChef);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, []);

  if (isLoading) {
    return (
      <div className="cuisine-loader">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <Box as="section" maxW="1200px" mx="auto" className="cuisine-container">
      <PageNavbar />

      <CuisineHero chef={chef} />
      <Box py={["60px", null, "80px"]} px="8px" className="cuisines">
        <Box className="section-title">
          <Box className="line"></Box>
          <Heading as="h4" fontSize="1.5rem" mb="20px">
            My Cuisines
          </Heading>
          <Box className="line"></Box>
        </Box>

        <Box className="cuisine-grid">
          {data.map((item) => (
            <CuisinesCard key={item.id} {...item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Cuisines;
