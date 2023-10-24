import {
  NavLink,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";
import CuisinesCard from "../../components/cuisinesCard/cuisinesCard";
import "./Cuisines.css";
import CuisineHero from "../../components/CuisineHero/CuisineHero";
import { useEffect, useState } from "react";
import {
  Box,
  Circle,
  Flex,
  Heading,
  Hide,
  Show,
  useDisclosure,
  Avatar,
  Button,
  List,
  ListItem,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { navbarData } from "../../components/Navbar/data";
import { HamburgerIcon } from "@chakra-ui/icons";
import DrawerNavbar from "../../components/Navbar/DrawerNavbar";
import { useAuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-toastify";

const Cuisines = () => {
  const [chef, setChef] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const data = useLoaderData();
  const { id } = useParams();

  const { currentUser, logOut } = useAuthContext();
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        // *show toast
        if (currentUser) {
          toast.success("Succesfully Signed Out", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });

          navigate("/");
        }
      })
      .catch((error) => {
        // *show toast
        toast.error(error.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
      });
  };

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
      <Flex
        maxW="1800px"
        mx="auto"
        px="16px"
        mt="16px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading
          as="h2"
          bgImg="https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&w=1600"
          bgSize="cover"
          bgPos="center"
          bgClip="text"
        >
          Chef&#39;s Kingdom
        </Heading>
        <Show above="lg">
          <Box as="nav">
            <List display="flex" gap="40px">
              {navbarData.map(({ id, path, text }) => (
                <ListItem key={id} alignSelf="center" textTransform="uppercase">
                  <ChakraLink
                    as={NavLink}
                    to={path}
                    color="gray.600"
                    fontSize="1.05rem"
                    _hover={{
                      color: "#4FD1C5",
                      textDecor: "none",
                    }}
                    style={({ isActive }) => {
                      if (!(path === "#")) {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          borderBlockEnd: isActive ? "2px solid" : "",
                          color: isActive ? "#4FD1C5" : "gray.100",
                        };
                      }
                    }}
                  >
                    {text}
                  </ChakraLink>
                </ListItem>
              ))}

              {currentUser ? (
                <>
                  <ListItem>
                    <Avatar
                      bg="teal.300"
                      name={currentUser?.displayName}
                      src={currentUser?.photoURL}
                    />
                  </ListItem>
                  <ListItem>
                    <Button
                      colorScheme="green"
                      bgGradient="linear(to-r, teal.500, green.500)"
                      _hover={{
                        bgGradient: "linear(to-r, red.500, yellow.500)",
                      }}
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </Button>
                  </ListItem>
                </>
              ) : (
                <ListItem>
                  <ChakraLink as={NavLink} to="/signin">
                    <Button
                      colorScheme="teal"
                      bgGradient="linear(to-r, teal.500, green.500)"
                      _hover={{
                        bgGradient: "linear(to-r, red.500, yellow.500)",
                      }}
                    >
                      Sign In
                    </Button>
                  </ChakraLink>
                </ListItem>
              )}
            </List>
          </Box>
        </Show>
        {/* hamburger menu for mobile start */}
        <Hide above="lg">
          <Circle
            onClick={onOpen}
            as="button"
            size="50px"
            p="8px"
            border="1px"
            borderColor="gray.400"
            color="gray.400"
            _hover={{ borderColor: "gray.50" }}
          >
            <HamburgerIcon w="100%" h="100%" />
          </Circle>
          <DrawerNavbar
            onOpen={onOpen}
            isOpen={isOpen}
            onClose={onClose}
            currentUser={currentUser}
            handleSignOut={handleSignOut}
            navbarData={navbarData}
          />
        </Hide>
        {/* hamburger menu for mobile end */}
      </Flex>

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
