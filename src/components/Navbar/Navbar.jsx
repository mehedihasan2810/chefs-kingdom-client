import { NavLink, useNavigate } from "react-router-dom";
import {
  Link as ChakraLink,
  Flex,
  Heading,
  Image,
  Box,
  Button,
  List,
  ListItem,
  // useColorMode,
  // Spacer,
} from "@chakra-ui/react";
import { useAuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-toastify";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Navbar.css";
import { navbarData } from "./data";

const Navbar = () => {
  // const { colorMode, toggleColorMode } = useColorMode();
  const { currentUser, logOut } = useAuthContext();
  const navigate = useNavigate();

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

  return (
    <Box w="100vw" position="absolute" top="0" left="0" zIndex="2">
      <Box
        py="10px"
        mb="16px"
        borderBlockEnd="1px solid rgba(255, 255, 255, 0.1)"
      >
        <Flex justifyContent="center" gap="60px" color="gray.400">
          <Box as="address">
            <Box as="span">St, Delicious City, London 9578, UK</Box>
          </Box>

          <Box>
            <Box as="span">Daily : 8.00 am to 10.00 pm</Box>
          </Box>

          <ChakraLink as={NavLink} href="tel:+11234567890">
            <Box as="span">+1 123 456 7890</Box>
          </ChakraLink>

          <ChakraLink as={NavLink} href="mailto:booking@restaurant.com">
            <Box>
              <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
            </Box>

            <Box as="span">buyrecipe@gmail.com</Box>
          </ChakraLink>
        </Flex>
      </Box>
      <Flex
        maxW="1800px"
        mx="auto"
        px="8px"
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
        <Box as="nav">
          <List display="flex" gap="40px">
            {navbarData.map(({ id, path, text }) => (
              <ListItem key={id} alignSelf="center" textTransform="uppercase">
                <ChakraLink
                  as={NavLink}
                  to={path}
                  color="gray.100"
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
                  {currentUser?.photoURL ? (
                    <Image
                      title={currentUser?.displayName}
                      src={currentUser?.photoURL}
                      alt="user"
                    />
                  ) : (
                    <Box title="No Name">
                      <AccountCircleIcon style={{ width: 40, height: 40 }} />
                    </Box>
                  )}
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
      </Flex>
    </Box>
  );
};

export default Navbar;
