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
import { NavLink, useNavigate } from "react-router-dom";
import { navbarData } from "../Navbar/data";
import { toast } from "react-toastify";
import { useAuthContext } from "../../contexts/AuthProvider";
import { HamburgerIcon } from "@chakra-ui/icons";
import DrawerNavbar from "../Navbar/DrawerNavbar";
const PageNavbar = () => {
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

  return (
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
  );
};

export default PageNavbar;
